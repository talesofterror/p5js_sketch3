let ticker = 0;
let time = 0;

function setup() {
  // createCanvas(400, 400);
  let renderer = createCanvas(windowWidth / 2, windowWidth / 2);
  renderer.parent("frame");

  frameRate(24);

}

/*
  background-color: rgb(250, 199, 175);
*/

function draw() {
  background(0);

  ticker++;
  time = ticker / 5;



  fill(0, 0, 0, 0);
  stroke(250, 50, 50);
  strokeWeight(15);
  rect(0, 0, width, height);

  fill(0, 0, 0, 0);
  stroke(250, 250, 150);
  strokeWeight(15);
  rect(0 + width/15, 0 + height/15, width - 28, height - 28);


  // fill(0, 0, 0, 0);
  // stroke(150, 250, 250);
  // strokeWeight(15);
  // rect(0, 0, width, height);

  // fill(0, 0, 0, 0);
  // stroke(250, 250, 150);
  // strokeWeight(15);
  // rect(0 + 15, 0 + 15, width - 30, height - 30);

  // fill(0, 0, 0, 0);
  // stroke(150, 250, 250);
  // strokeWeight(15);
  // rect(0 + 30, 0 + 30, width - 60, height - 60);

  // fill(0, 0, 0, 0);
  // stroke(150, 250, 150);
  // strokeWeight(15);
  // rect(0 + 45, 0 + 45, width - 90, height - 90);

  // print(time);





}
