//erase
var posXBot1 = 30;
var posYBot1 = 10;
var tamBot1 = 20;

//herramienta 1
var posXBot2 = 90;
var posYBot2 = 10;
var tamBot2 = 20;

//herramienta 2
var posXBot3 = 120;
var posYBot3 = 10;
var tamBot3 = 20;

//herramienta 3
var posXBot4 = 150;
var posYBot4 = 10;
var tamBot4 = 20;

//herramienta 4
var posXBot5 = 180;
var posYBot5 = 10;
var tamBot5 = 20;

//herramienta 5
var posXBot6 = 210;
var posYBot6 = 10;
var tamBot6 = 20;

//herramienta 6
var posXBot7 = 240;
var posYBot7 = 10;
var tamBot7 = 20;

//herramienta 7
var posXBot8 = 270;
var posYBot8 = 10;
var tamBot8 = 20;

//herramienta 8
var posXBot9 = 300;
var posYBot9 = 10;
var tamBot9 = 20;

//herramienta 9
var posXBot10 = 330;
var posYBot10 = 10;
var tamBot10 = 20;

//herramienta 10
var posXBot11 = 360;
var posYBot11 = 10;
var tamBot11 = 20;

//col 1 
var posXBot12 = 30;
var posYBot12 = 70;
var tamBot12 = 20;

//col 2 
var posXBot13 = 30;
var posYBot13 = 100;
var tamBot13 = 20;

//col 3 
var posXBot14 = 30;
var posYBot14 = 130;
var tamBot14 = 20;

//col 4 
var posXBot15 = 30;
var posYBot15 = 160;
var tamBot15 = 20;

//col 5
var posXBot16 = 30;
var posYBot16 = 190;
var tamBot16 = 20;

//col 6
var posXBot17 = 30;
var posYBot17 = 220;
var tamBot17 = 20;

//col 7
var posXBot18 = 30;
var posYBot18 = 250;
var tamBot18 = 20;

//col 8
var posXBot19 = 30;
var posYBot19 = 280;
var tamBot19 = 20;

//col 9 
var posXBot20 = 30;
var posYBot20 = 310;
var tamBot20 = 20;

//col 10
var posXBot21 = 30;
var posYBot21 = 340;
var tamBot21 = 20;

var herramienta = 1;
var col = 1;



function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
}

