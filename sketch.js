function setup() {
  createCanvas(1350, 500);
}

function draw() {
if(mouseIsPressed){
  fill(225, 0, 150);
  noStroke();
  ellipse(mouseX, mouseY, 20, 20);
}
  
  rect(50, 50, 80, 80);

}
