declare module 'n8ao' {
  import { Camera, Color, Scene, WebGLRenderTarget } from 'three';
  import { Pass } from 'three/addons/postprocessing/Pass.js';
  export class N8AOPass extends Pass {
    constructor(scene:Scene,camera:Camera,width?:number,height?:number);
    configuration: {
      aoRadius:number; distanceFalloff:number; intensity:number; color:Color;
      gammaCorrection:boolean; halfRes:boolean; transparencyAware:boolean;
      aoSamples:number; denoiseSamples:number; denoiseRadius:number;
    };
    beautyRenderTarget:WebGLRenderTarget;
    setQualityMode(mode:'Performance'|'Low'|'Medium'|'High'|'Ultra'):void;
  }
}
