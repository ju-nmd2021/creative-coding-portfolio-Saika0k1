const cw = 520;
const ch = 520;
const gridSize = 40;
const divider = 5;

function setup() {
    createCanvas(cw, ch); 
}

function draw() {
    noiseSeed(Math.floor(Math.random() * 10000));

    background(241, 194, 50);
    for (let y = 0; y < ch/gridSize; y++) {
        for (let x = 0; x < cw/gridSize; x++) {
            let noiseMap = noise(x / divider, y / divider);
                push();
                    translate(gridSize/2, gridSize/2);
                    fill(255);
                    noStroke();
                    circle(x * gridSize, y * gridSize, noiseMap * gridSize + 20);
                pop();
        }
    }

    noLoop();
}

function mouseClicked() {
    draw();
}