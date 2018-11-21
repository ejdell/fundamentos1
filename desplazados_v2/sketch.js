//Tabla despazados 1992-2002
var miTabla;
//Tabla edades
var tablaEdades;

// Imagen Bogotá
var imgBogota;
// Imagen Medellin
var imgMedellin;
// Imagen Uniandes
var imgUniandes;
// Imagen Paraguay
var imgParaguay;
// Intro Bogotá
var introB;
// Intro Uniandes
var introU;
// Intro Medellin
var introM;
// Intro Paraguay
var introP;
// Número total en imagen
var numTot;
//Pregunta Inicial
var pregIn;
//Intro Final
var introF;
//Leyenda Final
var leyendaF;

//VARIABLES 
// Total personas desplazadas 1993 - 2017
var valori = 0;
//Año inicial
var ano = 1993;
// Población Uniandes
var pobUniandes = 24653;
//Población Bogotá
var pobBog = 8080734;
//Población Paraguay
var pobParaguay = 7052984;
//Población Medellin
var pobMedellin = 2441123;
//Inicio parte Final
var finfin = false;
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

//Carga inicial de assets
function preload() {
  miTabla = loadTable('assets/CEDE datos completos1.csv', 'csv', 'header');
  tablaEdades = loadTable('assets/scaled explusores.csv', 'csv', 'header');

  imgBogota = loadImage('assets/bogota.jpg');
  imgMedellin = loadImage('assets/medellin.jpeg');
  imgUniandes = loadImage('assets/uniandes.jpg');
  imgParaguay = loadImage('assets/paraguay.jpg');

  introB = loadImage('assets/introBog.png');
  introU = loadImage('assets/introUniandes.png');
  introM = loadImage('assets/introMedellin.png');
  introP = loadImage('assets/introParaguay.png');
  introF = loadImage('assets/introFinal.png');
  numTot = loadImage('assets/numeroTotal.png');
  pregIn = loadImage('assets/quienesSon.png');
  leyendaF = loadImage('assets/leyendaFinal.png');
}

function setup() {
  createCanvas(800, 400);
  valorinicial();
  setTimeout(inicio, 100);

  //--------------------
  //INTRO---------------
  //--------------------
  setTimeout(numTotal, 10000);
  setTimeout(pregunta, 15000);
  //--------------------
  //UNIANDES------------
  //--------------------
  setTimeout(introUniandes, 20000);
  setTimeout(uniandesIm, 25000);
  //--------------------
  //MEDELLIN------------
  //--------------------
  setTimeout(introMedellin, 30000);
  setTimeout(medellinIm, 35000);
  //--------------------
  //PARAGUAY------------
  //--------------------
  setTimeout(introParaguay, 40000);
  setTimeout(paraguayIm, 45000);
  //--------------------
  //BOGOTÁ--------------
  //--------------------
  setTimeout(introBogota, 50000);
  setTimeout(bogotaIm, 55000);
  //--------------------
  //FINAL---------------
  //-------------------- 
  setTimeout(introFinal, 60000);
  setTimeout(leyendaFin, 65000);
  aE = tablaEdades.getNum(0, '0 a 2');
  bE = tablaEdades.getNum(0, '3 a 6');
  cE = tablaEdades.getNum(0, '7 a 13');
  dE = tablaEdades.getNum(0, '14 a 17');
  eE = tablaEdades.getNum(0, '18 a 45');
  fE = tablaEdades.getNum(0, '46 a 64');
  gE = tablaEdades.getNum(0, '65 y mas');
  setTimeout(animFin, 66000);
}

