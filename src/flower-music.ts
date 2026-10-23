/** Map 362's BGM_131, verified against the archived ClientConfigDLL mapping. */
export class FlowerMusic {
  private track = new Audio('./assets/flower-sea/audio/BGM_131.mp3');
  private active=false;
  constructor(){this.track.loop=true;this.track.volume=.48;this.track.preload='metadata';}
  get playing(){return this.active;}
  get snapshot(){return {playing:this.active,paused:this.track.paused,track:'BGM_131',currentTime:this.track.currentTime,duration:this.track.duration,readyState:this.track.readyState};}
  async toggle(){
    if(this.active){this.track.pause();this.active=false;}
    else{await this.track.play();this.active=true;}
    return this.active;
  }
  setWeather(_weather:string){}
  dispose(){this.track.pause();this.track.removeAttribute('src');this.track.load();}
}
