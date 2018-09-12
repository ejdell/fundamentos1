var miAno;
var miMes;
var miDia;

var miHora;
var miMinuto;
var miSegundo;

function setup() {
  createCanvas(1275, 825);
  background(220);
}

function draw() {
  background(255, 255, 255);

  miAno = year();
  miMes = month();
  miDia = day();

  miHora = hour();
  miMinuto = minute();
  miSegundo = second();

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
  fill(184, 144, 70); //brown
  rect(67, 78, 1141, 600);


  //window inside
  //12PM
  if (miHora == 12) {
    fill('#008CBA');
    rect(77, 88, 555.5, 580); //left
    rect(642.5, 88, 555.5, 580); //right
  }

  //1PM
  if (miHora == 13) {
    fill('#0099C0');
    rect(77, 88, 555.5, 580); //left
    rect(642.5, 88, 555.5, 580); //right
  }

  //2PM
  if (miHora == 14) {
    fill('#65B1C9');
    rect(77, 88, 555.5, 580); //left
    rect(642.5, 88, 555.5, 580); //right
  }

  //3PM
  if (miHora == 15) {
    fill('#ABC1CC');
    rect(77, 88, 555.5, 580); //left
    rect(642.5, 88, 555.5, 580); //right
  }

  //4PM
  if (miHora == 16) {
    fill('#D7CBCC');
    rect(77, 88, 555.5, 580); //left
    rect(642.5, 88, 555.5, 580); //right
  }
  //5PM
  if (miHora == 17) {
    fill('#E2CACA');
    rect(77, 88, 555.5, 580); //left
    rect(642.5, 88, 555.5, 580); //right
  }

  //6PM
  if (miHora == 18) {
    fill('#C39CB3');
    rect(77, 88, 555.5, 580); //left
    rect(642.5, 88, 555.5, 580); //right
  }

  //7PM
  if (miHora == 19) {
    fill('#625385');
    rect(77, 88, 555.5, 580); //left
    rect(642.5, 88, 555.5, 580); //right
  }

  //8pm
  if (miHora == 20) {
    fill('#2A3D76');
    rect(77, 88, 555.5, 580); //left
    rect(642.5, 88, 555.5, 580); //right
  }

  //9PM
  if (miHora == 21) {
    fill('#04224E');
    rect(77, 88, 555.5, 580); //left
    rect(642.5, 88, 555.5, 580); //right
  }

  //10PM
  if (miHora == 22) {
    fill('#0A1630');
    rect(77, 88, 555.5, 580); //left
    rect(642.5, 88, 555.5, 580); //right
  }

  //11PM
  if (miHora == 23) {
    fill('#131524');
    rect(77, 88, 555.5, 580); //left
    rect(642.5, 88, 555.5, 580); //right
  }

  //12AM
  if (miHora == 0) {
    fill('#131524');
    rect(77, 88, 555.5, 580); //left
    rect(642.5, 88, 555.5, 580); //right
  }

  //1AM
  if (miHora == 1) {
    fill('#0A1630');
    rect(77, 88, 555.5, 580); //left
    rect(642.5, 88, 555.5, 580); //right
  }

  //2AM
  if (miHora == 2) {
    fill('#04224E');
    rect(77, 88, 555.5, 580); //left
    rect(642.5, 88, 555.5, 580); //right
  }

  //3AM
  if (miHora == 3) {
    fill('#2A3D76');
    rect(77, 88, 555.5, 580); //left
    rect(642.5, 88, 555.5, 580); //right
  }

  //4AM
  if (miHora == 4) {
    fill('#625385');
    rect(77, 88, 555.5, 580); //left
    rect(642.5, 88, 555.5, 580); //right
  }

  //5AM
  if (miHora == 5) {
    fill('#C39CB3');
    rect(77, 88, 555.5, 580); //left
    rect(642.5, 88, 555.5, 580); //right
  }

  //6AM
  if (miHora == 6) {
    fill('#E2CACA');
    rect(77, 88, 555.5, 580); //left
    rect(642.5, 88, 555.5, 580); //right
  }

  //7AM
  if (miHora == 7) {
    fill('#D7CBCC');
    rect(77, 88, 555.5, 580); //left
    rect(642.5, 88, 555.5, 580); //right
  }

  //8AM
  if (miHora == 8) {
    fill('#ABC1CC');
    rect(77, 88, 555.5, 580); //left
    rect(642.5, 88, 555.5, 580); //right
  }

  //9AM
  if (miHora == 9) {
    fill('#65B1C9');
    rect(77, 88, 555.5, 580); //left
    rect(642.5, 88, 555.5, 580); //right
  }


  //10AM
  fill('#0099C0');
  if (miHora == 10) {
    rect(77, 88, 555.5, 580); //left
    rect(642.5, 88, 555.5, 580); //right
  }

  //11AM
  if (miHora == 11) {
    fill('#008CBA');
    rect(77, 88, 555.5, 580); //left
    rect(642.5, 88, 555.5, 580); //right
  }


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
  var y2 = 439
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

  //cactus linesL
  var Lx1 = 470
  var Ly1 = 630
  var Lx2 = 475
  var Ly2 = 444
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

  //cactus linesR
  var LLx1 = 490
  var LLy1 = 630
  var LLx2 = 495
  var LLy2 = 444
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

  //flower
  var F1x = 480
  var F1y = 414
  var F2x = 484
  var F2y = 410
  var F3x = 489
  var F3y = 414


  if (miHora == 0) {
    fill(226, 105, 143); //light
    ellipse(F2x, F2y, 2, 7);
    fill(206, 38, 75); //dark
    ellipse(F1x, F1y, 2, 5);
    fill(206, 38, 75); //dark
    ellipse(F3x, F3y, 2, 5);
  }

  if (miHora == 1) {
    fill(226, 105, 143); //light
    ellipse(F2x, F2y, 3, 8);
    fill(206, 38, 75); //dark
    ellipse(F1x, F1y, 3, 6);
    fill(206, 38, 75); //dark
    ellipse(F3x, F3y, 3, 6);
  }

  if (miHora == 2) {
    fill(226, 105, 143); //light
    ellipse(F2x, F2y, 4, 9);
    fill(206, 38, 75); //dark
    ellipse(F1x, F1y, 4, 7);
    fill(206, 38, 75); //dark
    ellipse(F3x, F3y, 4, 7);
  }

  if (miHora == 3) {
    fill(226, 105, 143); //light
    ellipse(F2x, F2y, 5, 10);
    fill(206, 38, 75); //dark
    ellipse(F1x, F1y, 5, 8);
    fill(206, 38, 75); //dark
    ellipse(F3x, F3y, 5, 8);
  }

  if (miHora == 4) {
    fill(226, 105, 143); //light
    ellipse(F2x, F2y, 6, 11);
    fill(206, 38, 75); //dark
    ellipse(F1x, F1y, 6, 9);
    fill(206, 38, 75); //dark
    ellipse(F3x, F3y, 6, 9);
  }


  if (miHora == 5) {
    fill(226, 105, 143); //light
    ellipse(F2x, F2y, 7, 12);
    fill(206, 38, 75); //dark
    ellipse(F1x, F1y, 7, 10);
    fill(206, 38, 75); //dark
    ellipse(F3x, F3y, 7, 10);
  }

  if (miHora == 6) {
    fill(226, 105, 143); //light
    ellipse(F2x, F2y, 8, 13);
    fill(206, 38, 75); //dark
    ellipse(F1x, F1y, 8, 11);
    fill(206, 38, 75); //dark
    ellipse(F3x, F3y, 8, 11);
  }

  if (miHora == 7) {
    fill(226, 105, 143); //light
    ellipse(F2x, F2y, 9, 14);
    fill(206, 38, 75); //dark
    ellipse(F1x - 3, F1y, 9, 12);
    fill(206, 38, 75); //dark
    ellipse(F3x + 3, F3y, 9, 12);
  }
  if (miHora == 8) {
    fill(226, 105, 143); //light
    ellipse(F2x, F2y, 10, 15);
    fill(206, 38, 75); //dark
    ellipse(F1x - 3, F1y, 10, 13);
    fill(206, 38, 75); //dark
    ellipse(F3x + 3, F3y, 10, 13);
  }
  if (miHora == 9) {
    fill(226, 105, 143); //light
    ellipse(F2x, F2y, 11, 16);
    fill(206, 38, 75); //dark
    ellipse(F1x - 3, F1y, 11, 14);
    fill(206, 38, 75); //dark
    ellipse(F3x + 3, F3y, 11, 14);
  }
  if (miHora == 10) {
    fill(226, 105, 143); //light
    ellipse(F2x, F2y, 12, 17);
    fill(206, 38, 75); //dark
    ellipse(F1x - 3, F1y, 12, 15);
    fill(206, 38, 75); //dark
    ellipse(F3x + 3, F3y, 12, 15);
  }

  if (miHora == 11) {
    fill(226, 105, 143); //light
    ellipse(F2x, F2y, 13, 18);
    fill(206, 38, 75); //dark
    ellipse(F1x - 3, F1y, 13, 16);
    fill(206, 38, 75); //dark
    ellipse(F3x + 3, F3y, 13, 16);
  }

  if (miHora == 23) {
    fill(226, 105, 143); //light
    ellipse(F2x, F2y, 2, 7);
    fill(206, 38, 75); //dark
    ellipse(F1x, F1y, 2, 5);
    fill(206, 38, 75); //dark
    ellipse(F3x, F3y, 2, 5);
  }

  if (miHora == 22) {
    fill(226, 105, 143); //light
    ellipse(F2x, F2y, 3, 8);
    fill(206, 38, 75); //dark
    ellipse(F1x, F1y, 3, 6);
    fill(206, 38, 75); //dark
    ellipse(F3x, F3y, 3, 6);
  }

  if (miHora == 21) {
    fill(226, 105, 143); //light
    ellipse(F2x, F2y, 4, 9);
    fill(206, 38, 75); //dark
    ellipse(F1x, F1y, 4, 7);
    fill(206, 38, 75); //dark
    ellipse(F3x, F3y, 4, 7);
  }

  if (miHora == 20) {
    fill(226, 105, 143); //light
    ellipse(F2x, F2y, 5, 10);
    fill(206, 38, 75); //dark
    ellipse(F1x, F1y, 5, 8);
    fill(206, 38, 75); //dark
    ellipse(F3x, F3y, 5, 8);
  }

  if (miHora == 19) {
    fill(226, 105, 143); //light
    ellipse(F2x, F2y, 6, 11);
    fill(206, 38, 75); //dark
    ellipse(F1x, F1y, 6, 9);
    fill(206, 38, 75); //dark
    ellipse(F3x, F3y, 6, 9);
  }


  if (miHora == 18) {
    fill(226, 105, 143); //light
    ellipse(F2x, F2y, 7, 12);
    fill(206, 38, 75); //dark
    ellipse(F1x, F1y, 7, 10);
    fill(206, 38, 75); //dark
    ellipse(F3x, F3y, 7, 10);
  }

  if (miHora == 17) {
    fill(226, 105, 143); //light
    ellipse(F2x, F2y, 8, 13);
    fill(206, 38, 75); //dark
    ellipse(F1x, F1y, 8, 11);
    fill(206, 38, 75); //dark
    ellipse(F3x, F3y, 8, 11);
  }

  if (miHora == 16) {
    fill(226, 105, 143); //light
    ellipse(F2x, F2y, 9, 14);
    fill(206, 38, 75); //dark
    ellipse(F1x, F1y, 9, 12);
    fill(206, 38, 75); //dark
    ellipse(F3x, F3y, 9, 12);
  }
  if (miHora == 15) {
    fill(226, 105, 143); //light
    ellipse(F2x, F2y, 10, 15);
    fill(206, 38, 75); //dark
    ellipse(F1x, F1y, 10, 13);
    fill(206, 38, 75); //dark
    ellipse(F3x, F3y, 10, 13);
  }
  if (miHora == 14) {
    fill(226, 105, 143); //light
    ellipse(F2x, F2y, 11, 16);
    fill(206, 38, 75); //dark
    ellipse(F1x, F1y, 11, 14);
    fill(206, 38, 75); //dark
    ellipse(F3x, F3y, 11, 14);
  }
  if (miHora == 13) {
    fill(226, 105, 143); //light
    ellipse(F2x, F2y, 12, 17);
    fill(206, 38, 75); //dark
    ellipse(F1x, F1y, 12, 15);
    fill(206, 38, 75); //dark
    ellipse(F3x, F3y, 12, 15);
  }

  if (miHora == 12) {
    fill(226, 105, 143); //light
    ellipse(F2x, F2y, 13, 18);
    fill(206, 38, 75); //dark
    ellipse(F1x, F1y, 13, 16);
    fill(206, 38, 75); //dark
    ellipse(F3x, F3y, 13, 16);
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
  if (miMes >= 1) {
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
  if (miMes >= 2) {
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
  if (miMes >= 3) {
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
  if (miMes >= 4) {
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
  if (miMes >= 5) {
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
  if (miMes >= 6) {
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
  if (miMes >= 7) {
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
  if (miMes >= 8) {
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
  if (miMes >= 9) {
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
  if (miMes >= 10) {
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
  if (miMes >= 11) {
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
  if (miMes >= 12) {
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
  if (miMes >= 1) {
    stroke(134, 229, 0);
    strokeWeight(1);
    line(510, 630, 530, 524);
    line(520, 630, 535, 519);
    line(525, 630, 537, 525);
  }
  if (miMes >= 2) {
    stroke(122, 214, 5);
    line(510, 630, 530, 523);
    line(520, 630, 535, 518);
    line(525, 630, 537, 524);
  }
  if (miMes >= 3) {
    stroke(110, 200, 11);
    line(510, 630, 530, 522);
    line(520, 630, 535, 517);
    line(525, 630, 537, 523);
  }
  if (miMes >= 4) {
    stroke(98, 185, 17);
    line(510, 630, 530, 521);
    line(520, 630, 535, 516);
    line(525, 630, 537, 521);
  }
  if (miMes >= 5) {
    stroke(86, 171, 23);
    line(510, 630, 530, 520);
    line(520, 630, 535, 515);
    line(525, 630, 537, 520);
  }
  if (miMes >= 6) {
    stroke(74, 56, 29);
    line(510, 630, 530, 519);
    line(520, 630, 535, 514);
    line(525, 630, 537, 519);
  }
  if (miMes >= 7) {
    stroke(62, 142, 35);
    line(510, 630, 530, 518);
    line(520, 630, 535, 513);
    line(525, 630, 537, 518);
  }
  if (miMes >= 8) {
    stroke(50, 127, 41);
    line(510, 630, 530, 517);
    line(520, 630, 535, 512);
    line(525, 630, 537, 517);
  }
  if (miMes >= 9) {
    stroke(38, 114, 37);
    line(510, 630, 530, 516);
    line(520, 630, 535, 511);
    line(525, 630, 537, 516);
  }
  if (miMes >= 10) {
    stroke(28, 98, 53);
    line(510, 630, 530, 515);
    line(520, 630, 535, 510);
    line(525, 630, 537, 515);
  }
  if (miMes >= 11) {
    stroke(14, 84, 59);
    line(510, 630, 530, 514);
    line(520, 630, 535, 509);
    line(525, 630, 537, 514);
  }
  if (miMes >= 12) {
    stroke(2, 70, 65);
    line(510, 630, 530, 513);
    line(520, 630, 535, 508);
    line(525, 630, 537, 513);
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
  var Ax2 = 883
  var Ay2 = 613
  var Ax3 = 884
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


  //leaf 2
  var AAx1 = 905
  var AAy1 = 639
  var AAx2 = 893
  var AAy2 = 613
  var AAx3 = 898
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



  //leaf 3
  var AAAx1 = 915
  var AAAy1 = 639
  var AAAx2 = 912
  var AAAy2 = 607
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

  //leaf 4
  var AAAAx1 = 926
  var AAAAy1 = 639
  var AAAAx2 = 929
  var AAAAy2 = 605
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

  //leaf 5
  var AAAAAx1 = 936
  var AAAAAy1 = 639
  var AAAAAx2 = 952
  var AAAAAy2 = 613
  var AAAAAx3 = 953
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
  stroke(80, 128, 52);
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
  stroke(80, 128, 52);
  strokeWeight(1);
  ellipse(L1x, L1y, lw, lh);
  ellipse(L2x, L1y, lw, lh);

  ///MONTHS
  //mes 1
  stroke(0);
  strokeWeight(2);
  fill(0, 128, 0)
  L1x = L1x - 5
  L1y = L1y + 10
  if (miMes >= 1); {
    ellipse(L1x, L1y, lw, lh);
  }

  //mes2
  L1x = L1x - 5
  L1y = L1y + 10
  if (miMes >= 2) {
    ellipse(L1x, L1y, lw, lh);
  }

  //mes 3
  L1x = L1x - 5
  L1y = L1y + 10
  if (miMes >= 3) {
    ellipse(L1x, L1y, lw, lh);
  }

  //mes 4
  L1x = L1x - 5
  L1y = L1y + 10
  if (miMes >= 4) {
    ellipse(L1x, L1y, lw, lh);
  }

  //mes 5
  L1x = L1x + 5
  L1y = L1y + 10
  if (miMes >= 5) {
    ellipse(L1x, L1y, lw, lh);
  }

  //mes 6
  L1x = L1x + 5
  L1y = L1y + 10
  if (miMes >= 6) {
    ellipse(L1x, L1y, lw, lh);
  }

  //mes 7
  L1x = L1x + 5
  L1y = L1y + 10
  if (miMes >= 7) {
    ellipse(L1x, L1y, lw, lh);
  }

  //mes 8
  L1x = L1x - 5
  L1y = L1y + 10
  if (miMes >= 8) {
    ellipse(L1x, L1y, lw, lh);
  }

  //mes 9
  L1x = L1x - 5
  L1y = L1y + 10
  if (miMes >= 9) {
    ellipse(L1x, L1y, lw, lh);
  }

  //mes 10
  L1x = L1x
  L1y = L1y + 10
  if (miMes >= 10) {
    ellipse(L1x, L1y, lw, lh);
  }

  //mes 11
  L1x = L1x
  L1y = L1y + 10
  if (miMes >= 11) {
    ellipse(L1x, L1y, lw, lh);
  }

  //mes 12
  L1x = L1x
  L1y = L1y + 10
  if (miMes >= 12) {
    ellipse(L1x, L1y, lw, lh);
  }
  ///END MONTHS

  //DAYS
  var L3x = 1082
  var L3y = 432

  stroke(0);
  strokeWeight(2);
  fill(0, 128, 0)

  //DAY 1
  if (miDia >= 1) {
    ellipse(L3x, L3y, lw, lh);
  }

  //DAY 2
  L3y = L3y + 10
  if (miDia >= 2) {
    ellipse(L3x, L3y, lw, lh);
  }

  //DAY 3
  L3y = L3y + 10
  if (miDia >= 3) {
    ellipse(L3x, L3y, lw, lh);
  }

  //DAY 4
  L3y = L3y + 10
  if (miDia >= 4) {
    ellipse(L3x, L3y, lw, lh);
  }

  //DAY 5
  L3y = L3y + 10
  if (miDia >= 5) {
    ellipse(L3x, L3y, lw, lh);
  }

  //DAY 6
  L3y = L3y + 10
  if (miDia >= 6) {
    ellipse(L3x, L3y, lw, lh);
  }

  //DIA 7
  L3y = L3y + 10
  if (miDia >= 7) {
    ellipse(L3x, L3y, lw, lh);
  }

  //DAY 8
  L3y = L3y + 10
  if (miDia >= 8) {
    ellipse(L3x, L3y, lw, lh);
  }

  //DAY 9
  L3y = L3y + 10
  if (miDia >= 9) {
    ellipse(L3x, L3y, lw, lh);
  }

  //DAY 10
  L3y = L3y + 10
  if (miDia >= 10) {
    {
      ellipse(L3x, L3y, lw, lh);
    }
    //DAY 11
    L3y = L3y + 10
    if (miDia >= 11) {
      ellipse(L3x, L3y, lw, lh);
    }
    //DAY 12
    L3y = L3y + 10
    if (miDia >= 12) {
      ellipse(L3x, L3y, lw, lh);
    }
    //DAY 13               
    L3y = L3y + 10
    if (miDia >= 13) {
      ellipse(L3x, L3y, lw, lh);
    }
    //DAY 14               
    L3y = L3y + 10
    if (miDia >= 14) {
      ellipse(L3x, L3y, lw, lh);
    }
    //DAY 15               
    L3y = L3y + 10
    if (miDia >= 15) {
      ellipse(L3x, L3y, lw, lh);
    }
    //DAY 16               
    L3y = L3y + 10
    if (miDia >= 16) {
      ellipse(L3x, L3y, lw, lh);
    }
    //DAY 17               
    L3y = L3y + 10
    if (miDia >= 17) {
      ellipse(L3x, L3y, lw, lh);
    }
    //DAY 18               
    L3y = L3y + 10
    if (miDia >= 18) {
      ellipse(L3x, L3y, lw, lh);
    }
    //DAY 19               
    L3y = L3y + 10
    if (miDia >= 19) {
      ellipse(L3x, L3y, lw, lh);
    }
    //DAY 20               
    L3y = L3y + 10
    if (miDia >= 20) {
      ellipse(L3x, L3y, lw, lh);
    }
    //DAY 21               
    L3y = L3y + 10
    if (miDia >= 21) {
      ellipse(L3x, L3y, lw, lh);
    }
    //DAY 22              
    L3y = L3y + 10
    if (miDia >= 22) {
      ellipse(L3x, L3y, lw, lh);
    }
    //DAY 23               
    L3y = L3y + 10
    if (miDia >= 23) {
      ellipse(L3x, L3y, lw, lh);
    }
    //DAY 24               
    L3y = L3y + 10
    if (miDia >= 24) {
      ellipse(L3x, L3y, lw, lh);
    }
    //DAY 25               
    L3y = L3y + 10
    if (miDia >= 25) {
      ellipse(L3x, L3y, lw, lh);
    }
    //DAY 26               
    L3y = L3y + 10
    if (miDia >= 26) {
      ellipse(L3x, L3y, lw, lh);
    }
    //DAY 27               
    L3y = L3y + 10
    if (miDia >= 27) {
      ellipse(L3x, L3y, lw, lh);
    }
    //DAY 28               
    L3y = L3y + 10
    if (miDia >= 28) {
      ellipse(L3x, L3y, lw, lh);
    }
    //DAY 29              
    L3y = L3y + 10
    if (miDia >= 29) {
      ellipse(L3x, L3y, lw, lh);
    }
    //DAY 30               
    L3y = L3y + 10
    if (miDia >= 30) {
      ellipse(L3x, L3y, lw, lh);
    }
    //DAY 31               
    L3y = L3y + 10
    if (miDia >= 31) {
      ellipse(L3x, L3y, lw, lh);
    }

    //YEARS
    var L5x = 1150
    var L5y = 345
    stroke(80, 128, 52);
    strokeWeight(1);
    fill(80, 128, 52);
    ellipse(L5x, L5y, lw, lh);

    stroke(0);
    strokeWeight(2);
    fill(0, 128, 0)
    L5y = L5y + 10
    if (miAno >= 2001) {
      ellipse(L5x, L5y, lw, lh)
    }
    L5y = L5y + 10
    if (miAno >= 2002) {
      ellipse(L5x, L5y, lw, lh)
    }
    L5y = L5y + 10
    if (miAno >= 2003) {
      ellipse(L5x, L5y, lw, lh)
    }
    L5y = L5y + 10
    if (miAno >= 2004) {
      ellipse(L5x, L5y, lw, lh)
    }
    L5y = L5y + 10
    if (miAno >= 2005) {
      ellipse(L5x, L5y, lw, lh)
    }
    L5y = L5y + 10
    if (miAno >= 2006) {
      ellipse(L5x, L5y, lw, lh)
    }
    L5y = L5y + 10
    if (miAno >= 2007) {
      ellipse(L5x, L5y, lw, lh)
    }
    L5y = L5y + 10
    if (miAno >= 2008) {
      ellipse(L5x, L5y, lw, lh)
    }
    L5y = L5y + 10
    if (miAno >= 2009) {
      ellipse(L5x, L5y, lw, lh)
    }
    L5y = L5y + 10
    if (miAno >= 2010) {
      ellipse(L5x, L5y, lw, lh)
    }
    L5y = L5y + 10
    if (miAno >= 2011) {
      ellipse(L5x, L5y, lw, lh)
    }
    L5y = L5y + 10
    if (miAno >= 2012) {
      ellipse(L5x, L5y, lw, lh)
    }
    L5y = L5y + 10
    if (miAno >= 2013) {
      ellipse(L5x, L5y, lw, lh)
    }
    L5y = L5y + 10
    if (miAno >= 2014) {
      ellipse(L5x, L5y, lw, lh)
    }
    L5y = L5y + 10
    if (miAno >= 2015) {
      ellipse(L5x, L5y, lw, lh)
    }
    L5y = L5y + 10
    if (miAno >= 2016) {
      ellipse(L5x, L5y, lw, lh)
    }
    L5y = L5y + 10
    if (miAno >= 2017) {
      ellipse(L5x, L5y, lw, lh)
    }
    L5y = L5y + 10
    if (miAno >= 2018) {
      ellipse(L5x, L5y, lw, lh)
    }
    L5y = L5y + 10
    if (miAno >= 2019) {
      ellipse(L5x, L5y, lw, lh)
    }
    L5y = L5y + 10
    if (miAno >= 2020) {
      ellipse(L5x, L5y, lw, lh)
    }
    L5y = L5y + 10
    if (miAno >= 2021) {
      ellipse(L5x, L5y, lw, lh)
    }
    L5y = L5y + 10
    if (miAno >= 2022) {
      ellipse(L5x, L5y, lw, lh)
    }
    L5y = L5y + 10
    if (miAno >= 2023) {
      ellipse(L5x, L5y, lw, lh)
    }
    L5y = L5y + 10
    if (miAno >= 2024) {
      ellipse(L5x, L5y, lw, lh)
    }
    L5y = L5y + 10
    if (miAno >= 2025) {
      ellipse(L5x, L5y, lw, lh)
    }



    //bicho
    miNuevoSegundo = map(miSegundo, 0, 59, 0, width);
    stroke(255);
    strokeWeight(1);
    fill(0);
    ellipse(miNuevoSegundo, 250 + 25 * sin(miNuevoSegundo), 8, 4);

    //spider
    miNuevoMinuto = map(miMinuto, 0, 59, 34, height - 5);
    stroke(117, 113, 122);
    strokeWeight(1);
    line(785, 34, 785, miNuevoMinuto);
    stroke(0);
    fill(0);
    ellipse(785, miNuevoMinuto, 6, 6);
    line(787, miNuevoMinuto - 4, 791, miNuevoMinuto - 5);
    line(787, miNuevoMinuto - 1, 791, miNuevoMinuto - 2);
    line(787, miNuevoMinuto + 1, 791, miNuevoMinuto + 2);
    line(787, miNuevoMinuto + 4, 791, miNuevoMinuto + 5);
    line(783, miNuevoMinuto - 4, 779, miNuevoMinuto - 5);
    line(783, miNuevoMinuto - 1, 779, miNuevoMinuto - 2);
    line(783, miNuevoMinuto + 1, 779, miNuevoMinuto + 2);
    line(783, miNuevoMinuto + 4, 779, miNuevoMinuto + 5);



    if (miHora == 16) {
      push()
      blendMode(MULTIPLY)
      fill(215, 203, 204, 100);
      rect(0, 0, width, height);
      pop()
    }

    if (miHora == 17) {
      push()
      blendMode(MULTIPLY)
      fill(226, 202, 202, 150);
      rect(0, 0, width, height);
      pop()
    }

    if (miHora == 18) {
      push()
      blendMode(MULTIPLY)
      fill(195, 156, 179, 150);
      rect(0, 0, width, height);
      pop()
    }
    if (miHora == 19) {
      push()
      blendMode(MULTIPLY)
      fill(98, 83, 133, 150);
      rect(0, 0, width, height);
      pop()
    }

    if (miHora == 20) {
      push()
      blendMode(MULTIPLY)
      fill(42, 61, 118, 150);
      rect(0, 0, width, height);
      pop()
    }

    if (miHora == 21) {
      push()
      blendMode(MULTIPLY)
      fill(255, 209, 49, 50);
      rect(0, 0, width, height);
      pop()
    }

    if (miHora == 22) {
      push()
      blendMode(MULTIPLY)
      fill(10, 22, 48, 150);
      rect(0, 0, width, height);
      pop()
    }

    if (miHora == 23) {
      push()
      blendMode(MULTIPLY)
      fill(19, 21, 36, 150);
      rect(0, 0, width, height);
      pop()
    }

    if (miHora == 0) {
      push()
      blendMode(MULTIPLY)
      fill(19, 21, 36, 150);
      rect(0, 0, width, height);
      pop()
    }

    if (miHora == 1) {
      push()
      blendMode(MULTIPLY)
      fill(10, 22, 48, 150);
      rect(0, 0, width, height);
      pop()
    }
    if (miHora == 2) {
      push()
      blendMode(MULTIPLY)
      fill(4, 34, 78, 150);
      rect(0, 0, width, height);
      pop()
    }

    if (miHora == 3) {
      push()
      blendMode(MULTIPLY)
      fill(42, 61, 118, 150);
      rect(0, 0, width, height);
      pop()
    }

    if (miHora == 4) {
      push()
      blendMode(MULTIPLY)
      fill(98, 83, 133, 150);
      rect(0, 0, width, height);
      pop()
    }

    if (miHora == 5) {
      push()
      blendMode(MULTIPLY)
      fill(195, 156, 179, 100);
      rect(0, 0, width, height);
      pop()
    }

    if (miHora == 6) {
      push()
      blendMode(MULTIPLY)
      fill(226, 202, 202, 100);
      rect(0, 0, width, height);
      pop()
    }

    if (miHora == 7) {
      push()
      blendMode(MULTIPLY)
      fill(215, 203, 204, 100);
      rect(0, 0, width, height);
      pop()
    }





  }
}