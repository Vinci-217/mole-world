import type { Weather } from './world';

/** A small original, continuously composed ambient score. No external recordings. */
export class Soundscape {
  private context?: AudioContext;
  private master?: GainNode;
  private rain?: GainNode;
  private wind?: GainNode;
  private brook?: GainNode;
  private reverb?: ConvolverNode;
  private timer?: ReturnType<typeof setInterval>;
  private nextNote = 0;
  private step = 0;
  private volume = .45;
  private weather: Weather = 'mist';
  private active = false;
  private lastStep = 0;

  get playing() { return this.active; }
  get state() { return this.context?.state ?? 'uninitialized'; }

  async toggle() {
    if (!this.context) this.init();
    await this.context!.resume();
    this.active = !this.active;
    this.master!.gain.setTargetAtTime(this.active ? this.volume * .55 : 0, this.context!.currentTime, .4);
    if (this.active) { this.nextNote = this.context!.currentTime + .1; this.schedule(); }
    return this.active;
  }

  setVolume(value: number) { this.volume = value; if (this.master && this.context) this.master.gain.setTargetAtTime(this.active ? value * .55 : 0, this.context.currentTime, .2); }

  setWeather(weather: Weather) {
    this.weather = weather;
    if (!this.context) return;
    const t = this.context.currentTime;
    this.rain!.gain.setTargetAtTime(weather === 'rain' ? .11 : 0, t, 1.5);
    this.wind!.gain.setTargetAtTime(weather === 'snow' ? .05 : weather === 'rain' ? .035 : .018, t, 2);
    this.brook!.gain.setTargetAtTime(weather === 'rain' ? .025 : .014, t, 2);
  }

  private init() {
    const c = this.context = new AudioContext();
    this.master = c.createGain(); this.master.gain.value = 0; this.master.connect(c.destination);
    this.reverb = c.createConvolver();
    const impulse = c.createBuffer(2, c.sampleRate * 3, c.sampleRate);
    for (let channel = 0; channel < 2; channel++) {const a = impulse.getChannelData(channel); for (let i = 0; i < a.length; i++) a[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / a.length, 3) * .55;}
    this.reverb.buffer = impulse; const wet = c.createGain(); wet.gain.value = .24; this.reverb.connect(wet); wet.connect(this.master);
    const noise = c.createBuffer(1, c.sampleRate * 6, c.sampleRate); const data = noise.getChannelData(0);
    let brown = 0; for (let i = 0; i < data.length; i++) {brown = (brown + (Math.random() * 2 - 1) * .02) / 1.02; data[i] = brown * 3.5;}
    const layer = (freq: number, type: BiquadFilterType) => {const source = c.createBufferSource(); source.buffer = noise; source.loop = true; const filter = c.createBiquadFilter(); filter.type = type; filter.frequency.value = freq; const gain = c.createGain(); gain.gain.value = 0; source.connect(filter); filter.connect(gain); gain.connect(this.master!); source.start(); return gain;};
    this.rain = layer(1800, 'highpass'); this.wind = layer(420, 'lowpass'); this.brook = layer(650, 'bandpass');
    this.setWeather(this.weather);
    // D minor / B-flat / F / C, voiced softly beneath the plucked melody.
    for (const frequency of [73.416, 110, 146.832]) {
      const oscillator = c.createOscillator(); oscillator.type = 'sine'; oscillator.frequency.value = frequency;
      const gain = c.createGain(); gain.gain.value = .016; oscillator.connect(gain); gain.connect(this.master); oscillator.start();
    }
    this.timer = setInterval(() => this.schedule(), 200);
  }

  private schedule() {
    if (!this.active || !this.context) return;
    const chords = [[50,57,62,65,69,64,65,57], [46,53,58,62,65,62,58,53], [41,53,57,60,65,60,57,53], [48,55,60,64,67,64,60,55]];
    const melody = [0, 2, 3, 1, 4, 2, 3, 1];
    while (this.nextNote < this.context.currentTime + .6) {
      const chord = chords[Math.floor(this.step / 16) % 4];
      const note = chord[melody[this.step % melody.length]];
      this.pluck(440 * 2 ** ((note - 69) / 12), this.nextNote, this.step % 4 === 0 ? .075 : .043);
      if (this.step % 8 === 0) this.pluck(440 * 2 ** ((chord[3] + 12 - 69) / 12), this.nextNote + .12, .018);
      this.nextNote += 60 / 56 / 2; this.step++;
    }
  }

  private pluck(frequency: number, when: number, level: number) {
    const c = this.context!; const gain = c.createGain(); gain.gain.setValueAtTime(0, when); gain.gain.linearRampToValueAtTime(level, when + .018); gain.gain.exponentialRampToValueAtTime(.0001, when + 3.5);
    const filter = c.createBiquadFilter(); filter.type = 'lowpass'; filter.frequency.value = 1400;
    const pan = c.createStereoPanner(); pan.pan.value = Math.sin(this.step * 1.3) * .35;
    gain.connect(filter); filter.connect(pan); pan.connect(this.master!); pan.connect(this.reverb!);
    for (const [multiple, strength] of [[1,1], [2,.22], [3,.07]]) {const osc = c.createOscillator(); osc.type = 'sine'; osc.frequency.value = frequency * multiple; const amp = c.createGain(); amp.gain.value = strength; osc.connect(amp); amp.connect(gain); osc.start(when); osc.stop(when + 3.6);}
  }

  footstep() {
    if (!this.context || !this.active || this.context.currentTime - this.lastStep < .4) return;
    const c = this.context; this.lastStep = c.currentTime;
    const osc = c.createOscillator(); osc.type = 'triangle'; osc.frequency.setValueAtTime(110, c.currentTime); osc.frequency.exponentialRampToValueAtTime(40, c.currentTime + .08);
    const gain = c.createGain(); gain.gain.setValueAtTime(.035, c.currentTime); gain.gain.exponentialRampToValueAtTime(.0001, c.currentTime + .1); osc.connect(gain); gain.connect(this.master!); osc.start(); osc.stop(c.currentTime + .12);
  }
  dispose() {if (this.timer) clearInterval(this.timer); void this.context?.close();}
}
