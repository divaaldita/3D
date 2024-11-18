function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(220);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(150, 10);
}