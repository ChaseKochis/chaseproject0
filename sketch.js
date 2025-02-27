function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background('white');

  // Speed Lines
  stroke('black');
  strokeWeight(3);
  for (let i = 0; i < 50 ; i++) {
    line(50 + i * 20, 300, 200 + i * 30, 50);
  }

  // Steep Triangle (Representing a fast arrow or incline)
  noStroke();
  fill('DarkMagenta');
  triangle(120, 300, 300, 100, 340, 300);

  // Motion Arc
  fill('black');
  arc(100, 100, 80, 80, HALF_PI, PI);

  // Logo Letter (Optional)
  fill('black');
  textSize(45);
  textAlign(CENTER, CENTER);
  //text('STEEP', 320, 200);
 // text('FAST', 330, 240);
 //test test test
 // test 2 tes t2 test ee
// test test 
}
