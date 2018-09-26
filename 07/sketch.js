var myAlgae = []
var myShrimp = []
var mySmallFish = []
var myTuna = []
var myShark = []


function preload() {
  seaweed = loadImage('assets/1_seaweed.png');
  shrimpy = loadImage('assets/2_shrimp.png');
  smallFishy = loadImage('assets/3_small fish.png');
  tuuna = loadImage('assets/4_tuna.png');
  sharky = loadImage('assets/5_shark.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background('#F2F4FF');

  //waves 
  var w0x = 0
  var w0y = 50
  var w1x1 = width * 0.025
  var w1y1 = 150
  var w1x2 = width * 0.075
  var w1y2 = 50
  var w1x3 = width * 0.175
  var w1y3 = 50

  var w2x1 = width * 0.175
  var w2y1 = 50
  var w2x2 = width * 0.200
  var w2y2 = 150
  var w2x3 = width * 0.250
  var w2y3 = 50
  var w2x4 = width * 0.350
  var w2y4 = 50

  var w3x1 = width * 0.350
  var w3y1 = 50
  var w3x2 = width * 0.375
  var w3y2 = 150
  var w3x3 = width * 0.425
  var w3y3 = 50
  var w3x4 = width * 0.525
  var w3y4 = 50

  var w4x1 = width * 0.525
  var w4y1 = 50
  var w4x2 = width * 0.550
  var w4y2 = 150
  var w4x3 = width * 0.600
  var w4y3 = 50
  var w4x4 = width * 0.700
  var w4y4 = 50

  var w5x1 = width * 0.700
  var w5y1 = 50
  var w5x2 = width * 0.725
  var w5y2 = 150
  var w5x3 = width * 0.775
  var w5y3 = 50
  var w5x4 = width * 0.875
  var w5y4 = 50

  var w6x1 = width * 0.875
  var w6y1 = 50
  var w6x2 = width * 0.900
  var w6y2 = 150
  var w6x3 = width * 0.950
  var w6y3 = 50
  var w6x4 = width * 1.05
  var w6y4 = 50

  var w7x1 = width * 1.05
  var w7y1 = 50
  var w7x2 = width * 1.30
  var w7y2 = 150
  var w7x3 = width * 1.80
  var w7y3 = 50
  var w7x4 = width * 1.180
  var w7y4 = 50

  noFill();
  stroke('#247BA0');
  strokeWeight(6);
  beginShape();
  vertex(w0x, w0y);
  bezierVertex(w1x1, w1y1, w1x2, w1y2, w1x3, w1y3)
  bezierVertex(w2x1, w2y1, w2x2, w2y2, w2x3, w2y3, w2x4, w2y4)
  bezierVertex(w3x1, w3y1, w3x2, w3y2, w3x3, w3y3, w3x4, w3y4)
  bezierVertex(w4x1, w4y1, w4x2, w4y2, w4x3, w4y3, w4x4, w4y4)
  bezierVertex(w5x1, w5y1, w5x2, w5y2, w5x3, w5y3, w5x4, w5y4)
  bezierVertex(w6x1, w6y1, w6x2, w6y2, w6x3, w6y3, w6x4, w6y4)
  bezierVertex(w7x1, w7y1, w7x2, w7y2, w7x3, w7y3, w7x4, w7y4)
  endShape();

  stroke('#85C7F2');
  strokeWeight(2);
  beginShape();
  vertex(w0x - 5, w0y);
  bezierVertex(w1x1 - 25, w1y1, w1x2 - 25, w1y2, w1x3 - 25, w1y3)
  bezierVertex(w2x1 - 25, w2y1, w2x2 - 25, w2y2, w2x3 - 25, w2y3)
  bezierVertex(w3x1 - 25, w3y1, w3x2 - 25, w3y2, w3x3 - 25, w3y3)
  bezierVertex(w4x1 - 25, w4y1, w4x2 - 25, w4y2, w4x3 - 25, w4y3)
  bezierVertex(w5x1 - 25, w5y1, w5x2 - 25, w5y2, w5x3 - 25, w5y3)
  bezierVertex(w6x1 - 25, w6y1, w6x2 - 25, w6y2, w6x3 - 25, w6y3)
  bezierVertex(w7x1 - 25, w7y1, w7x2 - 25, w7y2, w7x3 - 25, w7y3)
  endShape();

  beginShape();
  vertex(w0x - 5, w0y);
  bezierVertex(w1x1, w1y1 - 15, w1x2, w1y2 - 15, w1x3, w1y3 - 15)
  bezierVertex(w2x1, w2y1 - 15, w2x2, w2y2 - 15, w2x3, w2y3 - 15)
  bezierVertex(w3x1, w3y1 - 15, w3x2, w3y2 - 15, w3x3, w3y3 - 15)
  bezierVertex(w4x1, w4y1 - 15, w4x2, w4y2 - 15, w4x3, w4y3 - 15)
  bezierVertex(w5x1, w5y1 - 15, w5x2, w5y2 - 15, w5x3, w5y3 - 15)
  bezierVertex(w6x1, w6y1 - 15, w6x2, w6y2 - 15, w6x3, w6y3 - 15)
  bezierVertex(w7x1, w7y1 - 15, w7x2, w7y2 - 15, w7x3, w7y3 - 15)
  endShape();

  beginShape();
  vertex(w0x - 5, w0y);
  bezierVertex(w1x1, w1y1 - 5, w1x2, w1y2 - 5, w1x3, w1y3 - 5)
  bezierVertex(w2x1, w2y1 - 5, w2x2, w2y2 - 5, w2x3, w2y3 - 5)
  bezierVertex(w3x1, w3y1 - 5, w3x2, w3y2 - 5, w3x3, w3y3 - 5)
  bezierVertex(w4x1, w4y1 - 5, w4x2, w4y2 - 5, w4x3, w4y3 - 5)
  bezierVertex(w5x1, w5y1 - 5, w5x2, w5y2 - 5, w5x3, w5y3 - 5)
  bezierVertex(w6x1, w6y1 - 5, w6x2, w6y2 - 5, w6x3, w6y3 - 5)
  bezierVertex(w7x1, w7y1 - 5, w7x2, w7y2 - 5, w7x3, w7y3 - 5)
  endShape();

  //Seaweed
  image(seaweed, -20, height * 0.78);
  image(seaweed, width * 0.15, height * 0.78);
  image(seaweed, width * 0.30, height * 0.78);
  image(seaweed, width * 0.45, height * 0.78);
  image(seaweed, width * 0.60, height * 0.78);
  image(seaweed, width * 0.75, height * 0.78);
  image(seaweed, width * 0.90, height * 0.78);
  image(seaweed, width, height * 0.78);

  //Shark
  if (frameCount % 80 == 0) {
    myShark[myShark.length] = new shark(random(-width, width), random(0, height * 0.4));
  }
  for (var i = 0; i < myShark.length; i = i + 1) {
    myShark[i].dibujarse();
    myShark[i].moverse();
 // morirse de vejez
 if (myShark[i].edad > 1000 && myShark[i].y == width) {
 myShark[i].morirse();
 }
  }

  //tuna
  if (frameCount % 50 == 0) {
    myTuna[myTuna.length] = new tuna(random(width + 10, -width), random(height * 0.2, height * 0.6));
  }
  for (var i = 0; i < myTuna.length; i = i + 1) {
    myTuna[i].dibujarse();
    myTuna[i].moverse();
  }

  //Small fish
  if (frameCount % 30 == 0) {
    mySmallFish[mySmallFish.length] = new smallFish(random(-width, width), random(height * 0.4, height * 0.9));
  }
  for (var i = 0; i < mySmallFish.length; i = i + 1) {
    mySmallFish[i].dibujarse();
    mySmallFish[i].moverse();
  }

  //Shrimp
  if (frameCount % 20 == 0) {
    myShrimp[myShrimp.length] = new shrimp(random(0, width), random(height * 0.7, height));
  }
  for (var i = 0; i < myShrimp.length; i = i + 1) {
    myShrimp[i].dibujarse();
    myShrimp[i].moverse();
    // morirse de vejez
 if (myShrimp[i].edad > 800) {
 myShrimp[i].morirse();
 }
  }

  //Algae
  if (frameCount % 5 == 0) {
    myAlgae[myAlgae.length] = new algae(random(0, width), random(150, height));
  }
  for (var i = 0; i < myAlgae.length; i = i + 1) {
    myAlgae[i].dibujarse();
    myAlgae[i].moverse();
//stop at waves
    if (myAlgae[i].y < 120) {
      myAlgae[i].morirse();
    }
  }

  
  ShrimpEatAlgae();
  fishEatShrimp();
  tunaEatFish();
  sharkEatTuna()

}

//FUNCTIONS
//ALGAE
function algae(miX, miY) {
  // Caracteristicas
  this.x = miX;
  this.y = miY;
  this.estaViva = true;

  // Habilidades
  this.dibujarse = function() {
    if (this.estaViva == true) {
      stroke('#55AA55');
      fill('#55AA55');
      rect(this.x, this.y, 2, 2);
    }
  };

  this.moverse = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y - 1;
  };

  this.morirse = function() {
    this.estaViva = false;
  };

}