function draw() {
  frameRate(10);
  if (finfin) {
    //0-2 años
    if (a < (aE / 20000)) {
      fill('#FF2A2A');
      ellipse(random(10, 790), random(10, 390), 8, 8);
      a++;
    }
    //3-6 años
    if (b < (bE / 20000)) {
      fill('#FFAE1F');
      ellipse(random(10, 790), random(10, 390), 8, 8);
      b++;
    }
    //7-13 años
    if (c < (cE / 20000)) {
      fill('#FFFF00');
      ellipse(random(10, 790), random(10, 390), 8, 8);
      c++;
    }
    //14-17 años
    if (d < (dE / 20000)) {
      fill('#18A000');
      ellipse(random(10, 790), random(10, 390), 8, 8);
      d++;
    }
    //18-45 años
    if (e < (eE / 20000)) {
      fill('#0041E2');
      ellipse(random(10, 790), random(10, 390), 8, 8);
      e++;
    }
    //45-64 años
    if (f < (fE / 20000)) {
      fill('#B118D6');
      ellipse(random(10, 790), random(10, 390), 8, 8);
      f++;
    }
    //65-? años
    if (g < (gE / 20000)) {
      fill('#000000');
      ellipse(random(10, 790), random(10, 390), 8, 8);
      g++;
    }
  }
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
  vertex(0, 300);
  for (var v = 0; v < 25; v++) {
    var totala = 0;
    for (var m = v; m < tama; m += 25) {
      var expul = miTabla.getNum(m, 'desplazados_expulsion');
      totala += expul;
    }
    // 714185 es la diferencia entre el el menor valor y el mayor, es por esto que 
    // se usa para dividir los 300 pixeles en donde se dibuja la gráfica.
    vertex(((width / 25) * v) + 10, 300 - (totala * (300 / 714185)));
    var tutu = 300 - (totala * (300 / 714185));
    console.log(tutu);
    ano++;
  }
  console.log('fin');
  vertex(width, 300);
  vertex(width, height);
  // Termina la figura.
  endShape(CLOSE);
  //Escribir los años en la parte inferior.
  fill(0);
  var an = 1993
  for (var t = 0; t < 25; t++) {
    text(an, ((width / 25) * t) + 3, 380);
    an++;
  }
}

//Número Total de desplazados
function numTotal() {
  image(numTot, 0, 0);
}

//Pregunta Inicial
function pregunta() {
  image(pregIn, 0, 0);
}
//Pantalla inicial de Uniandes con su información
function introUniandes() {
  image(introU, 0, 0);
}
//Imágenes de Uniandes repetidas
function uniandesIm() {
  var numIm = valori / pobUniandes;
  var raiz = sqrt(numIm);
  console.log(raiz);
  for (var c = 0; c < raiz; c++) {
    for (var d = 0; d < raiz; d++) {
      var ancho = width / raiz;
      var alto = height / raiz;
      image(imgUniandes, d * ancho, c * alto, ancho, alto);
    }
  }
}

//Pantalla inicial de Medellin con su información
function introMedellin() {
  image(introM, 0, 0);
}
//Imagenes de Medellin repetidas
function medellinIm() {
  var numIm = valori / pobMedellin;
  var raiz = sqrt(numIm);
  console.log(raiz);
  for (var c = 0; c < raiz; c++) {
    for (var d = 0; d < raiz; d++) {
      var ancho = width / raiz;
      var alto = height / raiz;
      image(imgMedellin, d * ancho, c * alto, ancho, alto);
    }
  }
}

//Pantalla inicial de Paraguay con su información
function introParaguay() {
  image(introP, 0, 0);
}
//Imagenes de Paraguay repetidas
function paraguayIm() {
  var numIm = valori / pobParaguay;
  var raiz = sqrt(numIm);
  console.log(raiz);
  for (var c = 0; c < raiz; c++) {
    for (var d = 0; d < raiz; d++) {
      var ancho = width / raiz;
      var alto = height / raiz;
      image(imgParaguay, d * ancho, c * alto, ancho, alto);
    }
  }
}

//Pantalla inicial de Bogotá con su información
function introBogota() {
  image(introB, 0, 0);
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
  image(introF, 0, 0);
}

//Leyenda Final
function leyendaFin() {
  background(255);
  image(leyendaF, 0, 0);
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