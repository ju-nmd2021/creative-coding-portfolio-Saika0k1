const cw = 500;
const ch = 500;
const count = 100000;
let radius = 10;
let cRadius = 25;

function setup() {
    createCanvas(cw, ch);
    background(200, 200, 200);
}

function draw() {
    noiseSeed(random() * 1000);
    translate(0, 0);
    noFill();
    // fill(0,0,0);
    for (let i = 0; i < count; i++) {
        let xPos = cos(i/count * QUARTER_PI) * radius * random();
        let yPos = sin(i/count * TWO_PI) * radius * random();
        
        stroke(0, 0, 0, (ch-yPos)/ch * 255);
        circle(xPos, yPos, cRadius * random());

        radius += 4;
    }
    noLoop();
}