//SHRIMP
function shrimp(miX, miY) {
  // Caracteristicas
  this.x = miX;
  this.y = miY;
  this.edad = 0;
  this.estaViva = true;

  // Habilidades
  this.dibujarse = function() {
    if (this.estaViva == true) {
      image(shrimpy, this.x, this.y)
    }
  };

  this.moverse = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
    this.edad = this.edad + 1;
  };

  this.morirse = function() {
    this.estaViva = false;
  };

}

//FISH
function smallFish(miX, miY) {
  // Caracteristicas
  this.x = miX;
  this.y = miY;
  this.estaViva = true;

  // Habilidades
  this.dibujarse = function() {
    if (this.estaViva == true) {
      image(smallFishy, this.x, this.y)
    }
  };

  this.moverse = function() {
    this.x = this.x + 1;
    this.y = this.y + random(-1, 1);
  };

  this.morirse = function() {
    this.estaViva = false;
  };
}

//TUNA
function tuna(miX, miY) {
  // Caracteristicas
  this.x = miX;
  this.y = miY;
  this.estaViva = true;

  // Habilidades
  this.dibujarse = function() {
    if (this.estaViva == true) {
      image(tuuna, this.x, this.y)
    }
  };

  this.moverse = function() {
    this.x = this.x - 1;
    this.y = this.y + random(-1, 1);
  };

  this.morirse = function() {
    this.estaViva = false;
  };
}

