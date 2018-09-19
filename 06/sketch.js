var ersatz;
var miAmplitud;
var miMicrofono;

var volHistory = [];

var angle = 2.0;
var offset = 300;
var scalar = 3.5;
var speed = 0.05;
var col = {
  r: 255,
  g: 0,
  b: 0
};

function preload() {
  ersatz = loadSound('assets/ersatz2.m4a');
  eyeOpen = loadImage('assets/eyeopen.png');
  eyeClose = loadImage('assets/eyeclose.png');
  redEye = loadImage('assets/redeye.png');
  whiteEye = loadImage('assets/whiteeye.png');
 
}

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  frameRate(45);
  //noStroke();


  miAmplitud = new p5.Amplitude();
  miAmplitud.setInput(ersatz);

  miMicrofono = new p5.AudioIn();
  miMicrofono.start();
  ersatz.play();
}

function draw() {
  background(random(0, 255))
  var miTamano = map(miAmplitud.getLevel(), 0, 1, 0, 600);
  var tTotal = ersatz.duration();
  var vol = miAmplitud.getLevel();
  volHistory.push(vol);
  var hertz = map(miAmplitud.getLevel(), 0, 1, 20.0, 440.0);
  var songSpeed = map(mouseX, 0, height, 0, 2);
  songSpeed = constrain(songSpeed, 0.01, 4);
  ersatz.rate(songSpeed);

  
  if (ersatz.isPlaying() == false) {
    ersatz.play();
  }
  

  if (ersatz.currentTime() >= 100){
     stroke(0);
      fill(0);
      rect(0, 0, width, height);
  }
  
   push();
    if(ersatz.currentTime() >= 92 && ersatz.currentTime() <= 100) {
      background(random(0, 255))
    }
     
  if (ersatz.currentTime() >= 96 && ersatz.currentTime() <= 100) {
    image(eyeClose, 0, 0, width, height);
  }
  
   if (ersatz.currentTime() >= 92 && ersatz.currentTime() <= 96) {
    image(eyeOpen,0,0,width,height);
      } 
  
  if (ersatz.currentTime() >= 92 && ersatz.currentTime() <= 99) {
    if (volHistory.length > width) volHistory.splice(0, 1); {
      stroke(255, 255, 0);
      strokeWeight(1);
      noFill();
      beginShape();
      for (var i = 0; i < volHistory.length; i++) {
        var y3 = map(volHistory[i], 0, 1, height / 2, 0);
        vertex(i, y3);
      }
      endShape();
      stroke(160, 32, 240);
      line(0, height / 2, width, height / 2);
    }
  }
  pop ();


    if (ersatz.currentTime() >= 84 && ersatz.currentTime() <= 92) {
       image(eyeOpen, 0, 0, width, height);  
       col.r = random(0, 200);
      col.g = random(0, 250);
      col.b = random(100, 250);
      stroke(col.r, col.g, col.b);
      strokeWeight (5);
      line(0, 0, 600, hertz);
      stroke(col.r, col.g, col.b);
      line(0, height * 0.25, 600, hertz);
      stroke(col.r, col.g, col.b);
      line(0, height / 2, 600, hertz);
      stroke(col.r, col.g, col.b);
      line(0, height * 0.75, 600, hertz);
      stroke(col.r, col.g, col.b);
      line(0, height, 600, hertz);
       fill(col.r, col.g, col.b);
        if (miTamano > 100) {
        for (var b = 0; b < 600; b = b + 1) {
          var posX2 = random(0, width);
          var posY2 = random(0, height);
          rect(posX2, posY2, 10, 10);
        }
        }    
    }

    push();
    if (ersatz.currentTime() >= 71 && ersatz.currentTime() <= 84) {
      background(0);
    }
    if (ersatz.currentTime() >= 71 && ersatz.currentTime() <= 84) {
      for (var h = 0; h < width; h++) {
        var a1 = map(h, 0, width, 0, 120 * hertz);
        var sinValue = sin(a1) * 120
        stroke(col.r, col.g, col.b);
        strokeWeight(1);
        line(h, 0, h, height / 2 + sinValue);
      }
    }

    if (ersatz.currentTime() >= 71 && ersatz.currentTime() <= 84) {
      col.r = random(0, 200);
      col.g = random(0, 250);
      col.b = random(100, 250);
      strokeWeight(2);
      stroke(col.r, col.g, col.b);
      for (var L = 0; L < width; L = L + 20) {
        line(L, 600, hertz, hertz);
        line(600, L, hertz, hertz);
      }
    }

    pop();

    push();
    if (ersatz.currentTime() >= 58 && ersatz.currentTime() <= 71) {
      background(random(0, 255))
    }

    if (ersatz.currentTime() >= 69 && ersatz.currentTime() <= 71) {
      image(whiteEye, 0, 0, width, height);
      col.r = random(0, 200);
      col.g = random(0, 250);
      col.b = random(100, 250);
      stroke(col.r, col.g, col.b);
      fill(col.r, col.g, col.b);
      ellipse(width / 2, height / 2, miTamano, miTamano)
    }


    if (ersatz.currentTime() >= 68 && ersatz.currentTime() <= 69) {
      image(eyeClose, 0, 0, width, height);
    }

    if (ersatz.currentTime() >= 64 && ersatz.currentTime() <= 68) {
      image(whiteEye, 0, 0, width, height);
      col.r = random(0, 200);
      col.g = random(0, 250);
      col.b = random(100, 250);
      stroke(col.r, col.g, col.b);
      fill(col.r, col.g, col.b);
      ellipse(width / 2, height / 2, miTamano, miTamano)
    }

    if (ersatz.currentTime() >= 58 && ersatz.currentTime() <= 64) {
      //     background(random(0, 255))
      col.r = random(0, 200);
      col.g = random(0, 250);
      col.b = random(100, 250);
      stroke(col.r, col.g, col.b);
      fill(col.r, col.g, col.b);
      ellipse(width / 2, height / 2, miTamano, miTamano)
      noFill();
      ellipse(width / 2, height / 2, miTamano + 200, miTamano + 200);
      ellipse(width / 2, height / 2, miTamano + 300, miTamano + 300);
      ellipse(width / 2, height / 2, miTamano + 400, miTamano + 400);
      ellipse(width / 2, height / 2, miTamano + 500, miTamano + 500);
    }

    pop();

    push();
    if (ersatz.currentTime() >= 47 && ersatz.currentTime() <= 58) {
      background(0);
    }
    if (ersatz.currentTime() >= 48 && ersatz.currentTime() <= 58) {
      stroke(col.r, col.g, col.b);
      strokeWeight(2);
      //for(var xe = 10; xe <= 150; xe = xe + 10) {
      ellipse(width / 2, height / 2, miTamano, miTamano)
      noFill();
      ellipse(width / 2, height / 2, miTamano + 100, miTamano + 100);
      ellipse(width / 2, height / 2, miTamano + 200, miTamano + 200);
      ellipse(width / 2, height / 2, miTamano + 300, miTamano + 300);
      ellipse(width / 2, height / 2, miTamano + 400, miTamano + 400);
      ellipse(width / 2, height / 2, miTamano + 500, miTamano + 500);
    }

    if (ersatz.currentTime() >= 47 && ersatz.currentTime() <= 58) {
      var xq = offset + cos(angle) * scalar;
      var yq = offset + sin(angle) * scalar;
      col.r = random(0, 200);
      col.g = random(0, 250);
      col.b = random(100, 250);
      fill(col.r, col.g, col.b);
      noStroke();
      ellipse(xq, yq, 125, 125);
      angle += angle;
      scalar += speed;
    }
    pop();

    if (ersatz.currentTime() >= 46 && ersatz.currentTime() <= 47) {
      background(random(0, 255))
      image(eyeClose, 0, 0, width, height);
    }

    if (ersatz.currentTime() >= 42 && ersatz.currentTime() <= 46) {
      stroke(0);
      fill(0);
      rect(0, 0, width, height);
      image(whiteEye, 0, 0, width, height);
      col.r = random(0, 200);
      col.g = random(0, 250);
      col.b = random(100, 250);
      stroke(col.r, col.g, col.b);
      fill(col.r, col.g, col.b);
      if (miTamano > 100) {
        for (var a = 0; a < 600; a = a + 1) {
          var posX = random(0, width);
          var posY = random(0, height);
          rect(posX, posY, 10, 10);
        }
      }
    }

    if (ersatz.currentTime() >= 16 && ersatz.currentTime() <= 42) {
      frameRate(30);
    }

    if (ersatz.currentTime() >= 26 && ersatz.currentTime() <= 42) {
      stroke(0);
      fill(0);
      rect(0, 0, width, height);
      image(whiteEye, 0, 0, width, height);
      col.r = random(0, 200);
      col.g = random(0, 250);
      col.b = random(100, 250);
      var xx = offset + cos(angle) * scalar;
      var yy = offset + sin(angle) * scalar;
      fill(col.r, col.g, col.b);
      noStroke();
      ellipse(xx, yy, 20, 20);
      angle += miTamano;
      scalar += speed;
      if (ersatz.currentTime() >= 30 && ersatz.currentTime() <= 42) {
        push();
        tint(255, 0, 150);
        translate(width / 2, height / 2);
        rotate(angle);
        image(whiteEye, 0, 0, width, height);
        angle += 0.1;
        pop();
      }
    }

    if (ersatz.currentTime() >= 16 && ersatz.currentTime() <= 26) {
      stroke(0);
      fill(0);
      rect(0, 0, width, height);
      stroke(255);
      fill(255);
      if (miTamano > 100) {
        for (var b = 0; b < 600; b = b + 1) {
          var posX2 = random(0, width);
          var posY2 = random(0, height);
          rect(posX2, posY2, 10, 10);
        }
      }
    }

    push();
    if (ersatz.currentTime() <= 16) {
      background(random(0, 255))
      frameRate(60);
    }

    if (ersatz.currentTime() >= 15 && ersatz.currentTime() <= 16) {
      image(redEye, 0, 0, width, height);

    }
    if (ersatz.currentTime() >= 14 && ersatz.currentTime() <= 15) {
      image(eyeClose, 0, 0, width, height);

    }
    if (ersatz.currentTime() >= 11 && ersatz.currentTime() <= 14) {
      image(eyeOpen, 0, 0, width, height);
    }


    if (ersatz.currentTime() <= 15) {
      //background(random(0, 255))
      if (volHistory.length > width) volHistory.splice(0, 1); {
        stroke(255, 255, 0);
        strokeWeight (1);
        noFill();
        beginShape();
        for (var i = 0; i < volHistory.length; i++) {
          var y3 = map(volHistory[i], 0, 1, height / 2, 0);
          vertex(i, y3);
        }
        endShape();
        stroke(160, 32, 240);
        line(0, height / 2, width, height / 2);
        pop();
      }
    }
  }