function setup() {
    createCanvas(400, 400);
    background("#05A9F5");
  
  }
  
  function draw() {
    stroke("green");
    fill("yellow");
    if(mouseIsPressed) {
    rect(mouseX,mouseY,20,20);
    }
  }