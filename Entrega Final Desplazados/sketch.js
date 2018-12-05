//Tabla despazados 1992-2002
var miTabla;
//Tabla edades
var tablaEdades;

// Imagen inicial
var introI;
// Imagen Bogotá
var imgBogota;
// Imagen Medellin
var imgMedellin;
// Imagen Uniandes
var imgUniandes;
// Logo Uniandes
var logoU;
// Intro Bogotá
var introB;
// Intro Uniandes
var introU;
// Leyenda Uniandes
var leyendaU;
// Total Uniandes
var tnu;
// Intro Medellin
var introM;
// Total Medellin
var td;
// Número total en imagen
var numTot;
//Pregunta Inicial
var pregIn;
//Intro Final
var introF;
//Leyenda Final
var leyendaF;
//Instrucciones Final
var istruccFin;

//BOTONES FINALES
var botonFin;

//Audio 1
var aPrimero;
//Audio 2
var aSegundo;
//Audio 3
var aTercero;
//Audio 4
var aCuarto;
//Audio5
var aQuinto;
//Audio6
var aSexto;
//Audio 7 
var aSeptimo;
//Audio 8
var aOctavo;
//Audio9
var aNoveno;
//Audio hombre 1
var aHomU;
//Audio hombre 2
var aHomD;
//Audio mujer 1
var aMujU;
//Audio mujer 2
var aMujD;
//Audio Nino
var aNin;
//Audio anciana
var aAnciana;
//Audio anciano
var aAnciano;

//VARIABLES 
// Total personas desplazadas 1993 - 2017
var valori = 0;
//Año inicial
var ano = 1993;
// Población Uniandes
var pobUniandes = 24653;
//Población Bogotá
var pobBog = 8080734;
//Población Medellin
var pobMedellin = 2441123;
//Inicio parte Distribucion
var disdis = false;
//Inicio parte Final
var finfin = false;
//Inicio botones finales
var finfinfin = false;
//Inicio parte Uniandes
var uniuni = false;
//Inicio parte Medellin
var medmed = false;
//CONTADORES PARTE FINAL
var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;
var f = 0;
var g = 0;
//NUMEROS PARTE FINAL
var aE;
var bE;
var cE;
var dE;
var eE;
var fE;
var gE;
//CONTADORES Uniandes
var u = 0;
var n = 0;
//CONTADORES Medellin
var m = 0;
var l = 0;

//Carga inicial de assets
function preload() {
  miTabla = loadTable('assets/CEDE datos completos1.csv', 'csv', 'header');
  tablaEdades = loadTable('assets/scaled explusores.csv', 'csv', 'header');

  //Imágenes repetidas
  imgBogota = loadImage('assets/bogota.jpg');
  imgMedellin = loadImage('assets/medellin.jpeg');
  imgUniandes = loadImage('assets/uniandes.jpg');
  logoU = loadImage('assets/logouniandes.png');

  //Pantallas Informativas
  introI = loadImage('assets/intro.png');
  introB = loadImage('assets/introBog.png');
  introU = loadImage('assets/introUniandes.png');
  leyendaU = loadImage('assets/uniandesDos.png');
  tnu = loadImage('assets/329.png');
  introM = loadImage('assets/introMedellin.png');
  td = loadImage('assets/32.png');
  introF = loadImage('assets/introFinal.png');
  numTot = loadImage('assets/numeroTotal.png');
  pregIn = loadImage('assets/quienesSon.png');
  leyendaF = loadImage('assets/leyendaFinal.png');
  instruccFin = loadImage('assets/instruccionesFin.png');

  //BOTON
  botonFin = loadImage('assets/boton.png');

  //AUDIOS
  aPrimero = loadSound('assets/Audio/primero.mp4');
  aSegundo = loadSound('assets/Audio/segundo.mp4');
  aTercero = loadSound('assets/Audio/tercero.mp4');
  aCuarto = loadSound('assets/Audio/cuarto.mp4');
  aQuinto = loadSound('assets/Audio/quinto.mp4');
  aSexto = loadSound('assets/Audio/sexto.mp4');
  aSeptimo = loadSound('assets/Audio/septimo.mp4');
  aOctavo = loadSound('assets/Audio/octavo.mp4');
  aNoveno = loadSound('assets/Audio/noveno.mp4');
  aHomU = loadSound('assets/Audio/hombre desplazado.mp3');
  aHomD = loadSound('assets/Audio/hombre desplazado 2.mp3');
  aMujU = loadSound('assets/Audio/mujer desplazada.mp3');
  aMujD = loadSound('assets/Audio/mujer desplazada2.mp3');
  aNin = loadSound('assets/Audio/nino desplazado.mp3');
  aAnciano = loadSound('assets/Audio/anciano desplazado.mp3');
  aAnciana = loadSound('assets/Audio/anciana desplazada.mp3');
}

