function setup() {
  createCanvas(1275, 825);
  background(220);
  frameRate(30);
}

function draw() {
  background(255, 255, 255);
  //center line//
  //stroke (0);
  //line (width/2, 0, width/2, height);

  //curtain rod//
  strokeWeight(2);
  stroke(0);
  fill(70, 244, 255);
  ellipse(40, 30, 14);
  stroke(0);
  fill(70, 244, 255);
  ellipse(1235, 30, 14)
  rect(47, 28, 1182, 5);

  //window//
  var op = 250
  fill(184, 144, 70); //brown
  rect(67, 78, 1141, 600);
  //window inside//
  fill(138, 189, 255, op); //blue
  rect(77, 88, 555.5, 580); //left
  rect(642.5, 88, 555.5, 580); //right
  //glass
  noStroke();
  fill(255, 255, 255, 15);
  //left
  quad(497, 88, 67, 508, 67, 538, 527, 88);
  quad(557, 88, 67, 558, 67, 572, 572, 88);
  quad(632.5, 118, 67, 618, 67, 628, 632.5, 128);
  quad(632.5, 158, 67, 658, 67, 688, 632.5, 188);
  quad(632.5, 218, 67, 718, 67, 732, 632.5, 238);
  quad(632.5, 418, 347, 667, 357, 667, 632.5, 438);
  quad(632.5, 568, 507, 667, 517, 667, 632.5, 578);
  //right
  quad(642.5, 348, 940, 88, 970, 88, 642.5, 368);
  quad(642.5, 268, 850, 88, 865, 88, 642.5, 283);
  quad(642.5, 128, 700, 88, 730, 88, 642.5, 158);
  quad(642.5, 508, 1100, 88, 1140, 88, 642.5, 548);
  quad(642.5, 583, 1175, 88, 1185, 88, 642.5, 593);
  quad(682.5, 667, 1197, 228, 1197, 248, 712.5, 667);
  quad(802.5, 667, 1197, 348, 1197, 388, 852.5, 667);
  quad(1002.5, 667, 1197, 508, 1197, 528, 1022.5, 667);

  //Shelf
  stroke(0);
  strokeWeight(2);
  fill(255, 242, 161, 100);
  rect(65, 720, 1182, 25, 10);

  //curtain//
  stroke(0);
  strokeWeight(2);
  fill(255, 242, 84);
  rect(77, 23, 15, 45, 5);
  rect(137, 23, 15, 45, 5);
  rect(197, 23, 15, 45, 5);
  rect(257, 23, 15, 45, 5);
  rect(317, 23, 15, 45, 5);
  rect(377, 23, 15, 45, 5);
  rect(437, 23, 15, 45, 5);
  quad(60, 53, 60, 520, 257, 520, 467, 53);
  fill(255, 242, 84);
  rect(60, 520, 197, 300);
  stroke(255, 242, 84);
  strokeWeight(3)
  line(62, 520, 255, 520);
  //stripes//
  noStroke();
  fill(255, 242, 161, 160);
  rect(70, 53, 25, 766);
  rect(120, 53, 25, 766);
  rect(170, 53, 20, 766);
  quad(447, 53, 237, 520, 212, 520, 412, 53);
  quad(372, 53, 237, 520, 212, 520, 337, 53);
  quad(297, 53, 237, 520, 212, 520, 262, 53);
  rect(212, 520, 25, 299);
  rect(210, 53, 18, 766);
  //top of curtain)
  stroke(0);
  strokeWeight(2);
  fill(255, 242, 161);
  rect(56, 53, 412, 10, 10);

  //cactus 1 
  var x1 = 460
  var y1 = 630
  var x2 = 465
  var y2 = 450
  var x3 = 515
  var x4 = 505

  stroke(0);
  strokeWeight(1)
  point(x1, y1);
  point(x2, y2);
  point(x3, y2);
  point(x4, y1);
  strokeWeight(2);
  fill(106, 174, 47);

  beginShape();
  curveVertex(x1, y1);
  curveVertex(x1, y1);
  curveVertex(x2, y2);
  curveVertex(x3, y2);
  curveVertex(x4, y1);
  curveVertex(x4, y1);
  endShape();

  y2 = y2 - 1
  if (frameCount > 10) {
    stroke(0);
    strokeWeight(1)
    point(x1, y1);
    point(x2, y2);
    point(x3, y2);
    point(x4, y1);
    strokeWeight(2);
    fill(106, 174, 47);

    beginShape();
    curveVertex(x1, y1);
    curveVertex(x1, y1);
    curveVertex(x2, y2);
    curveVertex(x3, y2);
    curveVertex(x4, y1);
    curveVertex(x4, y1);
    endShape();
  }
  y2 = y2 - 1
  if (frameCount > 15) {
    stroke(0);
    strokeWeight(1)
    point(x1, y1);
    point(x2, y2);
    point(x3, y2);
    point(x4, y1);
    strokeWeight(2);
    fill(106, 174, 47);

    beginShape();
    curveVertex(x1, y1);
    curveVertex(x1, y1);
    curveVertex(x2, y2);
    curveVertex(x3, y2);
    curveVertex(x4, y1);
    curveVertex(x4, y1);
    endShape();
  }
  y2 = y2 - 1
  if (frameCount > 20) {
    stroke(0);
    strokeWeight(1)
    point(x1, y1);
    point(x2, y2);
    point(x3, y2);
    point(x4, y1);
    strokeWeight(2);
    fill(106, 174, 47);

    beginShape();
    curveVertex(x1, y1);
    curveVertex(x1, y1);
    curveVertex(x2, y2);
    curveVertex(x3, y2);
    curveVertex(x4, y1);
    curveVertex(x4, y1);
    endShape();
  }
  y2 = y2 - 1
  if (frameCount > 25) {
    stroke(0);
    strokeWeight(1)
    point(x1, y1);
    point(x2, y2);
    point(x3, y2);
    point(x4, y1);
    strokeWeight(2);
    fill(106, 174, 47);

    beginShape();
    curveVertex(x1, y1);
    curveVertex(x1, y1);
    curveVertex(x2, y2);
    curveVertex(x3, y2);
    curveVertex(x4, y1);
    curveVertex(x4, y1);
    endShape();
  }
  y2 = y2 - 1
  if (frameCount > 30) {
    stroke(0);
    strokeWeight(1)
    point(x1, y1);
    point(x2, y2);
    point(x3, y2);
    point(x4, y1);
    strokeWeight(2);
    fill(106, 174, 47);

    beginShape();
    curveVertex(x1, y1);
    curveVertex(x1, y1);
    curveVertex(x2, y2);
    curveVertex(x3, y2);
    curveVertex(x4, y1);
    curveVertex(x4, y1);
    endShape();
  }
  y2 = y2 - 1
  if (frameCount > 35) {
    stroke(0);
    strokeWeight(1)
    point(x1, y1);
    point(x2, y2);
    point(x3, y2);
    point(x4, y1);
    strokeWeight(2);
    fill(106, 174, 47);

    beginShape();
    curveVertex(x1, y1);
    curveVertex(x1, y1);
    curveVertex(x2, y2);
    curveVertex(x3, y2);
    curveVertex(x4, y1);
    curveVertex(x4, y1);
    endShape();
  }
  y2 = y2 - 1
  if (frameCount > 40) {
    stroke(0);
    strokeWeight(1)
    point(x1, y1);
    point(x2, y2);
    point(x3, y2);
    point(x4, y1);
    strokeWeight(2);
    fill(106, 174, 47);

    beginShape();
    curveVertex(x1, y1);
    curveVertex(x1, y1);
    curveVertex(x2, y2);
    curveVertex(x3, y2);
    curveVertex(x4, y1);
    curveVertex(x4, y1);
    endShape();
  }
  y2 = y2 - 1
  if (frameCount > 45) {
    stroke(0);
    strokeWeight(1)
    point(x1, y1);
    point(x2, y2);
    point(x3, y2);
    point(x4, y1);
    strokeWeight(2);
    fill(106, 174, 47);

    beginShape();
    curveVertex(x1, y1);
    curveVertex(x1, y1);
    curveVertex(x2, y2);
    curveVertex(x3, y2);
    curveVertex(x4, y1);
    curveVertex(x4, y1);
    endShape();
  }
  y2 = y2 - 1
  if (frameCount > 50) {
    stroke(0);
    strokeWeight(1)
    point(x1, y1);
    point(x2, y2);
    point(x3, y2);
    point(x4, y1);
    strokeWeight(2);
    fill(106, 174, 47);

    beginShape();
    curveVertex(x1, y1);
    curveVertex(x1, y1);
    curveVertex(x2, y2);
    curveVertex(x3, y2);
    curveVertex(x4, y1);
    curveVertex(x4, y1);
    endShape();
  }
  y2 = y2 - 1
  if (frameCount > 55) {
    stroke(0);
    strokeWeight(1)
    point(x1, y1);
    point(x2, y2);
    point(x3, y2);
    point(x4, y1);
    strokeWeight(2);
    fill(106, 174, 47);

    beginShape();
    curveVertex(x1, y1);
    curveVertex(x1, y1);
    curveVertex(x2, y2);
    curveVertex(x3, y2);
    curveVertex(x4, y1);
    curveVertex(x4, y1);
    endShape();
  }
  y2 = y2 - 1
  if (frameCount > 60) {
    stroke(0);
    strokeWeight(1)
    point(x1, y1);
    point(x2, y2);
    point(x3, y2);
    point(x4, y1);
    strokeWeight(2);
    fill(106, 174, 47);

    beginShape();
    curveVertex(x1, y1);
    curveVertex(x1, y1);
    curveVertex(x2, y2);
    curveVertex(x3, y2);
    curveVertex(x4, y1);
    curveVertex(x4, y1);
    endShape();
  }

  //cactus lines
  var Lx1 = 470
  var Ly1 = 630
  var Lx2 = 475
  var Ly2 = 455
  var Lx3 = 480
  var Lx4 = 480

  stroke(0);
  strokeWeight(0)
  point(Lx1, Ly1);
  point(Lx2, Ly2);
  point(Lx3, Ly2);
  point(Lx4, Ly1);
  strokeWeight(2);
  fill(71, 125, 24);

  beginShape();
  curveVertex(Lx1, Ly1);
  curveVertex(Lx1, Ly1);
  curveVertex(Lx2, Ly2);
  curveVertex(Lx3, Ly2);
  curveVertex(Lx4, Ly1);
  curveVertex(Lx4, Ly1);
  endShape();

  Ly2 = Ly2 - 1
  if (frameCount > 10) {
    stroke(0);
    strokeWeight(0)
    point(Lx1, Ly1);
    point(Lx2, Ly2);
    point(Lx3, Ly2);
    point(Lx4, Ly1);
    strokeWeight(2);
    fill(71, 125, 24);

    beginShape();
    curveVertex(Lx1, Ly1);
    curveVertex(Lx1, Ly1);
    curveVertex(Lx2, Ly2);
    curveVertex(Lx3, Ly2);
    curveVertex(Lx4, Ly1);
    curveVertex(Lx4, Ly1);
    endShape();
  }
  Ly2 = Ly2 - 1
  if (frameCount > 15) {
    stroke(0);
    strokeWeight(0)
    point(Lx1, Ly1);
    point(Lx2, Ly2);
    point(Lx3, Ly2);
    point(Lx4, Ly1);
    strokeWeight(2);
    fill(71, 125, 24);

    beginShape();
    curveVertex(Lx1, Ly1);
    curveVertex(Lx1, Ly1);
    curveVertex(Lx2, Ly2);
    curveVertex(Lx3, Ly2);
    curveVertex(Lx4, Ly1);
    curveVertex(Lx4, Ly1);
    endShape();
  }
  Ly2 = Ly2 - 1
  if (frameCount > 20) {
    stroke(0);
    strokeWeight(0)
    point(Lx1, Ly1);
    point(Lx2, Ly2);
    point(Lx3, Ly2);
    point(Lx4, Ly1);
    strokeWeight(2);
    fill(71, 125, 24);

    beginShape();
    curveVertex(Lx1, Ly1);
    curveVertex(Lx1, Ly1);
    curveVertex(Lx2, Ly2);
    curveVertex(Lx3, Ly2);
    curveVertex(Lx4, Ly1);
    curveVertex(Lx4, Ly1);
    endShape();
  }
  Ly2 = Ly2 - 1
  if (frameCount > 25) {
    stroke(0);
    strokeWeight(0)
    point(Lx1, Ly1);
    point(Lx2, Ly2);
    point(Lx3, Ly2);
    point(Lx4, Ly1);
    strokeWeight(2);
    fill(71, 125, 24);

    beginShape();
    curveVertex(Lx1, Ly1);
    curveVertex(Lx1, Ly1);
    curveVertex(Lx2, Ly2);
    curveVertex(Lx3, Ly2);
    curveVertex(Lx4, Ly1);
    curveVertex(Lx4, Ly1);
    endShape();
  }
  Ly2 = Ly2 - 1
  if (frameCount > 30) {
    stroke(0);
    strokeWeight(0)
    point(Lx1, Ly1);
    point(Lx2, Ly2);
    point(Lx3, Ly2);
    point(Lx4, Ly1);
    strokeWeight(2);
    fill(71, 125, 24);

    beginShape();
    curveVertex(Lx1, Ly1);
    curveVertex(Lx1, Ly1);
    curveVertex(Lx2, Ly2);
    curveVertex(Lx3, Ly2);
    curveVertex(Lx4, Ly1);
    curveVertex(Lx4, Ly1);
    endShape();
  }
  Ly2 = Ly2 - 1
  if (frameCount > 35) {
    stroke(0);
    strokeWeight(0)
    point(Lx1, Ly1);
    point(Lx2, Ly2);
    point(Lx3, Ly2);
    point(Lx4, Ly1);
    strokeWeight(2);
    fill(71, 125, 24);

    beginShape();
    curveVertex(Lx1, Ly1);
    curveVertex(Lx1, Ly1);
    curveVertex(Lx2, Ly2);
    curveVertex(Lx3, Ly2);
    curveVertex(Lx4, Ly1);
    curveVertex(Lx4, Ly1);
    endShape();
  }
  Ly2 = Ly2 - 1
  if (frameCount > 40) {
    stroke(0);
    strokeWeight(0)
    point(Lx1, Ly1);
    point(Lx2, Ly2);
    point(Lx3, Ly2);
    point(Lx4, Ly1);
    strokeWeight(2);
    fill(71, 125, 24);

    beginShape();
    curveVertex(Lx1, Ly1);
    curveVertex(Lx1, Ly1);
    curveVertex(Lx2, Ly2);
    curveVertex(Lx3, Ly2);
    curveVertex(Lx4, Ly1);
    curveVertex(Lx4, Ly1);
    endShape();
  }
  Ly2 = Ly2 - 1
  if (frameCount > 45) {
    stroke(0);
    strokeWeight(0)
    point(Lx1, Ly1);
    point(Lx2, Ly2);
    point(Lx3, Ly2);
    point(Lx4, Ly1);
    strokeWeight(2);
    fill(71, 125, 24);

    beginShape();
    curveVertex(Lx1, Ly1);
    curveVertex(Lx1, Ly1);
    curveVertex(Lx2, Ly2);
    curveVertex(Lx3, Ly2);
    curveVertex(Lx4, Ly1);
    curveVertex(Lx4, Ly1);
    endShape();
  }
  Ly2 = Ly2 - 1
  if (frameCount > 50) {
    stroke(0);
    strokeWeight(0)
    point(Lx1, Ly1);
    point(Lx2, Ly2);
    point(Lx3, Ly2);
    point(Lx4, Ly1);
    strokeWeight(2);
    fill(71, 125, 24);

    beginShape();
    curveVertex(Lx1, Ly1);
    curveVertex(Lx1, Ly1);
    curveVertex(Lx2, Ly2);
    curveVertex(Lx3, Ly2);
    curveVertex(Lx4, Ly1);
    curveVertex(Lx4, Ly1);
    endShape();
  }
  Ly2 = Ly2 - 1
  if (frameCount > 55) {
    stroke(0);
    strokeWeight(0)
    point(Lx1, Ly1);
    point(Lx2, Ly2);
    point(Lx3, Ly2);
    point(Lx4, Ly1);
    strokeWeight(2);
    fill(71, 125, 24);

    beginShape();
    curveVertex(Lx1, Ly1);
    curveVertex(Lx1, Ly1);
    curveVertex(Lx2, Ly2);
    curveVertex(Lx3, Ly2);
    curveVertex(Lx4, Ly1);
    curveVertex(Lx4, Ly1);
    endShape();
  }
  Ly2 = Ly2 - 1
  if (frameCount > 60) {
    stroke(0);
    strokeWeight(0)
    point(Lx1, Ly1);
    point(Lx2, Ly2);
    point(Lx3, Ly2);
    point(Lx4, Ly1);
    strokeWeight(2);
    fill(71, 125, 24);

    beginShape();
    curveVertex(Lx1, Ly1);
    curveVertex(Lx1, Ly1);
    curveVertex(Lx2, Ly2);
    curveVertex(Lx3, Ly2);
    curveVertex(Lx4, Ly1);
    curveVertex(Lx4, Ly1);
    endShape();
  }

  var LLx1 = 490
  var LLy1 = 630
  var LLx2 = 495
  var LLy2 = 455
  var LLx3 = 500
  var LLx4 = 500

  stroke(0);
  strokeWeight(1)
  point(LLx1, LLy1);
  point(LLx2, LLy2);
  point(LLx3, LLy2);
  point(LLx4, LLy1);
  strokeWeight(2);
  fill(71, 125, 24);

  beginShape();
  curveVertex(LLx1, LLy1);
  curveVertex(LLx1, LLy1);
  curveVertex(LLx2, LLy2);
  curveVertex(LLx3, LLy2);
  curveVertex(LLx4, LLy1);
  curveVertex(LLx4, LLy1);
  endShape();

  LLy2 = LLy2 - 1
  if (frameCount > 10) {
    stroke(0);
    strokeWeight(1)
    point(LLx1, LLy1);
    point(LLx2, LLy2);
    point(LLx3, LLy2);
    point(LLx4, LLy1);
    strokeWeight(2);
    fill(71, 125, 24);

    beginShape();
    curveVertex(LLx1, LLy1);
    curveVertex(LLx1, LLy1);
    curveVertex(LLx2, LLy2);
    curveVertex(LLx3, LLy2);
    curveVertex(LLx4, LLy1);
    curveVertex(LLx4, LLy1);
    endShape();
  }
  LLy2 = LLy2 - 1
  if (frameCount > 15) {
    stroke(0);
    strokeWeight(1)
    point(LLx1, LLy1);
    point(LLx2, LLy2);
    point(LLx3, LLy2);
    point(LLx4, LLy1);
    strokeWeight(2);
    fill(71, 125, 24);

    beginShape();
    curveVertex(LLx1, LLy1);
    curveVertex(LLx1, LLy1);
    curveVertex(LLx2, LLy2);
    curveVertex(LLx3, LLy2);
    curveVertex(LLx4, LLy1);
    curveVertex(LLx4, LLy1);
    endShape();
  }
  LLy2 = LLy2 - 1
  if (frameCount > 20) {
    stroke(0);
    strokeWeight(1)
    point(LLx1, LLy1);
    point(LLx2, LLy2);
    point(LLx3, LLy2);
    point(LLx4, LLy1);
    strokeWeight(2);
    fill(71, 125, 24);

    beginShape();
    curveVertex(LLx1, LLy1);
    curveVertex(LLx1, LLy1);
    curveVertex(LLx2, LLy2);
    curveVertex(LLx3, LLy2);
    curveVertex(LLx4, LLy1);
    curveVertex(LLx4, LLy1);
    endShape();
  }
  LLy2 = LLy2 - 1
  if (frameCount > 25) {
    stroke(0);
    strokeWeight(1)
    point(LLx1, LLy1);
    point(LLx2, LLy2);
    point(LLx3, LLy2);
    point(LLx4, LLy1);
    strokeWeight(2);
    fill(71, 125, 24);

    beginShape();
    curveVertex(LLx1, LLy1);
    curveVertex(LLx1, LLy1);
    curveVertex(LLx2, LLy2);
    curveVertex(LLx3, LLy2);
    curveVertex(LLx4, LLy1);
    curveVertex(LLx4, LLy1);
    endShape();
  }
  LLy2 = LLy2 - 1
  if (frameCount > 30) {
    stroke(0);
    strokeWeight(1)
    point(LLx1, LLy1);
    point(LLx2, LLy2);
    point(LLx3, LLy2);
    point(LLx4, LLy1);
    strokeWeight(2);
    fill(71, 125, 24);

    beginShape();
    curveVertex(LLx1, LLy1);
    curveVertex(LLx1, LLy1);
    curveVertex(LLx2, LLy2);
    curveVertex(LLx3, LLy2);
    curveVertex(LLx4, LLy1);
    curveVertex(LLx4, LLy1);
    endShape();
  }
  LLy2 = LLy2 - 1
  if (frameCount > 35) {
    stroke(0);
    strokeWeight(1)
    point(LLx1, LLy1);
    point(LLx2, LLy2);
    point(LLx3, LLy2);
    point(LLx4, LLy1);
    strokeWeight(2);
    fill(71, 125, 24);

    beginShape();
    curveVertex(LLx1, LLy1);
    curveVertex(LLx1, LLy1);
    curveVertex(LLx2, LLy2);
    curveVertex(LLx3, LLy2);
    curveVertex(LLx4, LLy1);
    curveVertex(LLx4, LLy1);
    endShape();
  }
  LLy2 = LLy2 - 1
  if (frameCount > 40) {
    stroke(0);
    strokeWeight(1)
    point(LLx1, LLy1);
    point(LLx2, LLy2);
    point(LLx3, LLy2);
    point(LLx4, LLy1);
    strokeWeight(2);
    fill(71, 125, 24);

    beginShape();
    curveVertex(LLx1, LLy1);
    curveVertex(LLx1, LLy1);
    curveVertex(LLx2, LLy2);
    curveVertex(LLx3, LLy2);
    curveVertex(LLx4, LLy1);
    curveVertex(LLx4, LLy1);
    endShape();
  }

  LLy2 = LLy2 - 1
  if (frameCount > 45) {
    stroke(0);
    strokeWeight(1)
    point(LLx1, LLy1);
    point(LLx2, LLy2);
    point(LLx3, LLy2);
    point(LLx4, LLy1);
    strokeWeight(2);
    fill(71, 125, 24);

    beginShape();
    curveVertex(LLx1, LLy1);
    curveVertex(LLx1, LLy1);
    curveVertex(LLx2, LLy2);
    curveVertex(LLx3, LLy2);
    curveVertex(LLx4, LLy1);
    curveVertex(LLx4, LLy1);
    endShape();
  }
  LLy2 = LLy2 - 1
  if (frameCount > 50) {
    stroke(0);
    strokeWeight(1)
    point(LLx1, LLy1);
    point(LLx2, LLy2);
    point(LLx3, LLy2);
    point(LLx4, LLy1);
    strokeWeight(2);
    fill(71, 125, 24);

    beginShape();
    curveVertex(LLx1, LLy1);
    curveVertex(LLx1, LLy1);
    curveVertex(LLx2, LLy2);
    curveVertex(LLx3, LLy2);
    curveVertex(LLx4, LLy1);
    curveVertex(LLx4, LLy1);
    endShape();
  }
  LLy2 = LLy2 - 1
  if (frameCount > 55) {
    stroke(0);
    strokeWeight(1)
    point(LLx1, LLy1);
    point(LLx2, LLy2);
    point(LLx3, LLy2);
    point(LLx4, LLy1);
    strokeWeight(2);
    fill(71, 125, 24);

    beginShape();
    curveVertex(LLx1, LLy1);
    curveVertex(LLx1, LLy1);
    curveVertex(LLx2, LLy2);
    curveVertex(LLx3, LLy2);
    curveVertex(LLx4, LLy1);
    curveVertex(LLx4, LLy1);
    endShape();
  }
  LLy2 = LLy2 - 1
  if (frameCount > 60) {
    stroke(0);
    strokeWeight(1)
    point(LLx1, LLy1);
    point(LLx2, LLy2);
    point(LLx3, LLy2);
    point(LLx4, LLy1);
    strokeWeight(2);
    fill(71, 125, 24);

    beginShape();
    curveVertex(LLx1, LLy1);
    curveVertex(LLx1, LLy1);
    curveVertex(LLx2, LLy2);
    curveVertex(LLx3, LLy2);
    curveVertex(LLx4, LLy1);
    curveVertex(LLx4, LLy1);
    endShape();
  }

  //flower
  var F1x = 485
  var F1y = 414
  var F1x2 = 485
  var F1y2 = 410
  if (frameCount >= 62) {
    stroke(206, 38, 75); //dark
    strokeWeight(3);
    line(F1x, F1y, F1x2, F1y2);
  }
  F1y2 = F1y2 - 1
  F1x2 = F1x2 - 1
  if (frameCount >= 63) {
    stroke(206, 38, 75);
    strokeWeight(3);
    line(F1x, F1y, F1x2, F1y2);
  }
  F1y2 = F1y2 - 1
  F1x2 = F1x2 - 1
  if (frameCount >= 64) {
    stroke(206, 38, 75);
    strokeWeight(3);
    line(F1x, F1y, F1x2, F1y2);
  }
  F1y2 = F1y2 - 1
  F1x2 = F1x2 - 1
  if (frameCount >= 65) {
    stroke(206, 38, 75);
    strokeWeight(3);
    line(F1x, F1y, F1x2, F1y2);
  }
  F1y2 = F1y2 - 1
  F1x2 = F1x2 - 1
  if (frameCount >= 66) {
    stroke(206, 38, 75);
    strokeWeight(3);
    line(F1x, F1y, F1x2, F1y2);
  }
  F1y2 = F1y2 - 1
  F1x2 = F1x2 - 1
  if (frameCount >= 67) {
    stroke(206, 38, 75);
    strokeWeight(3);
    line(F1x, F1y, F1x2, F1y2);
  }
  F1y2 = F1y2 - 1
  F1x2 = F1x2 - 1
  if (frameCount >= 68) {
    stroke(206, 38, 75);
    strokeWeight(3);
    line(F1x, F1y, F1x2, F1y2);
  }
  F1y2 = F1y2 - 1
  F1x2 = F1x2 - 1
  if (frameCount >= 69) {
    stroke(206, 38, 75);
    strokeWeight(3);
    line(F1x, F1y, F1x2, F1y2);
  }
  F1y2 = F1y2 - 1
  F1x2 = F1x2 - 1
  if (frameCount >= 70) {
    stroke(206, 38, 75);
    strokeWeight(3);
    line(F1x, F1y, F1x2, F1y2);
  }

  var F2x = 489
  var F2y = 414
  var F2x2 = 489
  var F2y2 = 410
  if (frameCount >= 62) {
    stroke(226, 105, 143); //light
    strokeWeight(3);
    line(F2x, F2y, F2x2, F2y2);
  }
  F2y2 = F2y2 - 1
  F2x2 = F2x2 - .5
  if (frameCount >= 63) {
    stroke(226, 105, 143);
    strokeWeight(3);
    line(F2x, F2y, F2x2, F2y2);
  }
  F2y2 = F2y2 - 1
  F2x2 = F2x2 - .5
  if (frameCount >= 64) {
    stroke(226, 105, 143);
    strokeWeight(3);
    line(F2x, F2y, F2x2, F2y2);
  }
  F2y2 = F2y2 - 1
  F2x2 = F2x2 - .5
  if (frameCount >= 65) {
    stroke(226, 105, 143);
    strokeWeight(3);
    line(F2x, F2y, F2x2, F2y2);
  }
  F2y2 = F2y2 - 1
  F2x2 = F2x2 - .5
  if (frameCount >= 66) {
    stroke(226, 105, 143);
    strokeWeight(3);
    line(F2x, F2y, F2x2, F2y2);
  }
  F2y2 = F2y2 - 1
  F2x2 = F2x2 - .5
  if (frameCount >= 67) {
    stroke(226, 105, 143);
    strokeWeight(3);
    line(F2x, F2y, F2x2, F2y2);
  }
  F2y2 = F2y2 - 1
  F2x2 = F2x2 - .5
  if (frameCount >= 68) {
    stroke(226, 105, 143);
    strokeWeight(3);
    line(F2x, F2y, F2x2, F2y2);
  }
  F2y2 = F2y2 - 1
  F2x2 = F2x2 - .5
  if (frameCount >= 69) {
    stroke(226, 105, 143);
    strokeWeight(3);
    line(F2x, F2y, F2x2, F2y2);
  }

  F2y2 = F2y2 - 1
  F2x2 = F2x2 - .5
  if (frameCount >= 70) {
    stroke(226, 105, 143);
    strokeWeight(3);
    line(F2x, F2y, F2x2, F2y2);
  }
  var F3x = 491
  var F3y = 414
  var F3x2 = 491
  var F3y2 = 410
  if (frameCount >= 62) {
    stroke(206, 38, 75); //dark
    strokeWeight(3);
    line(F3x, F3y, F3x2, F3y2);
  }
  F3y2 = F3y2 - 1
  if (frameCount >= 63) {
    stroke(206, 38, 75); //dark
    strokeWeight(3);
    line(F3x, F3y, F3x2, F3y2);
  }
  F3y2 = F3y2 - 1
  if (frameCount >= 64) {
    stroke(206, 38, 75); //dark
    strokeWeight(3);
    line
      (F3x, F3y, F3x2, F3y2);
  }

  F3y2 = F3y2 - 1
  if (frameCount >= 65) {
    stroke(206, 38, 75); //dark
    strokeWeight(3);
    line
      (F3x, F3y, F3x2, F3y2);
  }
  F3y2 = F3y2 - 1
  if (frameCount >= 66) {
    stroke(206, 38, 75); //dark
    strokeWeight(3);
    line
      (F3x, F3y, F3x2, F3y2);
  }
  F3y2 = F3y2 - 1
  if (frameCount >= 67) {
    stroke(206, 38, 75); //dark
    strokeWeight(3);
    line
      (F3x, F3y, F3x2, F3y2);
  }
  F3y2 = F3y2 - 1
  if (frameCount >= 68) {
    stroke(206, 38, 75); //dark
    strokeWeight(3);
    line
      (F3x, F3y, F3x2, F3y2);
  }
  F3y2 = F3y2 - 1
  if (frameCount >= 69) {
    stroke(206, 38, 75); //dark
    strokeWeight(3);
    line
      (F3x, F3y, F3x2, F3y2);
  }
  F3y2 = F3y2 - 1
  if (frameCount >= 70) {
    stroke(206, 38, 75); //dark
    strokeWeight(3);
    line
      (F3x, F3y, F3x2, F3y2);
  }

  //cactus 2
  var C2x1 = 505
  var C2y1 = 630
  var C2x2 = 525
  var C2y2 = 530
  var C2x3 = 540
  var C2x4 = 530

  stroke(0);
  strokeWeight(1)
  point(C2x1, C2y1);
  point(C2x2, C2y2);
  point(C2x3, C2y2);
  point(C2x4, C2y1);
  strokeWeight(2);
  fill(36, 78, 28);

  beginShape();
  curveVertex(C2x1, C2y1);
  curveVertex(C2x1, C2y1);
  curveVertex(C2x2, C2y2);
  curveVertex(C2x3, C2y2);
  curveVertex(C2x4, C2y1);
  curveVertex(C2x4, C2y1);
  endShape();

  C2y2 = C2y2 - 1
  if (frameCount > 10) {
    stroke(0);
    strokeWeight(1)
    point(C2x1, C2y1);
    point(C2x2, C2y2);
    point(C2x3, C2y2);
    point(C2x4, C2y1);
    strokeWeight(2);
    fill(36, 78, 28);

    beginShape();
    curveVertex(C2x1, C2y1);
    curveVertex(C2x1, C2y1);
    curveVertex(C2x2, C2y2);
    curveVertex(C2x3, C2y2);
    curveVertex(C2x4, C2y1);
    curveVertex(C2x4, C2y1);
    endShape();
  }

  C2y2 = C2y2 - 1
  if (frameCount > 20) {
    stroke(0);
    strokeWeight(1)
    point(C2x1, C2y1);
    point(C2x2, C2y2);
    point(C2x3, C2y2);
    point(C2x4, C2y1);
    strokeWeight(2);
    fill(36, 78, 28);

    beginShape();
    curveVertex(C2x1, C2y1);
    curveVertex(C2x1, C2y1);
    curveVertex(C2x2, C2y2);
    curveVertex(C2x3, C2y2);
    curveVertex(C2x4, C2y1);
    curveVertex(C2x4, C2y1);
    endShape();
  }
  C2y2 = C2y2 - 1
  if (frameCount > 30) {
    stroke(0);
    strokeWeight(1)
    point(C2x1, C2y1);
    point(C2x2, C2y2);
    point(C2x3, C2y2);
    point(C2x4, C2y1);
    strokeWeight(2);
    fill(36, 78, 28);

    beginShape();
    curveVertex(C2x1, C2y1);
    curveVertex(C2x1, C2y1);
    curveVertex(C2x2, C2y2);
    curveVertex(C2x3, C2y2);
    curveVertex(C2x4, C2y1);
    curveVertex(C2x4, C2y1);
    endShape();
  }
  C2y2 = C2y2 - 1
  if (frameCount > 40) {
    stroke(0);
    strokeWeight(1)
    point(C2x1, C2y1);
    point(C2x2, C2y2);
    point(C2x3, C2y2);
    point(C2x4, C2y1);
    strokeWeight(2);
    fill(36, 78, 28);

    beginShape();
    curveVertex(C2x1, C2y1);
    curveVertex(C2x1, C2y1);
    curveVertex(C2x2, C2y2);
    curveVertex(C2x3, C2y2);
    curveVertex(C2x4, C2y1);
    curveVertex(C2x4, C2y1);
    endShape();
  }

  C2y2 = C2y2 - 1
  if (frameCount > 50) {
    stroke(0);
    strokeWeight(1)
    point(C2x1, C2y1);
    point(C2x2, C2y2);
    point(C2x3, C2y2);
    point(C2x4, C2y1);
    strokeWeight(2);
    fill(36, 78, 28);

    beginShape();
    curveVertex(C2x1, C2y1);
    curveVertex(C2x1, C2y1);
    curveVertex(C2x2, C2y2);
    curveVertex(C2x3, C2y2);
    curveVertex(C2x4, C2y1);
    curveVertex(C2x4, C2y1);
    endShape();
  }

  C2y2 = C2y2 - 1
  if (frameCount > 60) {
    stroke(0);
    strokeWeight(1)
    point(C2x1, C2y1);
    point(C2x2, C2y2);
    point(C2x3, C2y2);
    point(C2x4, C2y1);
    strokeWeight(2);
    fill(36, 78, 28);

    beginShape();
    curveVertex(C2x1, C2y1);
    curveVertex(C2x1, C2y1);
    curveVertex(C2x2, C2y2);
    curveVertex(C2x3, C2y2);
    curveVertex(C2x4, C2y1);
    curveVertex(C2x4, C2y1);
    endShape();
  }

  C2y2 = C2y2 - 1
  if (frameCount >= 70) {
    stroke(0);
    strokeWeight(1)
    point(C2x1, C2y1);
    point(C2x2, C2y2);
    point(C2x3, C2y2);
    point(C2x4, C2y1);
    strokeWeight(2);
    fill(36, 78, 28);

    beginShape();
    curveVertex(C2x1, C2y1);
    curveVertex(C2x1, C2y1);
    curveVertex(C2x2, C2y2);
    curveVertex(C2x3, C2y2);
    curveVertex(C2x4, C2y1);
    curveVertex(C2x4, C2y1);
    endShape();
  }
  //cactus 2 lines
  stroke(111, 173, 66);
  strokeWeight(1);
  line(510, 630, 530, 525);
  line(520, 630, 535, 520);
  line(525, 630, 537, 525);

  if (frameCount > 10) {
    line(510, 630, 530, 524);
    line(520, 630, 535, 519);
    line(525, 630, 537, 525);
  }
  if (frameCount > 20) {
    line(510, 630, 530, 523);
    line(520, 630, 535, 518);
    line(525, 630, 537, 524);
  }
  if (frameCount > 30) {
    line(510, 630, 530, 522);
    line(520, 630, 535, 517);
    line(525, 630, 537, 523);
  }
  if (frameCount > 40) {
    line(510, 630, 530, 521);
    line(520, 630, 535, 516);
    line(525, 630, 537, 521);
  }
  if (frameCount > 50) {
    line(510, 630, 530, 520);
    line(520, 630, 535, 515);
    line(525, 630, 537, 520);
  }
  if (frameCount > 60) {
    line(510, 630, 530, 519);
    line(520, 630, 535, 514);
    line(525, 630, 537, 519);
  }
  if (frameCount >= 70) {
    line(510, 630, 530, 518);
    line(520, 630, 535, 513);
    line(525, 630, 537, 518);
  }
  //planter-cactus
  stroke(0);
  strokeWeight(2);
  fill(255, 170, 91);
  quad(450, 650, 550, 650, 530, 718, 470, 718);
  fill(255, 192, 91);
  rect(440, 630, 120, 25, 5);
  strokeWeight(7)
  stroke(203, 139, 91);
  line(458, 660, 542, 660);
  strokeWeight(10);
  line(540, 662, 525, 712);

  //aloe
  //leaf 1
  var Ax1 = 895
  var Ay1 = 639
  var Ax2 = 890
  var Ay2 = 620
  var Ax3 = 891
  var Ax4 = 905

  stroke(0);
  strokeWeight(1)
  point(Ax1, Ay1);
  point(Ax2, Ay2);
  point(Ax3, Ay2);
  point(Ax4, Ay1);
  strokeWeight(2);
  fill(59, 129, 26); // dark

  beginShape();
  curveVertex(Ax1, Ay1);
  curveVertex(Ax1, Ay1);
  curveVertex(Ax2, Ay2);
  curveVertex(Ax3, Ay2);
  curveVertex(Ax4, Ay1);
  curveVertex(Ax4, Ay1);
  endShape();
  Ay2 = Ay2 - 1
  Ax2 = Ax2 - 1
  Ax3 = Ax3 - 1
  if (frameCount > 5) {
    stroke(0);
    strokeWeight(1)
    point(Ax1, Ay1);
    point(Ax2, Ay2);
    point(Ax3, Ay2);
    point(Ax4, Ay1);
    strokeWeight(2);
    fill(59, 129, 26); // dark

    beginShape();
    curveVertex(Ax1, Ay1);
    curveVertex(Ax1, Ay1);
    curveVertex(Ax2, Ay2);
    curveVertex(Ax3, Ay2);
    curveVertex(Ax4, Ay1);
    curveVertex(Ax4, Ay1);
    endShape();
  }

  Ay2 = Ay2 - 1
  Ax2 = Ax2 - 1
  Ax3 = Ax3 - 1
  if (frameCount > 15) {
    stroke(0);
    strokeWeight(1)
    point(Ax1, Ay1);
    point(Ax2, Ay2);
    point(Ax3, Ay2);
    point(Ax4, Ay1);
    strokeWeight(2);
    fill(59, 129, 26); // dark

    beginShape();
    curveVertex(Ax1, Ay1);
    curveVertex(Ax1, Ay1);
    curveVertex(Ax2, Ay2);
    curveVertex(Ax3, Ay2);
    curveVertex(Ax4, Ay1);
    curveVertex(Ax4, Ay1);
    endShape();
  }

  Ay2 = Ay2 - 1
  Ax2 = Ax2 - 1
  Ax3 = Ax3 - 1
  if (frameCount > 25) {
    stroke(0);
    strokeWeight(1)
    point(Ax1, Ay1);
    point(Ax2, Ay2);
    point(Ax3, Ay2);
    point(Ax4, Ay1);
    strokeWeight(2);
    fill(59, 129, 26); // dark

    beginShape();
    curveVertex(Ax1, Ay1);
    curveVertex(Ax1, Ay1);
    curveVertex(Ax2, Ay2);
    curveVertex(Ax3, Ay2);
    curveVertex(Ax4, Ay1);
    curveVertex(Ax4, Ay1);
    endShape();
  }

  Ay2 = Ay2 - 1
  Ax2 = Ax2 - 1
  Ax3 = Ax3 - 1
  if (frameCount > 35) {
    stroke(0);
    strokeWeight(1)
    point(Ax1, Ay1);
    point(Ax2, Ay2);
    point(Ax3, Ay2);
    point(Ax4, Ay1);
    strokeWeight(2);
    fill(59, 129, 26); // dark

    beginShape();
    curveVertex(Ax1, Ay1);
    curveVertex(Ax1, Ay1);
    curveVertex(Ax2, Ay2);
    curveVertex(Ax3, Ay2);
    curveVertex(Ax4, Ay1);
    curveVertex(Ax4, Ay1);
    endShape();
  }
  Ay2 = Ay2 - 1
  Ax2 = Ax2 - 1
  Ax3 = Ax3 - 1
  if (frameCount > 45) {
    stroke(0);
    strokeWeight(1)
    point(Ax1, Ay1);
    point(Ax2, Ay2);
    point(Ax3, Ay2);
    point(Ax4, Ay1);
    strokeWeight(2);
    fill(59, 129, 26); // dark

    beginShape();
    curveVertex(Ax1, Ay1);
    curveVertex(Ax1, Ay1);
    curveVertex(Ax2, Ay2);
    curveVertex(Ax3, Ay2);
    curveVertex(Ax4, Ay1);
    curveVertex(Ax4, Ay1);
    endShape();
  }
  Ay2 = Ay2 - 1
  Ax2 = Ax2 - 1
  Ax3 = Ax3 - 1
  if (frameCount > 55) {
    stroke(0);
    strokeWeight(1)
    point(Ax1, Ay1);
    point(Ax2, Ay2);
    point(Ax3, Ay2);
    point(Ax4, Ay1);
    strokeWeight(2);
    fill(59, 129, 26); // dark

    beginShape();
    curveVertex(Ax1, Ay1);
    curveVertex(Ax1, Ay1);
    curveVertex(Ax2, Ay2);
    curveVertex(Ax3, Ay2);
    curveVertex(Ax4, Ay1);
    curveVertex(Ax4, Ay1);
    endShape();
  }
  Ay2 = Ay2 - 1
  Ax2 = Ax2 - 1
  Ax3 = Ax3 - 1
  if (frameCount > 65) {
    stroke(0);
    strokeWeight(1)
    point(Ax1, Ay1);
    point(Ax2, Ay2);
    point(Ax3, Ay2);
    point(Ax4, Ay1);
    strokeWeight(2);
    fill(59, 129, 26); // dark

    beginShape();
    curveVertex(Ax1, Ay1);
    curveVertex(Ax1, Ay1);
    curveVertex(Ax2, Ay2);
    curveVertex(Ax3, Ay2);
    curveVertex(Ax4, Ay1);
    curveVertex(Ax4, Ay1);
    endShape();
  }

  //leaf 2
  var AAx1 = 905
  var AAy1 = 639
  var AAx2 = 900
  var AAy2 = 620
  var AAx3 = 905
  var AAx4 = 915

  stroke(0);
  strokeWeight(1)
  point(AAx1, AAy1);
  point(AAx2, AAy2);
  point(AAx3, AAy2);
  point(AAx4, AAy1);
  strokeWeight(2);
  fill(79, 173, 66); // med

  beginShape();
  curveVertex(AAx1, AAy1);
  curveVertex(AAx1, AAy1);
  curveVertex(AAx2, AAy2);
  curveVertex(AAx3, AAy2);
  curveVertex(AAx4, AAy1);
  curveVertex(AAx4, AAy1);
  endShape();

  AAy2 = AAy2 - 1
  AAx2 = AAx2 - 1
  AAx3 = AAx3 - 1
  if (frameCount > 10) {
    stroke(0);
    strokeWeight(1)
    point(AAx1, AAy1);
    point(AAx2, AAy2);
    point(AAx3, AAy2);
    point(AAx4, AAy1);
    strokeWeight(2);
    fill(79, 173, 66); // med

    beginShape();
    curveVertex(AAx1, AAy1);
    curveVertex(AAx1, AAy1);
    curveVertex(AAx2, AAy2);
    curveVertex(AAx3, AAy2);
    curveVertex(AAx4, AAy1);
    curveVertex(AAx4, AAy1);
    endShape();
  }
  AAy2 = AAy2 - 1
  AAx2 = AAx2 - 1
  AAx3 = AAx3 - 1
  if (frameCount > 20) {
    stroke(0);
    strokeWeight(1)
    point(AAx1, AAy1);
    point(AAx2, AAy2);
    point(AAx3, AAy2);
    point(AAx4, AAy1);
    strokeWeight(2);
    fill(79, 173, 66); // med

    beginShape();
    curveVertex(AAx1, AAy1);
    curveVertex(AAx1, AAy1);
    curveVertex(AAx2, AAy2);
    curveVertex(AAx3, AAy2);
    curveVertex(AAx4, AAy1);
    curveVertex(AAx4, AAy1);
    endShape();
  }
  AAy2 = AAy2 - 1
  AAx2 = AAx2 - 1
  AAx3 = AAx3 - 1
  if (frameCount > 30) {
    stroke(0);
    strokeWeight(1)
    point(AAx1, AAy1);
    point(AAx2, AAy2);
    point(AAx3, AAy2);
    point(AAx4, AAy1);
    strokeWeight(2);
    fill(79, 173, 66); // med

    beginShape();
    curveVertex(AAx1, AAy1);
    curveVertex(AAx1, AAy1);
    curveVertex(AAx2, AAy2);
    curveVertex(AAx3, AAy2);
    curveVertex(AAx4, AAy1);
    curveVertex(AAx4, AAy1);
    endShape();
  }
  AAy2 = AAy2 - 1
  AAx2 = AAx2 - 1
  AAx3 = AAx3 - 1
  if (frameCount > 40) {
    stroke(0);
    strokeWeight(1)
    point(AAx1, AAy1);
    point(AAx2, AAy2);
    point(AAx3, AAy2);
    point(AAx4, AAy1);
    strokeWeight(2);
    fill(79, 173, 66); // med

    beginShape();
    curveVertex(AAx1, AAy1);
    curveVertex(AAx1, AAy1);
    curveVertex(AAx2, AAy2);
    curveVertex(AAx3, AAy2);
    curveVertex(AAx4, AAy1);
    curveVertex(AAx4, AAy1);
    endShape();
  }
  AAy2 = AAy2 - 1
  AAx2 = AAx2 - 1
  AAx3 = AAx3 - 1
  if (frameCount > 50) {
    stroke(0);
    strokeWeight(1)
    point(AAx1, AAy1);
    point(AAx2, AAy2);
    point(AAx3, AAy2);
    point(AAx4, AAy1);
    strokeWeight(2);
    fill(79, 173, 66); // med

    beginShape();
    curveVertex(AAx1, AAy1);
    curveVertex(AAx1, AAy1);
    curveVertex(AAx2, AAy2);
    curveVertex(AAx3, AAy2);
    curveVertex(AAx4, AAy1);
    curveVertex(AAx4, AAy1);
    endShape();
  }
  AAy2 = AAy2 - 1
  AAx2 = AAx2 - 1
  AAx3 = AAx3 - 1
  if (frameCount > 60) {
    stroke(0);
    strokeWeight(1)
    point(AAx1, AAy1);
    point(AAx2, AAy2);
    point(AAx3, AAy2);
    point(AAx4, AAy1);
    strokeWeight(2);
    fill(79, 173, 66); // med

    beginShape();
    curveVertex(AAx1, AAy1);
    curveVertex(AAx1, AAy1);
    curveVertex(AAx2, AAy2);
    curveVertex(AAx3, AAy2);
    curveVertex(AAx4, AAy1);
    curveVertex(AAx4, AAy1);
    endShape();
  }
  AAy2 = AAy2 - 1
  AAx2 = AAx2 - 1
  AAx3 = AAx3 - 1
  if (frameCount >= 70) {
    stroke(0);
    strokeWeight(1)
    point(AAx1, AAy1);
    point(AAx2, AAy2);
    point(AAx3, AAy2);
    point(AAx4, AAy1);
    strokeWeight(2);
    fill(79, 173, 66); // med

    beginShape();
    curveVertex(AAx1, AAy1);
    curveVertex(AAx1, AAy1);
    curveVertex(AAx2, AAy2);
    curveVertex(AAx3, AAy2);
    curveVertex(AAx4, AAy1);
    curveVertex(AAx4, AAy1);
    endShape();
  }
  //leaf 3
  var AAAx1 = 915
  var AAAy1 = 639
  var AAAx2 = 912
  var AAAy2 = 615
  var AAAx3 = 915
  var AAAx4 = 925

  stroke(0);
  strokeWeight(1)
  point(AAAx1, AAAy1);
  point(AAAx2, AAAy2);
  point(AAAx3, AAAy2);
  point(AAAx4, AAAy1);
  strokeWeight(2);
  fill(59, 129, 26); // dark

  beginShape();
  curveVertex(AAAx1, AAAy1);
  curveVertex(AAAx1, AAAy1);
  curveVertex(AAAx2, AAAy2);
  curveVertex(AAAx3, AAAy2);
  curveVertex(AAAx4, AAAy1);
  curveVertex(AAAx4, AAAy1);
  endShape();

  AAAy2 = AAAy2 - 1
  if (frameCount > 0) {
    stroke(0);
    strokeWeight(1)
    point(AAAx1, AAAy1);
    point(AAAx2, AAAy2);
    point(AAAx3, AAAy2);
    point(AAAx4, AAAy1);
    strokeWeight(2);
    fill(59, 129, 26); // dark

    beginShape();
    curveVertex(AAAx1, AAAy1);
    curveVertex(AAAx1, AAAy1);
    curveVertex(AAAx2, AAAy2);
    curveVertex(AAAx3, AAAy2);
    curveVertex(AAAx4, AAAy1);
    curveVertex(AAAx4, AAAy1);
    endShape();
  }
  AAAy2 = AAAy2 - 1
  if (frameCount > 5) {
    stroke(0);
    strokeWeight(1)
    point(AAAx1, AAAy1);
    point(AAAx2, AAAy2);
    point(AAAx3, AAAy2);
    point(AAAx4, AAAy1);
    strokeWeight(2);
    fill(59, 129, 26); // dark

    beginShape();
    curveVertex(AAAx1, AAAy1);
    curveVertex(AAAx1, AAAy1);
    curveVertex(AAAx2, AAAy2);
    curveVertex(AAAx3, AAAy2);
    curveVertex(AAAx4, AAAy1);
    curveVertex(AAAx4, AAAy1);
    endShape();
  }
  AAAy2 = AAAy2 - 1
  if (frameCount > 15) {
    stroke(0);
    strokeWeight(1)
    point(AAAx1, AAAy1);
    point(AAAx2, AAAy2);
    point(AAAx3, AAAy2);
    point(AAAx4, AAAy1);
    strokeWeight(2);
    fill(59, 129, 26); // dark

    beginShape();
    curveVertex(AAAx1, AAAy1);
    curveVertex(AAAx1, AAAy1);
    curveVertex(AAAx2, AAAy2);
    curveVertex(AAAx3, AAAy2);
    curveVertex(AAAx4, AAAy1);
    curveVertex(AAAx4, AAAy1);
    endShape();
  }

  AAAy2 = AAAy2 - 1
  if (frameCount > 25) {
    stroke(0);
    strokeWeight(1)
    point(AAAx1, AAAy1);
    point(AAAx2, AAAy2);
    point(AAAx3, AAAy2);
    point(AAAx4, AAAy1);
    strokeWeight(2);
    fill(59, 129, 26); // dark

    beginShape();
    curveVertex(AAAx1, AAAy1);
    curveVertex(AAAx1, AAAy1);
    curveVertex(AAAx2, AAAy2);
    curveVertex(AAAx3, AAAy2);
    curveVertex(AAAx4, AAAy1);
    curveVertex(AAAx4, AAAy1);
    endShape();
  }

  AAAy2 = AAAy2 - 1
  if (frameCount > 35) {
    stroke(0);
    strokeWeight(1)
    point(AAAx1, AAAy1);
    point(AAAx2, AAAy2);
    point(AAAx3, AAAy2);
    point(AAAx4, AAAy1);
    strokeWeight(2);
    fill(59, 129, 26); // dark

    beginShape();
    curveVertex(AAAx1, AAAy1);
    curveVertex(AAAx1, AAAy1);
    curveVertex(AAAx2, AAAy2);
    curveVertex(AAAx3, AAAy2);
    curveVertex(AAAx4, AAAy1);
    curveVertex(AAAx4, AAAy1);
    endShape();
  }
  AAAy2 = AAAy2 - 1
  if (frameCount > 45) {
    stroke(0);
    strokeWeight(1)
    point(AAAx1, AAAy1);
    point(AAAx2, AAAy2);
    point(AAAx3, AAAy2);
    point(AAAx4, AAAy1);
    strokeWeight(2);
    fill(59, 129, 26); // dark

    beginShape();
    curveVertex(AAAx1, AAAy1);
    curveVertex(AAAx1, AAAy1);
    curveVertex(AAAx2, AAAy2);
    curveVertex(AAAx3, AAAy2);
    curveVertex(AAAx4, AAAy1);
    curveVertex(AAAx4, AAAy1);
    endShape();
  }
  AAAy2 = AAAy2 - 1
  if (frameCount > 55) {
    stroke(0);
    strokeWeight(1)
    point(AAAx1, AAAy1);
    point(AAAx2, AAAy2);
    point(AAAx3, AAAy2);
    point(AAAx4, AAAy1);
    strokeWeight(2);
    fill(59, 129, 26); // dark

    beginShape();
    curveVertex(AAAx1, AAAy1);
    curveVertex(AAAx1, AAAy1);
    curveVertex(AAAx2, AAAy2);
    curveVertex(AAAx3, AAAy2);
    curveVertex(AAAx4, AAAy1);
    curveVertex(AAAx4, AAAy1);
    endShape();
  }
  AAAy2 = AAAy2 - 1
  if (frameCount > 65) {
    stroke(0);
    strokeWeight(1)
    point(AAAx1, AAAy1);
    point(AAAx2, AAAy2);
    point(AAAx3, AAAy2);
    point(AAAx4, AAAy1);
    strokeWeight(2);
    fill(59, 129, 26); // dark

    beginShape();
    curveVertex(AAAx1, AAAy1);
    curveVertex(AAAx1, AAAy1);
    curveVertex(AAAx2, AAAy2);
    curveVertex(AAAx3, AAAy2);
    curveVertex(AAAx4, AAAy1);
    curveVertex(AAAx4, AAAy1);
    endShape();
  }
  //leaf 4
  var AAAAx1 = 926
  var AAAAy1 = 639
  var AAAAx2 = 929
  var AAAAy2 = 612
  var AAAAx3 = 932
  var AAAAx4 = 935

  stroke(0);
  strokeWeight(1)
  point(AAAAx1, AAAAy1);
  point(AAAAx2, AAAAy2);
  point(AAAAx3, AAAAy2);
  point(AAAAx4, AAAAy1);
  strokeWeight(2);
  fill(79, 173, 66); // med

  beginShape();
  curveVertex(AAAAx1, AAAAy1);
  curveVertex(AAAAx1, AAAAy1);
  curveVertex(AAAAx2, AAAAy2);
  curveVertex(AAAAx3, AAAAy2);
  curveVertex(AAAAx4, AAAAy1);
  curveVertex(AAAAx4, AAAAy1);
  endShape();

  AAAAy2 = AAAAy2 - 1
  if (frameCount > 2) {
    stroke(0);
    strokeWeight(1)
    point(AAAAx1, AAAAy1);
    point(AAAAx2, AAAAy2);
    point(AAAAx3, AAAAy2);
    point(AAAAx4, AAAAy1);
    strokeWeight(2);
    fill(79, 173, 66); // med

    beginShape();
    curveVertex(AAAAx1, AAAAy1);
    curveVertex(AAAAx1, AAAAy1);
    curveVertex(AAAAx2, AAAAy2);
    curveVertex(AAAAx3, AAAAy2);
    curveVertex(AAAAx4, AAAAy1);
    curveVertex(AAAAx4, AAAAy1);
    endShape();
  }
  AAAAy2 = AAAAy2 - 1
  if (frameCount > 12) {
    stroke(0);
    strokeWeight(1)
    point(AAAAx1, AAAAy1);
    point(AAAAx2, AAAAy2);
    point(AAAAx3, AAAAy2);
    point(AAAAx4, AAAAy1);
    strokeWeight(2);
    fill(79, 173, 66); // med

    beginShape();
    curveVertex(AAAAx1, AAAAy1);
    curveVertex(AAAAx1, AAAAy1);
    curveVertex(AAAAx2, AAAAy2);
    curveVertex(AAAAx3, AAAAy2);
    curveVertex(AAAAx4, AAAAy1);
    curveVertex(AAAAx4, AAAAy1);
    endShape();
  }
  AAAAy2 = AAAAy2 - 1
  if (frameCount > 22) {
    stroke(0);
    strokeWeight(1)
    point(AAAAx1, AAAAy1);
    point(AAAAx2, AAAAy2);
    point(AAAAx3, AAAAy2);
    point(AAAAx4, AAAAy1);
    strokeWeight(2);
    fill(79, 173, 66); // med

    beginShape();
    curveVertex(AAAAx1, AAAAy1);
    curveVertex(AAAAx1, AAAAy1);
    curveVertex(AAAAx2, AAAAy2);
    curveVertex(AAAAx3, AAAAy2);
    curveVertex(AAAAx4, AAAAy1);
    curveVertex(AAAAx4, AAAAy1);
    endShape();
  }
  AAAAy2 = AAAAy2 - 1
  if (frameCount > 32) {
    stroke(0);
    strokeWeight(1)
    point(AAAAx1, AAAAy1);
    point(AAAAx2, AAAAy2);
    point(AAAAx3, AAAAy2);
    point(AAAAx4, AAAAy1);
    strokeWeight(2);
    fill(79, 173, 66); // med

    beginShape();
    curveVertex(AAAAx1, AAAAy1);
    curveVertex(AAAAx1, AAAAy1);
    curveVertex(AAAAx2, AAAAy2);
    curveVertex(AAAAx3, AAAAy2);
    curveVertex(AAAAx4, AAAAy1);
    curveVertex(AAAAx4, AAAAy1);
    endShape();
  }
  AAAAy2 = AAAAy2 - 1
  if (frameCount > 42) {
    stroke(0);
    strokeWeight(1)
    point(AAAAx1, AAAAy1);
    point(AAAAx2, AAAAy2);
    point(AAAAx3, AAAAy2);
    point(AAAAx4, AAAAy1);
    strokeWeight(2);
    fill(79, 173, 66); // med

    beginShape();
    curveVertex(AAAAx1, AAAAy1);
    curveVertex(AAAAx1, AAAAy1);
    curveVertex(AAAAx2, AAAAy2);
    curveVertex(AAAAx3, AAAAy2);
    curveVertex(AAAAx4, AAAAy1);
    curveVertex(AAAAx4, AAAAy1);
    endShape();
  }
  AAAAy2 = AAAAy2 - 1
  if (frameCount > 52) {
    stroke(0);
    strokeWeight(1)
    point(AAAAx1, AAAAy1);
    point(AAAAx2, AAAAy2);
    point(AAAAx3, AAAAy2);
    point(AAAAx4, AAAAy1);
    strokeWeight(2);
    fill(79, 173, 66); // med

    beginShape();
    curveVertex(AAAAx1, AAAAy1);
    curveVertex(AAAAx1, AAAAy1);
    curveVertex(AAAAx2, AAAAy2);
    curveVertex(AAAAx3, AAAAy2);
    curveVertex(AAAAx4, AAAAy1);
    curveVertex(AAAAx4, AAAAy1);
    endShape();
  }
  AAAAy2 = AAAAy2 - 1
  if (frameCount > 62) {
    stroke(0);
    strokeWeight(1)
    point(AAAAx1, AAAAy1);
    point(AAAAx2, AAAAy2);
    point(AAAAx3, AAAAy2);
    point(AAAAx4, AAAAy1);
    strokeWeight(2);
    fill(79, 173, 66); // med

    beginShape();
    curveVertex(AAAAx1, AAAAy1);
    curveVertex(AAAAx1, AAAAy1);
    curveVertex(AAAAx2, AAAAy2);
    curveVertex(AAAAx3, AAAAy2);
    curveVertex(AAAAx4, AAAAy1);
    curveVertex(AAAAx4, AAAAy1);
    endShape();
  }

  //leaf 5
  var AAAAAx1 = 936
  var AAAAAy1 = 639
  var AAAAAx2 = 945
  var AAAAAy2 = 620
  var AAAAAx3 = 946
  var AAAAAx4 = 943

  stroke(0);
  strokeWeight(1)
  point(AAAAAx1, AAAAAy1);
  point(AAAAAx2, AAAAAy2);
  point(AAAAAx3, AAAAAy2);
  point(AAAAAx4, AAAAAy1);
  strokeWeight(2);
  fill(59, 129, 26); // dark

  beginShape();
  curveVertex(AAAAAx1, AAAAAy1);
  curveVertex(AAAAAx1, AAAAAy1);
  curveVertex(AAAAAx2, AAAAAy2);
  curveVertex(AAAAAx3, AAAAAy2);
  curveVertex(AAAAAx4, AAAAAy1);
  curveVertex(AAAAAx4, AAAAAy1);
  endShape();

  AAAAAy2 = AAAAAy2 - 1
  AAAAAx2 = AAAAAx2 + 1
  AAAAAx3 = AAAAAx3 + 1
  if (frameCount > 5) {
    stroke(0);
    strokeWeight(1)
    point(AAAAAx1, AAAAAy1);
    point(AAAAAx2, AAAAAy2);
    point(AAAAAx3, AAAAAy2);
    point(AAAAAx4, AAAAAy1);
    strokeWeight(2);
    fill(59, 129, 26); // dark

    beginShape();
    curveVertex(AAAAAx1, AAAAAy1);
    curveVertex(AAAAAx1, AAAAAy1);
    curveVertex(AAAAAx2, AAAAAy2);
    curveVertex(AAAAAx3, AAAAAy2);
    curveVertex(AAAAAx4, AAAAAy1);
    curveVertex(AAAAAx4, AAAAAy1);
    endShape();
  }
  AAAAAy2 = AAAAAy2 - 1
  AAAAAx2 = AAAAAx2 + 1
  AAAAAx3 = AAAAAx3 + 1
  if (frameCount > 15) {
    stroke(0);
    strokeWeight(1)
    point(AAAAAx1, AAAAAy1);
    point(AAAAAx2, AAAAAy2);
    point(AAAAAx3, AAAAAy2);
    point(AAAAAx4, AAAAAy1);
    strokeWeight(2);
    fill(59, 129, 26); // dark

    beginShape();
    curveVertex(AAAAAx1, AAAAAy1);
    curveVertex(AAAAAx1, AAAAAy1);
    curveVertex(AAAAAx2, AAAAAy2);
    curveVertex(AAAAAx3, AAAAAy2);
    curveVertex(AAAAAx4, AAAAAy1);
    curveVertex(AAAAAx4, AAAAAy1);
    endShape();
  }
  AAAAAy2 = AAAAAy2 - 1
  AAAAAx2 = AAAAAx2 + 1
  AAAAAx3 = AAAAAx3 + 1
  if (frameCount > 25) {
    stroke(0);
    strokeWeight(1)
    point(AAAAAx1, AAAAAy1);
    point(AAAAAx2, AAAAAy2);
    point(AAAAAx3, AAAAAy2);
    point(AAAAAx4, AAAAAy1);
    strokeWeight(2);
    fill(59, 129, 26); // dark

    beginShape();
    curveVertex(AAAAAx1, AAAAAy1);
    curveVertex(AAAAAx1, AAAAAy1);
    curveVertex(AAAAAx2, AAAAAy2);
    curveVertex(AAAAAx3, AAAAAy2);
    curveVertex(AAAAAx4, AAAAAy1);
    curveVertex(AAAAAx4, AAAAAy1);
    endShape();
  }
  AAAAAy2 = AAAAAy2 - 1
  AAAAAx2 = AAAAAx2 + 1
  AAAAAx3 = AAAAAx3 + 1
  if (frameCount > 35) {
    stroke(0);
    strokeWeight(1)
    point(AAAAAx1, AAAAAy1);
    point(AAAAAx2, AAAAAy2);
    point(AAAAAx3, AAAAAy2);
    point(AAAAAx4, AAAAAy1);
    strokeWeight(2);
    fill(59, 129, 26); // dark

    beginShape();
    curveVertex(AAAAAx1, AAAAAy1);
    curveVertex(AAAAAx1, AAAAAy1);
    curveVertex(AAAAAx2, AAAAAy2);
    curveVertex(AAAAAx3, AAAAAy2);
    curveVertex(AAAAAx4, AAAAAy1);
    curveVertex(AAAAAx4, AAAAAy1);
    endShape();
  }
  AAAAAy2 = AAAAAy2 - 1
  AAAAAx2 = AAAAAx2 + 1
  AAAAAx3 = AAAAAx3 + 1
  if (frameCount > 45) {
    stroke(0);
    strokeWeight(1)
    point(AAAAAx1, AAAAAy1);
    point(AAAAAx2, AAAAAy2);
    point(AAAAAx3, AAAAAy2);
    point(AAAAAx4, AAAAAy1);
    strokeWeight(2);
    fill(59, 129, 26); // dark

    beginShape();
    curveVertex(AAAAAx1, AAAAAy1);
    curveVertex(AAAAAx1, AAAAAy1);
    curveVertex(AAAAAx2, AAAAAy2);
    curveVertex(AAAAAx3, AAAAAy2);
    curveVertex(AAAAAx4, AAAAAy1);
    curveVertex(AAAAAx4, AAAAAy1);
    endShape();
  }
  AAAAAy2 = AAAAAy2 - 1
  AAAAAx2 = AAAAAx2 + 1
  AAAAAx3 = AAAAAx3 + 1
  if (frameCount > 55) {
    stroke(0);
    strokeWeight(1)
    point(AAAAAx1, AAAAAy1);
    point(AAAAAx2, AAAAAy2);
    point(AAAAAx3, AAAAAy2);
    point(AAAAAx4, AAAAAy1);
    strokeWeight(2);
    fill(59, 129, 26); // dark

    beginShape();
    curveVertex(AAAAAx1, AAAAAy1);
    curveVertex(AAAAAx1, AAAAAy1);
    curveVertex(AAAAAx2, AAAAAy2);
    curveVertex(AAAAAx3, AAAAAy2);
    curveVertex(AAAAAx4, AAAAAy1);
    curveVertex(AAAAAx4, AAAAAy1);
    endShape();
  }
  AAAAAy2 = AAAAAy2 - 1
  AAAAAx2 = AAAAAx2 + 1
  AAAAAx3 = AAAAAx3 + 1
  if (frameCount > 65) {
    stroke(0);
    strokeWeight(1)
    point(AAAAAx1, AAAAAy1);
    point(AAAAAx2, AAAAAy2);
    point(AAAAAx3, AAAAAy2);
    point(AAAAAx4, AAAAAy1);
    strokeWeight(2);
    fill(59, 129, 26); // dark

    beginShape();
    curveVertex(AAAAAx1, AAAAAy1);
    curveVertex(AAAAAx1, AAAAAy1);
    curveVertex(AAAAAx2, AAAAAy2);
    curveVertex(AAAAAx3, AAAAAy2);
    curveVertex(AAAAAx4, AAAAAy1);
    curveVertex(AAAAAx4, AAAAAy1);
    endShape();
  }
  //white planter
  stroke(0);
  strokeWeight(2);
  fill(244, 244, 241);
  rect(880, 639, 75, 80, 15);
  //rect (879, 638, 77, 5);
  stroke(233, 232, 230);
  strokeWeight(20);
  line(930, 650, 930, 708);
  strokeWeight(6);
  stroke(255);
  line(913, 645, 913, 715);



  //hanging planter
  stroke(0);
  strokeWeight(3);
  line(1085, 26, 1085, 220);
  noFill();
  ellipse(1086, 224, 10);
  line(1083, 227, 1033, 350); //left
  line(1085, 228, 1085, 350); //center
  line(1089, 227, 1129, 350); //right
  strokeWeight(2); //basket
  fill(255, 192, 91);
  rect(1010, 351, 150, 25, 5);
  rect(1020, 376, 130, 25, 5);
  rect(1030, 401, 110, 25, 5);
  strokeWeight(6) //shading
  stroke(203, 139, 91);
  line(1024, 380, 1146, 380);
  strokeWeight(8);
  line(1145, 381, 1145, 395);
  strokeWeight(6)
  line(1034, 405, 1136, 405);
  strokeWeight(8);
  line(1135, 406, 1135, 420);

  //hanging senecio
  var lw = 15;
  var lh = 10;
  var L1x = 1030
  var L2x = 1045
  var L1y = 345
  stroke(0);
  strokeWeight(1);
  fill(80, 128, 52)
  //top plants
  ellipse(L1x + 30, L1y, lw, lh);
  ellipse(L2x + 30, L1y, lw, lh);
  ellipse(L1x + 60, L1y, lw, lh);
  ellipse(L2x + 60, L1y, lw, lh);
  ellipse(L1x + 90, L1y, lw, lh);
  ellipse(L2x + 90, L1y, lw, lh);
  ellipse(L1x + 5, L1y - 10, lw, lh);
  ellipse(L2x + 5, L1y - 10, lw, lh);
  ellipse(L1x + 35, L1y - 10, lw, lh);
  ellipse(L2x + 35, L1y - 10, lw, lh);
  ellipse(L1x + 65, L1y - 10, lw, lh);
  ellipse(L2x + 65, L1y - 10, lw, lh);
  ellipse(L1x + 95, L1y - 10, lw, lh);
  ellipse(L2x + 95, L1y - 10, lw, lh);
  ellipse(L1x + 15, L1y - 20, lw, lh);
  ellipse(L2x + 15, L1y - 20, lw, lh);
  ellipse(L1x + 45, L1y - 20, lw, lh);
  ellipse(L2x + 45, L1y - 20, lw, lh);
  ellipse(L1x + 75, L1y - 20, lw, lh);
  ellipse(L2x + 75, L1y - 20, lw, lh);
  //ellipse (L1x +105 ,L1y -20,lw,lh);
  ellipse(L1x + 25, L1y - 30, lw, lh);
  ellipse(L2x + 25, L1y - 30, lw, lh);
  ellipse(L1x + 55, L1y - 30, lw, lh);
  ellipse(L2x + 55, L1y - 30, lw, lh);
  ellipse(L2x + 70, L1y - 30, lw, lh);

  //center cord
  stroke(0);
  strokeWeight(3);
  line(1085, 228, 1085, 350); //center

  //left cascade (1,2)
  //set 1
  strokeWeight(1);
  ellipse(L1x, L1y, lw, lh);
  ellipse(L2x, L1y, lw, lh);
  //set 2
  L1x = L1x - 5
  L2x = L2x - 5
  L1y = L1y + 10
  ellipse(L1x, L1y, lw, lh);
  ellipse(L2x, L1y, lw, lh);
  //set3
  var FCL = 3
  L1x = L1x - 5
  L2x = L2x - 5
  L1y = L1y + 10
  if (frameCount >= FCL) {
    ellipse(L1x, L1y, lw, lh);
  }
  FCL = FCL + 3
  if (frameCount >= FCL) {
    ellipse(L2x, L1y, lw, lh);
  }
  //set 4
  L1x = L1x - 5
  L2x = L2x - 5
  L1y = L1y + 10
  FCL = FCL + 3
  if (frameCount >= FCL) {
    ellipse(L1x, L1y, lw, lh);
  }
  FCL = FCL + 3
  if (frameCount >= FCL) {
    ellipse(L2x, L1y, lw, lh);
  }
  //set5
  L1x = L1x - 5
  L2x = L2x - 5
  L1y = L1y + 10
  FCL = FCL + 3
  if (frameCount >= FCL) {
    ellipse(L1x, L1y, lw, lh);
  }
  FCL = FCL + 3
  if (frameCount >= FCL) {
    ellipse(L2x, L1y, lw, lh);
  }
  //set 6
  L1x = L1x + 5
  L2x = L2x + 5
  L1y = L1y + 10
  FCL = FCL + 3
  if (frameCount >= FCL) {
    ellipse(L1x, L1y, lw, lh);
  }
  FCL = FCL + 3
  if (frameCount >= FCL) {
    ellipse(L2x, L1y, lw, lh);
  }
  //set7
  L1x = L1x + 5
  L2x = L2x + 5
  L1y = L1y + 10
  FCL = FCL + 3
  if (frameCount >= FCL) {
    ellipse(L1x, L1y, lw, lh);
  }
  FCL = FCL + 3
  if (frameCount >= FCL) {
    ellipse(L2x, L1y, lw, lh);
  }
  //set8
  L1x = L1x + 5
  L2x = L2x + 5
  L1y = L1y + 10
  FCL = FCL + 3
  if (frameCount >= FCL) {
    ellipse(L1x, L1y, lw, lh);
  }
  FCL = FCL + 3
  if (frameCount >= FCL) {
    ellipse(L2x, L1y, lw, lh);
  }
  //set9
  L1x = L1x - 5
  L2x = L2x - 5
  L1y = L1y + 10
  FCL = FCL + 3
  if (frameCount >= FCL) {
    ellipse(L1x, L1y, lw, lh);
  }
  FCL = FCL + 3
  if (frameCount >= FCL) {
    ellipse(L2x, L1y, lw, lh);
  }
  //set10
  L1x = L1x - 5
  L2x = L2x - 5
  L1y = L1y + 10
  FCL = FCL + 3
  if (frameCount >= FCL) {
    ellipse(L1x, L1y, lw, lh);
  }
  FCL = FCL + 3
  if (frameCount >= FCL) {
    ellipse(L2x, L1y, lw, lh);
  }
  //set11
  L1x = L1x
  L2x = L2x
  L1y = L1y + 10
  FCL = FCL + 3
  if (frameCount >= FCL) {
    ellipse(L1x, L1y, lw, lh);
  }
  FCL = FCL + 3
  if (frameCount >= FCL) {
    ellipse(L2x, L1y, lw, lh);
  }
  //set12
  L1x = L1x
  L2x = L2x
  L1y = L1y + 10
  FCL = FCL + 3
  if (frameCount >= FCL) {
    ellipse(L1x, L1y, lw, lh);
  }
  FCL = FCL + 3
  if (frameCount >= FCL) {
    ellipse(L2x, L1y, lw, lh);
  }
  //last
  L1x = L1x
  L2x = L2x
  L1y = L1y + 10
  FCL = FCL + 3
  if (frameCount >= FCL) {
    ellipse(L1x, L1y, lw, lh);
  }
  ///@frame count 60

  //back cascade (3,4)
  var L3x = 1075
  var L4x = 1090
  var L3y = 432
  var FCB = 0
  stroke(0);
  strokeWeight(1);
  fill(80, 128, 52)
  //set 1
  ellipse(L3x, L3y, lw, lh);
  ellipse(L4x, L3y, lw, lh);
  L3y = L3y + 10
  ellipse(L3x, L3y, lw, lh);
  ellipse(L4x, L3y, lw, lh);
  L3y = L3y + 10
  ellipse(L3x, L3y, lw, lh);
  ellipse(L4x, L3y, lw, lh);
  //set 2
  L3y = L3y + 10
  if (frameCount >= FCB) {
    ellipse(L3x, L3y, lw, lh);
  }
  FCB = FCB + 4
  if (frameCount >= FCB) {
    ellipse(L4x, L3y, lw, lh);
  }
  //set3
  L3x = L3x
  L4x = L4x
  L3y = L3y + 10
  FCB = FCB + 4
  if (frameCount >= FCB) {
    ellipse(L3x, L3y, lw, lh);
  }
  FCB = FCB + 4
  if (frameCount >= FCB) {
    ellipse(L4x, L3y, lw, lh);
  }
  //set4
  L3x = L3x
  L4x = L4x
  L3y = L3y + 10
  FCB = FCB + 4
  if (frameCount >= FCB) {
    ellipse(L3x, L3y, lw, lh);
  }
  FCB = FCB + 4
  if (frameCount >= FCB) {
    ellipse(L4x, L3y, lw, lh);
  }
  //set5
  L3x = L3x
  L4x = L4x
  L3y = L3y + 10
  FCB = FCB + 4
  if (frameCount >= FCB) {
    ellipse(L3x, L3y, lw, lh);
  }
  FCB = FCB + 4
  if (frameCount >= FCB) {
    ellipse(L4x, L3y, lw, lh);
  }
  //set6
  L3x = L3x
  L4x = L4x
  L3y = L3y + 10
  FCB = FCB + 4
  if (frameCount >= FCB) {
    ellipse(L3x, L3y, lw, lh);
  }
  FCB = FCB + 4
  if (frameCount >= FCB) {
    ellipse(L4x, L3y, lw, lh);
  }
  //set7
  L3x = L3x
  L4x = L4x
  L3y = L3y + 10
  FCB = FCB + 4
  if (frameCount >= FCB) {
    ellipse(L3x, L3y, lw, lh);
  }
  FCB = FCB + 4
  if (frameCount >= FCB) {
    ellipse(L4x, L3y, lw, lh);
  }
  //set8
  L3x = L3x
  L4x = L4x
  L3y = L3y + 10
  FCB = FCB + 4
  if (frameCount >= FCB) {
    ellipse(L3x, L3y, lw, lh);
  }
  FCB = FCB + 4
  if (frameCount >= FCB) {
    ellipse(L4x, L3y, lw, lh);
  }
  //set9
  L3x = L3x
  L4x = L4x
  L3y = L3y + 10
  FCB = FCB + 4
  if (frameCount >= FCB) {
    ellipse(L3x, L3y, lw, lh);
  }
  FCB = FCB + 4
  if (frameCount >= FCB) {
    ellipse(L4x, L3y, lw, lh);
  }
  //set10
  L3x = L3x
  L4x = L4x
  L3y = L3y + 10
  FCB = FCB + 4
  if (frameCount >= FCB) {
    ellipse(L3x, L3y, lw, lh);
  }
  FCB = FCB + 4
  if (frameCount >= FCB) {
    ellipse(L4x, L3y, lw, lh);
  }
  L3y = L3y + 10
  FCB = FCB + 2
  if (frameCount >= FCB) {
    ellipse(L3x, L3y, lw, lh);
  }
  //ends frame 70


  //right cascade (5,6)
  var FCR = 2
  var L5x = 1150
  var L6x = 1165
  var L5y = 345
  //set1
  ellipse(L5x, L5y, lw, lh);
  ellipse(L6x, L5y, lw, lh);
  //set2
  L5x = L5x + 5
  L6x = L6x + 5
  L5y = L5y + 10
  ellipse(L5x, L5y, lw, lh);
  ellipse(L6x, L5y, lw, lh);
  //set3
  if (frameCount >= FCR) {
    L5x = L5x
    L6x = L6x
    L5y = L5y + 10
    ellipse(L5x, L5y, lw, lh);
  }
  FCR = FCR + 3;
  if (frameCount >= FCR) {
    ellipse(L6x, L5y, lw, lh);
  }
  //set4
  L5x = L5x
  L6x = L6x
  L5y = L5y + 10
  FCR = FCR + 3;
  if (frameCount >= FCR) {
    ellipse(L5x, L5y, lw, lh);
  }
  FCR = FCR + 3;
  if (frameCount >= FCR) {
    ellipse(L6x, L5y, lw, lh);
  }
  //set5
  L5x = L5x
  L6x = L6x
  L5y = L5y + 10
  FCR = FCR + 3;
  if (frameCount >= FCR) {
    ellipse(L5x, L5y, lw, lh);
  }
  FCR = FCR + 3;
  if (frameCount >= FCR) {
    ellipse(L6x, L5y, lw, lh);
  }
  //set6
  L5x = L5x
  L6x = L6x
  L5y = L5y + 10
  FCR = FCR + 3;
  if (frameCount >= FCR) {
    ellipse(L5x, L5y, lw, lh);
  }
  FCR = FCR + 3;
  if (frameCount >= FCR) {
    ellipse(L6x, L5y, lw, lh);
  }
  //set7
  L5x = L5x
  L6x = L6x
  L5y = L5y + 10
  FCR = FCR + 3;
  if (frameCount >= FCR) {
    ellipse(L5x, L5y, lw, lh);
  }
  FCR = FCR + 3;
  if (frameCount >= FCR) {
    ellipse(L6x, L5y, lw, lh);
  }
  //set8
  L5x = L5x
  L6x = L6x
  L5y = L5y + 10
  FCR = FCR + 3;
  if (frameCount >= FCR) {
    ellipse(L5x, L5y, lw, lh);
  }
  FCR = FCR + 3;
  if (frameCount >= FCR) {
    ellipse(L6x, L5y, lw, lh);
  }
  //set9
  L5x = L5x
  L6x = L6x
  L5y = L5y + 10
  FCR = FCR + 3;
  if (frameCount >= FCR) {
    ellipse(L5x, L5y, lw, lh);
  }
  FCR = FCR + 3;
  if (frameCount >= FCR) {
    ellipse(L6x, L5y, lw, lh);
  }
  //set10
  L5x = L5x
  L6x = L6x
  L5y = L5y + 10
  FCR = FCR + 3;
  if (frameCount >= FCR) {
    ellipse(L5x, L5y, lw, lh);
  }
  FCR = FCR + 3;
  if (frameCount >= FCR) {
    ellipse(L6x, L5y, lw, lh);
  }
  //set11
  L5x = L5x
  L6x = L6x
  L5y = L5y + 10
  FCR = FCR + 3;
  if (frameCount >= FCR) {
    ellipse(L5x, L5y, lw, lh);
  }
  FCR = FCR + 3;
  if (frameCount >= FCR) {
    ellipse(L6x, L5y, lw, lh);
  }
  //set12
  L5x = L5x
  L6x = L6x
  L5y = L5y + 10
  FCR = FCR + 3;
  if (frameCount >= FCR) {
    ellipse(L5x, L5y, lw, lh);
  }
  FCR = FCR + 3;
  if (frameCount >= FCR) {
    ellipse(L6x, L5y, lw, lh);
  }
  //set13
  L5x = L5x
  L6x = L6x
  L5y = L5y + 10
  FCR = FCR + 3;
  if (frameCount >= FCR) {
    ellipse(L5x, L5y, lw, lh);
  }
  FCR = FCR + 4;
  if (frameCount >= FCR) {
    ellipse(L6x, L5y, lw, lh);
  }
  //set14
  L5x = L5x
  L6x = L6x
  L5y = L5y + 10
  FCR = FCR + 3;
  if (frameCount >= FCR) {
    ellipse(L5x, L5y, lw, lh);
  }
  FCR = FCR + 3;
  if (frameCount >= FCR) {
    ellipse(L6x, L5y, lw, lh);
  }
  //set15
  L5x = L5x
  L6x = L6x
  L5y = L5y + 10
  FCR = FCR + 3;
  if (frameCount >= FCR) {
    ellipse(L6x, L5y, lw, lh);
  }

  ///if (frameCount <= 71) {
   //// saveCanvas("miFlipbooksito_" + frameCount, 'jpg');
  }

}