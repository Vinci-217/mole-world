/** Original synthesized ambience; never represented as an official game BGM. */
export class ForestAudio{
  private context?:AudioContext;
  private master?:GainNode;
  private active=false;
  get playing(){return this.active;}
  async toggle(){
    if(!this.context){
      const context=this.context=new AudioContext(),master=this.master=context.createGain();master.gain.value=0;master.connect(context.destination);
      const noise=context.createBuffer(1,context.sampleRate*6,context.sampleRate),data=noise.getChannelData(0);
      let last=0;for(let i=0;i<data.length;i++){last=(last+(Math.random()*2-1)*.02)/1.02;data[i]=last*4;}
      const wind=context.createBufferSource();wind.buffer=noise;wind.loop=true;
      const filter=context.createBiquadFilter();filter.type='lowpass';filter.frequency.value=680;
      const windGain=context.createGain();windGain.gain.value=.23;wind.connect(filter).connect(windGain).connect(master);wind.start();
      // A quiet suspended chord, with independent slow breathing.
      for(const [i,frequency] of [130.81,196,293.66,440].entries()){
        const voice=context.createOscillator(),gain=context.createGain(),lfo=context.createOscillator(),depth=context.createGain();
        voice.type='sine';voice.frequency.value=frequency;voice.detune.value=(i-1.5)*3;gain.gain.value=.018;
        lfo.frequency.value=.08+i*.021;depth.gain.value=.008;lfo.connect(depth).connect(gain.gain);
        voice.connect(gain).connect(master);voice.start();lfo.start();
      }
      const cricket=context.createOscillator(),cricketGain=context.createGain(),pulse=context.createOscillator(),depth=context.createGain();
      cricket.frequency.value=3200;cricketGain.gain.value=.003;pulse.frequency.value=3.7;depth.gain.value=.003;
      pulse.connect(depth).connect(cricketGain.gain);cricket.connect(cricketGain).connect(master);cricket.start();pulse.start();
    }
    await this.context.resume();this.active=!this.active;
    this.master!.gain.setTargetAtTime(this.active?.75:0,this.context.currentTime,.3);return this.active;
  }
  dispose(){this.active=false;void this.context?.close();}
}