function setup() {
  createCanvas(1600, 800);
  valorinicial();

  setTimeout(introduccion, 0);
  setTimeout(inicio, 13000);

  //--------------------
  //INTRO---------------
  //--------------------
  setTimeout(numTotal, 24000);
  setTimeout(pregunta, 39000);
  //--------------------
  //UNIANDES------------
  //--------------------
  setTimeout(introUniandes, 45000);
  setTimeout(dosUniandes, 54000);
  setTimeout(uniandesIm, 55000);
  setTimeout(totUniFin, 63000);
  //--------------------
  //MEDELLIN------------
  //--------------------
  setTimeout(introMedellin, 65000);
  setTimeout(medellinIm, 77000);
  setTimeout(totMedFin, 80000);
  //--------------------
  //BOGOTÁ--------------
  //--------------------
  setTimeout(introBogota, 85000);
  setTimeout(bogotaIm, 103000);
  //--------------------
  //FINAL---------------
  //-------------------- 
  setTimeout(introFinal, 113000);
  setTimeout(distribucion, 129000);
  setTimeout(leyendaFin, 140000);
  aE = tablaEdades.getNum(0, '0 a 2');
  bE = tablaEdades.getNum(0, '3 a 6');
  cE = tablaEdades.getNum(0, '7 a 13');
  dE = tablaEdades.getNum(0, '14 a 17');
  eE = tablaEdades.getNum(0, '18 a 45');
  fE = tablaEdades.getNum(0, '46 a 64');
  gE = tablaEdades.getNum(0, '65 y mas');
  setTimeout(animFin, 141000);
  setTimeout(instruccionesFin, 155000);
}