//SHARK
function shark(miX, miY) {
  // Caracteristicas
  this.x = miX;
  this.y = miY;
  this.tam = 20;
  this.edad = 0;
  this.estaViva = true;

  // Habilidades
  this.dibujarse = function() {
    if (this.estaViva == true) {
      image(sharky, this.x, this.y)
    }
  };

  this.moverse = function() {
    this.x = this.x + 1;
    this.y = this.y + random(-1, 1);
    this.edad = this.edad + 1;
  };

  this.morirse = function() {
    this.estaViva = false;
  };
}

//SHARK EAT TUNA
function sharkEatTuna() {

  for (var t = 0; t < myShark.length; t = t + 1) {

    for (var j = 0; j < myTuna.length; j = j + 1) {

      if (dist(myShark[t].x + 150, myShark[t].y + 50, myTuna[j].x, myTuna[j].y) < 40) {
        myTuna[j].morirse();
      }
    }
  }

}

//TUNA EAT FISH
function tunaEatFish() {

  for (var t = 0; t < myTuna.length; t = t + 1) {

    for (var j = 0; j < mySmallFish.length; j = j + 1) {

      if (dist(myTuna[t].x, myTuna[t].y + 30, mySmallFish[j].x + 45, mySmallFish[j].y) < 60) {
        mySmallFish[j].morirse();
      }
    }
  }

}

//FISH EAT SHRIMP
function fishEatShrimp() {

  for (var t = 0; t < mySmallFish.length; t = t + 1) {

    for (var j = 0; j < myShrimp.length; j = j + 1) {

      if (dist(mySmallFish[t].x + 50, mySmallFish[t].y + 20, myShrimp[j].x, myShrimp[j].y) < 40) {
        myShrimp[j].morirse();
      }
    }
  }

}

//SHRIMP EAT ALGAE
function ShrimpEatAlgae() {

  for (var t = 0; t < myShrimp.length; t = t + 1) {

    for (var j = 0; j < myAlgae.length; j = j + 1) {

      if (dist(myShrimp[t].x, myShrimp[t].y + 10, myAlgae[j].x, myAlgae[j].y) < 20) {
        myAlgae[j].morirse();
      }
    }
  }

}