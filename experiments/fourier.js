const cw = 500;
const ch = 500;

window.addEventListener("load", () => {
    const synth = new Tone.PolySynth(Tone.Synth).toDestination();
    const now = Tone.now();
})

function setup() { 
    createCanvas(cw, ch);
    background(255, 255, 255);
}

function play() {
    synth.triggerAttack("D4", now);
    synth.triggerAttack("F4", now + 0.5);
    synth.triggerAttack("A4", now + 1);
    synth.triggerAttack("C5", now + 1.5);
    synth.triggerAttack("E5", now + 2);
    synth.triggerRelease(["D4", "F4", "A4", "C5", "E5"], now + 4);
}

function mouseClicked() {
    play();
}