function draw() {
  //Dibuja los logos de Uniandes 329 veces
  if (uniuni) {
    frameRate(45);
    var numIm = valori / pobUniandes;
    var raiz = sqrt(numIm);
    console.log(raiz);
    if (u < raiz) {
      if (n < raiz) {
        var ancho = width / raiz;
        var alto = height / raiz;
        image(logoU, n * ancho, u * alto, ancho, alto);
        n++;
      }
      if (n >= raiz) {
        u++;
        n = 0;
      }
    }
  }
  //Dibuja la imagen de Medellin 3.2 veces
  if (medmed) {
    frameRate(10);
    var numIma = valori / pobMedellin;
    var raizm = sqrt(numIma);
    console.log(raizm);
    if (m < raizm) {
      if (l < raizm) {
        var anchom = width / raizm;
        var altom = height / raizm;
        image(imgMedellin, l * anchom, m * altom, anchom, altom);
        l++;
      }
      if (l >= raizm) {
        m++;
        l = 0;
      }
    }
  }
  //Distribucion de Edades
  if (disdis) {
    frameRate(2);
    var numU = aE / valori;
    var anU = width * numU;
    fill('#FF2A2A');
    rect(0, 0, anU, height);

    var numD = bE / valori;
    var anD = width * numD;
    fill('#FFAE1F');
    rect(anU, 0, anD, height);

    var numT = cE / valori;
    var anT = width * numT;
    fill('#FFFF00');
    rect(anU + anD, 0, anT, height);

    var numC = dE / valori;
    var anC = width * numC;
    fill('#18A000');
    rect(anU + anD + anT, 0, anC, height);

    var numCi = eE / valori;
    var anCi = width * numCi;
    fill('#0041E2');
    rect(anU + anD + anT + anC, 0, anCi, height);

    var numS = fE / valori;
    var anS = numS * width;
    fill('#B118D6');
    rect(anU + anD + anT + anC + anCi, 0, anS, height);

    var numSi = gE / valori;
    var anSi = numSi * width;
    fill('#000000');
    rect(anU + anD + anT + anC + anCi + anS, 0, anSi, height);
  }
  //Dibuja puntos correspondientes a la cantidad de desplazados por Edad. 
  if (finfin) {
    frameRate(10);
    //0-2 años
    if (a < (aE / 20000)) {
      fill('#FF2A2A');
      ellipse(random(10, 1590), random(10, 790), 8, 8);
      a++;
    }
    //3-6 años
    if (b < (bE / 20000)) {
      fill('#FFAE1F');
      ellipse(random(10, 1590), random(10, 790), 8, 8);
      b++;
    }
    //7-13 años
    if (c < (cE / 20000)) {
      fill('#FFFF00');
      ellipse(random(10, 1590), random(10, 790), 8, 8);
      c++;
    }
    //14-17 años
    if (d < (dE / 20000)) {
      fill('#18A000');
      ellipse(random(10, 1590), random(10, 790), 8, 8);
      d++;
    }
    //18-45 años
    if (e < (eE / 20000)) {
      fill('#0041E2');
      ellipse(random(10, 1590), random(10, 790), 8, 8);
      e++;
    }
    //45-64 años
    if (f < (fE / 20000)) {
      fill('#B118D6');
      ellipse(random(10, 1590), random(10, 790), 8, 8);
      f++;
    }
    //65-? años
    if (g < (gE / 20000)) {
      fill('#000000');
      ellipse(random(10, 1590), random(10, 790), 8, 8);
      g++;
    }
    if (f >= (fE / 20000)) {
      finfinfin = true;
    }
  }

  if (finfinfin) {
    //Boton Hombre 1
    image(botonFin, 200, 300, 20, 20);
    //Boton Hombre 2
    image(botonFin, 700, 600, 20, 20);
    //Boton Mujer 1
    image(botonFin, 1100, 500, 20, 20);
    //Boton Mujer 2
    image(botonFin, 500, 650, 20, 20);
    //Boton Niño
    image(botonFin, 900, 150, 20, 20);
    //Boton Anciano
    image(botonFin, 1300, 450, 20, 20);
    //Boton Anciana
    image(botonFin, 800, 400, 20, 20);
    if (mouseIsPressed) {
      //Play Hombre 1
      if (mouseX > 200 && mouseX < 220 && mouseY > 300 && mouseY < 320) {
        aHomU.play();
      }
      //Play Hombre 2
      if (mouseX > 700 && mouseX < 720 && mouseY > 600 && mouseY < 620) {
        aHomD.play();
      }
      //Play Mujer 1
      if (mouseX > 1100 && mouseX < 1120 && mouseY > 500 && mouseY < 520) {
        aMujU.play();
      }
      //Play Mujer 2
      if (mouseX > 500 && mouseX < 520 && mouseY > 650 && mouseY < 670) {
        aMujD.play();
      }
      //Play Nino
      if (mouseX > 900 && mouseX < 920 && mouseY > 150 && mouseY < 170) {
        aNin.play();
      }
      //Play Anciano
      if (mouseX > 1300 && mouseX < 1320 && mouseY > 450 && mouseY < 470) {
        aAnciano.play();
      }
      //Play Anciana
      if (mouseX > 800 && mouseX < 820 && mouseY > 400 && mouseY < 420) {
        aAnciana.play();
      }

    }
  }
}

