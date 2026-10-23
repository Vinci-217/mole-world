import * as T from 'three';

/** Soft round points, rather than visible square sprite boundaries. */
export function flowerParticleMaterial(parameters:T.PointsMaterialParameters){
  const material=new T.PointsMaterial({...parameters,transparent:true,depthWrite:false});
  material.onBeforeCompile=shader=>{
    shader.vertexShader=shader.vertexShader.replace('#include <logdepthbuf_vertex>','#include <logdepthbuf_vertex>\ngl_PointSize=min(gl_PointSize,7.0);');
    shader.fragmentShader=shader.fragmentShader.replace('#include <map_particle_fragment>',`#include <map_particle_fragment>
      float radius=length(gl_PointCoord-.5)*2.;
      diffuseColor.a*=pow(max(0.,1.-radius*radius),2.);
      if(diffuseColor.a<.015)discard;`);
  };
  return material;
}
