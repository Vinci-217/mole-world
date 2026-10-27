/** User-gesture audio: original Flower Sea BGM plus spatially mixed ambience. */
export class ManorAudio{
  private ctx:AudioContext|undefined;
  private master:GainNode|undefined;
  private noise:AudioBuffer|undefined;
  private music=new Audio('./assets/handmade/audio/BGM_131.mp3');
  active=false;private wind:GainNode|undefined;private water:GainNode|undefined;
  constructor(){this.music.loop=true;this.music.volume=.18;}
  async start(){
    if(!this.ctx){
      this.ctx=new AudioContext();this.master=this.ctx.createGain();this.master.gain.value=.4;this.master.connect(this.ctx.destination);
      const n=this.ctx.sampleRate*3;this.noise=this.ctx.createBuffer(1,n,this.ctx.sampleRate);const d=this.noise.getChannelData(0);let b=0;
      for(let i=0;i<n;i++){b=(b+(Math.random()*2-1)*.035)/1.035;d[i]=b*4;}
      for(const [cutoff,level,type] of [[420,.13,'wind'],[1500,.035,'water']] as const){
        const s=this.ctx.createBufferSource();s.buffer=this.noise;s.loop=true;const f=this.ctx.createBiquadFilter();f.type='lowpass';f.frequency.value=cutoff;const g=this.ctx.createGain();g.gain.value=level;s.connect(f).connect(g).connect(this.master);s.start();if(type==='wind')this.wind=g;else this.water=g;
      }
    }
    await this.ctx.resume();this.active=true;this.master!.gain.setTargetAtTime(.4,this.ctx.currentTime,.2);await this.music.play().catch(()=>{});
  }
  async toggle(){if(this.active){this.active=false;this.master?.gain.setTargetAtTime(0,this.ctx!.currentTime,.2);this.music.pause();return false;}await this.start();await this.music.play().catch(()=>{});return true;}
  update(x:number,z:number){if(!this.ctx||!this.active)return;this.water?.gain.setTargetAtTime(.02+.13*Math.exp(-((x+22)**2)/100),this.ctx.currentTime,.5);this.wind?.gain.setTargetAtTime(x<-27?.10:.07,this.ctx.currentTime,.5);}
  bell(){
    if(!this.ctx||!this.master)return;const now=this.ctx.currentTime;
    for(const [f,a,d] of [[523,.3,4],[1048,.14,2.5],[1568,.07,1.8],[2201,.035,1.3]]){
      const o=this.ctx.createOscillator(),g=this.ctx.createGain();o.frequency.value=f;o.type='sine';g.gain.setValueAtTime(a,now);g.gain.exponentialRampToValueAtTime(.0001,now+d);o.connect(g).connect(this.master);o.start(now);o.stop(now+d+.1);
    }
  }
  chime(){if(!this.ctx||!this.master)return;const t=this.ctx.currentTime;for(let i=0;i<3;i++){const o=this.ctx.createOscillator(),g=this.ctx.createGain();o.frequency.value=659*Math.pow(1.25,i);g.gain.setValueAtTime(0,t+i*.1);g.gain.linearRampToValueAtTime(.06,t+i*.1+.015);g.gain.exponentialRampToValueAtTime(.0001,t+i*.1+1);o.connect(g).connect(this.master);o.start(t+i*.1);o.stop(t+i*.1+1);}}
  footstep(stone:boolean){if(!this.ctx||!this.master||!this.noise)return;const t=this.ctx.currentTime,s=this.ctx.createBufferSource(),g=this.ctx.createGain(),f=this.ctx.createBiquadFilter();s.buffer=this.noise;f.frequency.value=stone?1100:500;g.gain.setValueAtTime(stone?.12:.075,t);g.gain.exponentialRampToValueAtTime(.001,t+.12);s.connect(f).connect(g).connect(this.master);s.start(t,Math.random(),.15);}
  get track(){return{playing:!this.music.paused,time:this.music.currentTime};}
  dispose(){this.music.pause();this.music.removeAttribute('src');void this.ctx?.close();}
}
