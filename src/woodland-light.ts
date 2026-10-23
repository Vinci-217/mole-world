import * as T from 'three';
import {Pass,FullScreenQuad} from 'three/addons/postprocessing/Pass.js';

/** Half-resolution participating light, occluded by the real tree shadow map.
 * Reconstructs the view ray from scene depth. No translucent cones/flat sheets.
 */
export class WoodlandLightPass extends Pass{
  private target=new T.WebGLRenderTarget(1,1,{type:T.HalfFloatType,depthBuffer:false});
  private march:T.ShaderMaterial;
  private combine:T.ShaderMaterial;
  private quad:FullScreenQuad;
  private light:T.DirectionalLight|undefined;
  strength=1;
  constructor(private camera:T.PerspectiveCamera,private depth:()=>T.Texture){
    super();
    const vertexShader='varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}';
    this.march=new T.ShaderMaterial({depthTest:false,depthWrite:false,uniforms:{
      depthMap:{value:null},shadowMap:{value:null},inverseProjection:{value:camera.projectionMatrixInverse},cameraWorld:{value:camera.matrixWorld},
      shadowMatrix:{value:new T.Matrix4()},eye:{value:new T.Vector3()},sunDirection:{value:new T.Vector3()},sunColor:{value:new T.Color()},strength:{value:1},
    },vertexShader,fragmentShader:`varying vec2 vUv;
      uniform sampler2D depthMap,shadowMap;
      uniform mat4 inverseProjection,cameraWorld,shadowMatrix;
      uniform vec3 eye,sunDirection,sunColor;uniform float strength;
      #include <packing>
      float hash(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}
      void main(){
        float depth=texture2D(depthMap,vUv).r;
        vec4 view=inverseProjection*vec4(vUv*2.-1.,depth*2.-1.,1.);view/=view.w;
        vec3 end=(cameraWorld*view).xyz,ray=normalize(end-eye);
        float lengthRay=min(length(end-eye),85.),stepSize=lengthRay/24.;
        float jitter=hash(gl_FragCoord.xy),scatter=0.;
        for(int i=0;i<24;i++){
          float distanceRay=(float(i)+jitter)*stepSize;
          vec3 point=eye+ray*distanceRay;
          vec4 shadow=shadowMatrix*vec4(point,1.);shadow.xyz/=shadow.w;
          bool inside=all(greaterThan(shadow.xyz,vec3(0.)))&&all(lessThan(shadow.xyz,vec3(1.)));
          float visibility=0.;
          if(inside){float stored=unpackRGBAToDepth(texture2D(shadowMap,shadow.xy));visibility=step(shadow.z-.00055,stored);}
          float density=exp(-max(point.y,0.)*.095)*exp(-distanceRay*.008);
          scatter+=visibility*density*stepSize*.008;
        }
        float phase=.25+.75*pow(max(0.,dot(ray,sunDirection)),3.);
        gl_FragColor=vec4(sunColor*scatter*phase*strength,1.);
      }`});
    this.combine=new T.ShaderMaterial({depthTest:false,depthWrite:false,uniforms:{tDiffuse:{value:null},scatterMap:{value:this.target.texture},texel:{value:new T.Vector2(1,1)}},vertexShader,
      fragmentShader:`varying vec2 vUv;uniform sampler2D tDiffuse,scatterMap;uniform vec2 texel;
        void main(){vec4 c=texture2D(tDiffuse,vUv);vec3 scatter=texture2D(scatterMap,vUv).rgb*.4;
          scatter+=(texture2D(scatterMap,vUv+texel).rgb+texture2D(scatterMap,vUv-texel).rgb+texture2D(scatterMap,vUv+vec2(texel.x,-texel.y)).rgb+texture2D(scatterMap,vUv+vec2(-texel.x,texel.y)).rgb)*.15;
          gl_FragColor=vec4(c.rgb+scatter,c.a);}`} );
    this.quad=new FullScreenQuad(this.march);
  }
  setLight(light:T.DirectionalLight){this.light=light;}
  setSize(width:number,height:number){this.target.setSize(Math.max(1,Math.ceil(width*.5)),Math.max(1,Math.ceil(height*.5)));this.combine.uniforms.texel.value.set(1/this.target.width,1/this.target.height);}
  render(renderer:T.WebGLRenderer,write:T.WebGLRenderTarget,read:T.WebGLRenderTarget){
    const u=this.march.uniforms,light=this.light;
    u.depthMap.value=this.depth();u.eye.value.copy(this.camera.position);
    u.strength.value=light?.shadow.map?this.strength:0;
    if(light?.shadow.map){
      u.shadowMap.value=light.shadow.map.texture;u.shadowMatrix.value.copy(light.shadow.matrix);
      u.sunColor.value.copy(light.color).multiplyScalar(light.intensity);
      u.sunDirection.value.copy(light.position).sub(light.target.position).normalize();
    }
    this.quad.material=this.march;renderer.setRenderTarget(this.target);this.quad.render(renderer);
    this.combine.uniforms.tDiffuse.value=read.texture;this.quad.material=this.combine;
    renderer.setRenderTarget(this.renderToScreen?null:write);this.quad.render(renderer);
  }
  dispose(){this.target.dispose();this.march.dispose();this.combine.dispose();this.quad.dispose();}
}