function draw() {
  stroke(0);
  strokeWeight(4);
  fill(220);

  //clear canvas bot (0)
  rect(posXBot1, posYBot1, tamBot1, tamBot1);
  fill(255);
  stroke (0);
  strokeWeight (1);
  line (posXBot1 -5 , posYBot1 -5, posXBot1 + tamBot1 + 5, posYBot1 + tamBot1 +5);
  line (posXBot1 + tamBot1 + 5, posYBot1 - 5, posXBot1 -5 , posYBot1 + tamBot1 +5);

  //zigzag bot  (1)
  strokeWeight (4);
  rect(posXBot2, posYBot2, tamBot2, tamBot2);
  stroke(0);
  strokeWeight(1);
  line(posXBot2, posYBot2 + tamBot2, posXBot2 + 4, posYBot2);
  line(posXBot2 + 4, posYBot2, posXBot2 + 8, posYBot2 + tamBot2);
  line(posXBot2 + 8, posYBot2 + tamBot2, posXBot2 + 12, posYBot2);
  line(posXBot2 + 12, posYBot2, posXBot2 + 16, posYBot2 + tamBot2);
  line(posXBot2 + 16, posYBot2 + tamBot2, posXBot2 + 20, posYBot2);

  //crossed ellipses bot (2)
  strokeWeight(4);
  rect(posXBot3, posYBot3, tamBot3, tamBot3);
  strokeWeight(1);
  noFill();
  ellipse(posXBot3 + 10, posYBot3 + 10, tamBot3, tamBot3 / 3);
  ellipse(posXBot3 + 10, posYBot3 + 10, tamBot3 / 3, tamBot3);

  //bullseye bot (3)
  strokeWeight(4);
  fill(255);
  rect(posXBot4, posYBot4, tamBot4, tamBot4);
  strokeWeight(1);
  noFill();
  ellipse(posXBot4 + 10, posYBot4 + 10, tamBot4, tamBot4);
  ellipse(posXBot4 + 10, posYBot4 + 10, tamBot4 / 2, tamBot4 / 2);
  ellipse(posXBot4 + 10, posYBot4 + 10, tamBot4 / 4, tamBot4 / 4);
  ellipse(posXBot4 + 10, posYBot4 + 10, tamBot4 / 1.5, tamBot4 / 1.5);

  //circles bot (4)
  strokeWeight(4);
  fill(255);
  rect(posXBot5, posYBot5, tamBot5, tamBot5);
  strokeWeight(1);
  noFill();
  ellipse(posXBot5 + 10, posYBot5 + 10, tamBot5 - 5, tamBot5 - 5);

  // 5 dots bot (5)
  strokeWeight(4);
  fill(255);
  rect(posXBot6, posYBot6, tamBot6, tamBot6);
  strokeWeight(3);
  point(posXBot6 + 5, posYBot6 + 10);
  point(posXBot6 + 10, posYBot6 + 10);
  point(posXBot6 + 15, posYBot6 + 10);
  point(posXBot6 + 10, posYBot6 + 5);
  point(posXBot6 + 10, posYBot6 + 15);
  
  //vertex bot (6)
  strokeWeight(4);
  fill(255);
  rect(posXBot7, posYBot7, tamBot7, tamBot7);
  strokeWeight(1);
  fill (0);
  quad (posXBot7, posYBot7 + 5, posXBot7 + 9, posYBot7 + 5, posXBot7 + 11, posYBot7 + 10, posXBot7, posYBot7 + 6);
  quad (posXBot7 + 11, posYBot7 + 10, posXBot7 + 16, posYBot7 + 6, posXBot7 + 18, posYBot7 + 15, posXBot7 + 18, posYBot7 + 18);   

  //crisscross bot (7)
  strokeWeight(4);
  fill(255);
  rect(posXBot8, posYBot8, tamBot8, tamBot8);
  stroke(0);
  strokeWeight(1);
  line(posXBot8, posYBot8 + tamBot8, posXBot8 + tamBot8 / 2, posYBot8);
  line(posXBot8 + tamBot8 / 2, posYBot8, posXBot8 + tamBot8, posYBot8 + tamBot8);
  line(posXBot8, posYBot8, posXBot8 + tamBot8 / 2, posYBot8 + tamBot8);
  line(posXBot8 + tamBot8 / 2, posYBot8 + tamBot8, posXBot8 + tamBot8, posYBot8);


//triangle bot (8)
  strokeWeight(4);
  fill(255);
  rect(posXBot9, posYBot9, tamBot9, tamBot9);
strokeWeight (2);
  noFill ();
  triangle (posXBot9 +4, posYBot9 + tamBot9 -4, posXBot9 + tamBot9/2, posYBot9 +4, posXBot9 + tamBot9 -4, posYBot9 + tamBot9 -4);

  // V and ellipse bot (9)
  strokeWeight(4);
  fill(255);
  rect(posXBot10, posYBot10, tamBot10, tamBot10);
  
strokeWeight (1);
  noFill ();
  line (posXBot10 +4, posYBot10 + tamBot10 -4, posXBot10 + tamBot10/2, posYBot10 +4);
  line (posXBot10 + tamBot10/2, posYBot10 +4,posXBot10 + tamBot10 -4, posYBot10 + tamBot10 -4);
  ellipse (posXBot10 + 12, posYBot10 + 6, 8);


  //eraser bot (10)
  strokeWeight(4);
  fill(255);
  rect(posXBot11, posYBot11, tamBot11, tamBot11);
  stroke(0);
  strokeWeight(1);
  fill(220);
  quad(posXBot11 + 3, posYBot11 + 8, posXBot11 + 8, posYBot11 + 17, posXBot11 + 17, posYBot11 + 12, posXBot11 + 12, posYBot11 + 3);

  //color bots
  stroke(0);
  strokeWeight(4);
  fill('#353531'); //col 1 - charcoal 
  rect(posXBot12, posYBot12, tamBot12, tamBot12);
  fill('#EA3546'); //col 2 - pink
  rect(posXBot13, posYBot13, tamBot13, tamBot13);
  fill('#F86624'); //col - 3 orange
  rect(posXBot14, posYBot14, tamBot14, tamBot14);
  fill('#F9C80E'); //col - 4 yellow
  rect(posXBot15, posYBot15, tamBot15, tamBot15);
  fill('#00FFE7'); //col 5 - turquoise
  rect(posXBot16, posYBot16, tamBot16, tamBot16);
  fill('#00CFC1'); //col 6 - teal
  rect(posXBot17, posYBot17, tamBot17, tamBot17);
  fill('#43BCCD'); //col 7 - aqua
  rect(posXBot18, posYBot18, tamBot18, tamBot18);
  fill('#016FB9') // col 8 - blue
  rect(posXBot19, posYBot19, tamBot19, tamBot19);
  fill('#662E9B'); //col 9 - purple
  rect(posXBot20, posYBot20, tamBot20, tamBot20);
  fill('#C200FB'); //col 10 bright purple
  rect(posXBot21, posYBot21, tamBot21, tamBot21);






  if (mouseIsPressed == true) {
    
    if (mouseX > posXBot1 + tamBot1 && mouseY > posYBot1 + tamBot1) {


      if (col == 1) {
        stroke('#353531');
        fill('#353531');
      }
      if (col == 2) {
        stroke('#EA3546');
        fill('#EA3546');
      }
      if (col == 3) {
        stroke('#F86624');
        fill('#F86624');
      }
      if (col == 4) {
        stroke('#F9C80E');
        fill('#F9C80E');
      }
      if (col == 5) {
        stroke('#00FFE7');
        fill('#00FFE7');
      }
      if (col == 6) {
        stroke('#00CFC1');
        fill('#00CFC1');
      }
      if (col == 7) {
        stroke('#43BCCD');
        fill('#43BCCD');
      }
      if (col == 8) {
        stroke('#016FB9');
        fill('#016FB9');
      }
      if (col == 9) {
        stroke('#662E9B');
        fill('#662E9B');
      }
      if (col == 10) {
        stroke('#C200FB');
        fill('#C200FB');
      }


      //zig-zag
      if (herramienta == 1) {
        strokeWeight(1);
        line(pmouseX - 4, pmouseY + 4, mouseX + 4, mouseY - 4);
        line(pmouseX + 3, pmouseY - 3, pmouseX - 3, pmouseY + 3);
        //line(width / 2, height / 2, mouseX, mouseY)
      }
      //crossed elipses
      if (herramienta == 2) {
        strokeWeight(1);
        noFill();
        ellipse(mouseX, mouseY, 20, 90);
        ellipse(mouseX, mouseY, 90, 20);
      }
      //bullseye
      if (herramienta == 3) {
        strokeWeight(2);
        noFill();
        for(var x = 10; x <= 150; x = x + 10) {
        ellipse(mouseX, mouseY, mouseX + x, mouseY + x);}
       
      }
      //cirlces
      if (herramienta == 4) {
        strokeWeight(1);
        noFill();
        ellipse(mouseX, mouseY, mouseX, mouseY);
      }
      //5 dots
      if (herramienta == 5) {
        strokeWeight(3);
        for(var i = 5; i <= height; i = i + 5) {
        point(mouseX, mouseY);
        point(mouseX - i, mouseY);
        point(mouseX + i, mouseY);
        point(mouseX, mouseY + i);
        point(mouseX, mouseY - i);}
      }
      //vertex
      if (herramienta == 6) {
        strokeWeight(10);
        beginShape();
        vertex(mouseX, mouseY);
        vertex(mouseX, mouseY);
        vertex(mouseX - 20, mouseY - 40);
        vertex(0, mouseY - 50);
        vertex(mouseX - 15, mouseY - 20);
        vertex(mouseX, mouseY - 10);
        vertex(mouseX + 15, mouseY - 20);
        vertex(width, mouseY + 100);
        vertex(mouseX, mouseY);
        vertex(mouseX, mouseY);
        endShape(CLOSE);
      }
      //crisscross
      if (herramienta == 7) {
        strokeWeight(1);
         for(var a = 10; a <= 200; a = a + 10) {
        line(mouseX - a, mouseY + a, pmouseX + a, pmouseY - a);
        line(mouseX + a, mouseY - a, pmouseX - a, pmouseY + a);}
    
      }
  //triangle
      if (herramienta == 8) {
        strokeWeight(1);
        noFill ();
         for(var b = 10; b <= 400; b = b + 10) {
        triangle (mouseX, mouseY, mouseX + b, mouseY, mouseX - b, mouseY + b);}
      }
      
      // Vs
      if (herramienta == 9) {
        strokeWeight(1);
        noFill ();
      for(var v = 10; v <= width; v = v + 50) {
        line(mouseX, mouseY, height - v, width + v);
        ellipse (mouseX + v, mouseY +v , v);
      
        }
      }

      //eraser
      if (herramienta == 10) {
        stroke(220)
        strokeWeight(10);
        line(mouseX, mouseY, pmouseX, pmouseY)
      }
    }

    //clear drawing
    if (mouseX > posXBot1 && mouseX < posXBot1 + tamBot1 && mouseY > posYBot1 && mouseY < posYBot1 + tamBot1) {
      background(220);
    }
    if (mouseX > posXBot2 && mouseX < posXBot2 + tamBot2 && mouseY > posYBot2 && mouseY < posYBot2 + tamBot2) {
      herramienta = 1;
    }
    if (mouseX > posXBot3 && mouseX < posXBot3 + tamBot3 && mouseY > posYBot3 && mouseY < posYBot3 + tamBot3) {
      herramienta = 2;
    }
    if (mouseX > posXBot4 && mouseX < posXBot4 + tamBot4 && mouseY > posYBot4 && mouseY < posYBot4 + tamBot4) {
      herramienta = 3;
    }
    if (mouseX > posXBot5 && mouseX < posXBot5 + tamBot5 && mouseY > posYBot5 && mouseY < posYBot5 + tamBot5) {
      herramienta = 4;
    }
    if (mouseX > posXBot6 && mouseX < posXBot6 + tamBot6 && mouseY > posYBot6 && mouseY < posYBot6 + tamBot6) {
      herramienta = 5;
    }
    if (mouseX > posXBot7 && mouseX < posXBot7 + tamBot7 && mouseY > posYBot7 && mouseY < posYBot7 + tamBot7) {
      herramienta = 6;
    }
    if (mouseX > posXBot8 && mouseX < posXBot8 + tamBot8 && mouseY > posYBot8 && mouseY < posYBot8 + tamBot8) {
      herramienta = 7;
    }
    if (mouseX > posXBot9 && mouseX < posXBot9 + tamBot9 && mouseY > posYBot9 && mouseY < posYBot9 + tamBot9) {
      herramienta = 8;
    }
    if (mouseX > posXBot10 && mouseX < posXBot10 + tamBot10 && mouseY > posYBot10 && mouseY < posYBot10 + tamBot10) {
      herramienta = 9;
    }
    if (mouseX > posXBot11 && mouseX < posXBot11 + tamBot11 && mouseY > posYBot11 && mouseY < posYBot11 + tamBot11) {
      herramienta = 10;
    }
    if (mouseX > posXBot12 && mouseX < posXBot12 + tamBot12 && mouseY > posYBot12 && mouseY < posYBot12 + tamBot12) {
      col = 1;
    }
    if (mouseX > posXBot13 && mouseX < posXBot13 + tamBot13 && mouseY > posYBot13 && mouseY < posYBot13 + tamBot13) {
      col = 2;
    }
    if (mouseX > posXBot14 && mouseX < posXBot14 + tamBot14 && mouseY > posYBot14 && mouseY < posYBot14 + tamBot14) {
      col = 3;
    }
    if (mouseX > posXBot15 && mouseX < posXBot15 + tamBot15 && mouseY > posYBot15 && mouseY < posYBot15 + tamBot15) {
      col = 4;
    }
    if (mouseX > posXBot16 && mouseX < posXBot16 + tamBot16 && mouseY > posYBot16 && mouseY < posYBot16 + tamBot16) {
      col = 5;
    }
    if (mouseX > posXBot17 && mouseX < posXBot17 + tamBot17 && mouseY > posYBot17 && mouseY < posYBot17 + tamBot17) {
      col = 6;
    }
    if (mouseX > posXBot18 && mouseX < posXBot18 + tamBot18 && mouseY > posYBot18 && mouseY < posYBot18 + tamBot18) {
      col = 7;
    }
    if (mouseX > posXBot19 && mouseX < posXBot19 + tamBot19 && mouseY > posYBot19 && mouseY < posYBot19 + tamBot19) {
      col = 8;
    }
    if (mouseX > posXBot20 && mouseX < posXBot20 + tamBot20 && mouseY > posYBot20 && mouseY < posYBot20 + tamBot20) {
      col = 9;
    }
    if (mouseX > posXBot21 && mouseX < posXBot21 + tamBot21 && mouseY > posYBot21 && mouseY < posYBot21 + tamBot21) {
      col = 10;
    }
  }
}