function introduccion() {
  background(255);
  image(introI, 0, 0);
  aPrimero.play();
}

function inicio() {

  background(240);
  noStroke();
  // Dibujar parte Amarilla de la bandera
  fill('#FCD116');
  rect(0, 0, width, height / 2);

  // Dibujar parte Azul de la bandera
  fill('#003893');
  rect(0, height / 2, width, height);

  // Dibujar parte Roja de la bandera
  fill('#CE1126');
  var tama = miTabla.getRowCount();

  // Comenzar forma de gráfica
  beginShape();
  vertex(0, height);
  vertex(0, 600);
  for (var v = 0; v < 25; v++) {
    var totala = 0;
    for (var m = v; m < tama; m += 25) {
      var expul = miTabla.getNum(m, 'desplazados_expulsion');
      totala += expul;
    }
    // 714185 es la diferencia entre el el menor valor y el mayor, es por esto que 
    // se usa para dividir los 300 pixeles en donde se dibuja la gráfica.
    vertex(((width / 25) * v) + 10, 600 - (totala * (600 / 714185)));
    var tutu = 600 - (totala * (600 / 714185));
    console.log(tutu);
    ano++;
  }
  console.log('fin');
  vertex(width, 600);
  vertex(width, height);
  // Termina la figura.
  endShape(CLOSE);
  //Escribir los años en la parte inferior.
  fill(0);
  var an = 1993
  for (var t = 0; t < 25; t++) {
    text(an, ((width / 25) * t) + 3, 780);
    an++;
  }
}

//Número Total de desplazados
function numTotal() {
  image(numTot, 0, 0);
  aSegundo.play();
}

//Pregunta Inicial
function pregunta() {
  background(255);
  image(pregIn, 0, 0);
  aTercero.play();
}

//Pantalla inicial de Uniandes con su información
function introUniandes() {
  image(introU, 0, 0);
  aCuarto.play();
}
//Leyenda con logo Uniandes
function dosUniandes() {
  background(255);
  image(leyendaU, 0, 0);
}
//Imágenes de Uniandes repetidas
function uniandesIm() {
  uniuni = true;
}
//Total de logos de Uniandes
function totUniFin() {
  image(tnu, 0, 0);
}

//Pantalla inicial de Medellin con su información
function introMedellin() {
  uniuni = false;
  image(introM, 0, 0);
  aQuinto.play();
}
//Imagenes de Medellin repetidas
function medellinIm() {
  medmed = true;
}
//Total Imagenes de Medellin
function totMedFin() {
  image(td, 0, 0);
}

//Pantalla inicial de Bogotá con su información
function introBogota() {
  medmed = false;
  image(introB, 0, 0);
  aSexto.play();
}
//Imagenes de Bogotá repetidas
function bogotaIm() {
  var numIm = valori / pobBog;
  var raiz = sqrt(numIm);
  console.log(raiz);
  for (var c = 0; c < raiz; c++) {
    for (var d = 0; d < raiz; d++) {
      var ancho = width / raiz;
      var alto = height / raiz;
      image(imgBogota, d * ancho, c * alto, ancho, alto);
    }
  }
}

//Pantalla Final
function introFinal() {
  background(255);
  image(introF, 0, 0);
  aSeptimo.play();
}
//Distribucion Edades
function distribucion() {
  disdis = true;
  aOctavo.play();
}
//Leyenda Final
function leyendaFin() {
  background(255);
  disdis = false;
  image(leyendaF, 0, 0);
  aNoveno.play();
}

//Animación Final
function animFin() {
  finfin = true;
}

//Suma la cantidad de desplazados por departamento 
//para todos los años de la tabla. 
function valorinicial() {
  var tam = miTabla.getRowCount();
  for (var j = 0; j < tam; j++) {
    var ex = miTabla.getNum(j, 'desplazados_expulsion');
    valori += ex;
  }
}

//Agrega un texto explicando como interactuar con los botones
function instruccionesFin() {
  image(instruccFin, 0, 0);
}