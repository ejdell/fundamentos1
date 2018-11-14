
var miTabla;
//Tabla Desplazados por Edades 2002
var tablaEx;
//Tabla Recibidos por edades 2002
var tablaRec;
//Mask del mapa de Colombia
var mapaCol;
//Mask de las edades
var imEdades;

//BOTONES
//Boton Segunda Parte-Antioquia
var botSegX = 385;
var botSegY = 185;
var botSegTam = 30;
//Boton Segunda Parte Bolivar
var botBoliX = 600;
var botBoliY = 35;
var botBoliTam = 30;
//Boton Segunda Parte BOGOTA
var botBogoX = 635;
var botBogoY = 35;
var botBogoTam = 30;
//Boton Tercera Parte
var botTerX = 670;
var botTerY = 35;
var botTerTam = 30;



//VARIABLES PRIMERA PARTE
//Contador primera parte
var i = 0;
// Total de desplazados de 1993-2017
var totalsuma = 0;
// Cantidad de personas desplazadas en 1993
var valori = 0;
//Año inicial
var ano = 1993;

//VARIABLES SEGUNDA PARTE
//Total desplazados en Antioquia 2002
var anti = 19239;
//Total desplazados en Bolivar 2002
var boli = 28885;
//Total recibidos en Bogotá 2002
var bogo = 9222;
//Altura icono Familia
var fam = 357;
//Altura icono Adultos
var adul = 357;
//Altura icono adolecentes
var adol = 269;
//Altura icono niños
var ninos = 235;
//Inicio icono Familia 
var iniFam = 19;
//Inicio icono Adultos
var iniAdul = 19;
//Inicio icono Adolecentes
var iniAdol = 99;
//Inicio icono Niños
var iniNinos = 133;
//Base icono Familia
var basFam = 375;
//Base icono Adultos
var basAdul = 375;
//Base icono Adolecentes
var basAdol = 368;
//Base icono Niños
var basNinos = 368;

//VARIABLES TERCERA PARTE


//Carga inicial de assets
function preload() {
  miTabla = loadTable('assets/CEDE datos completos1.csv', 'csv', 'header');
  tablaEx = loadTable('assets/expulsores.csv', 'csv', 'header');
  tablaRec = loadTable('assets/receptores.csv', 'csv', 'header');
  mapaCol = loadImage('assets/mapaCOLOMBIA-01-01.png');
  imEdades = loadImage('assets/edades-01.png');
}


function setup() {
  createCanvas(800, 400);
  valorinicial();
}

function draw() {
  //PRIMERA PARTE
  if (i < 25) {
    frameRate(1);
    var tam = miTabla.getRowCount();

    //Total de desplazados
    var totalano = 0;
    for (var j = i; j < tam; j += 25) {
      console.log(j);
      var expulsados = miTabla.getNum(j, 'desplazados_expulsion');
      totalano += expulsados;
    }
    totalsuma += totalano;
    noStroke();

    //amarilla
    fill('#FCD116');
    rect(0, 0, width, height / 2);

    //azul
    fill('#003893');
    rect(0, height / 2, width, height);

    //Roja
    fill('#CE1126');
    console.log(totalano);

    rect(0, 300 - (totalano * (300 / 714185)), width, 500);
    fill(0, 0, 0);

    image(mapaCol, -1, 0);

    //textos
    textSize (30);
    text(ano, 80, 80);
    textSize (20);
    text("Total " + ano + ": " + totalano, 550, 320);
    text("Total historico: " + totalsuma, 550, 340);

    ano++;
    i++;
  }
  if (i == 25) {
    console.log('se acabó');
    fill('#FF0000');
    rect(botSegX, botSegY, botSegTam, botSegTam);
    i++;
    frameRate(30);
  }

  //SEGUNDA PARTE

  if (mouseIsPressed) {
    //ANTIOQUIA
    if (mouseX > botSegX && mouseX < botSegX + botSegTam && mouseY > botSegY && mouseY < botSegY + botSegTam) {
      background(240);
      for (var h = 0; h < 4; h++) {
        if (h == 0) {
          var familiaAnt = tablaEx.getNum(0, 'Jefatura Familiar');
          noStroke();
          //Verde Antioquia
          fill('#07892F');
          var fA = basFam - (familiaAnt * (fam / anti));
          rect(0, fA, 283, height);

        }

        if (h == 1) {
          var mayoresAnt = tablaEx.getNum(0, '18 a 45');
          noStroke();
          //Verde Antioquia
          fill('#07892F');
          var mA = basAdul - (mayoresAnt * (adul / anti));
          rect(285, mA, 217, height);
        }

        if (h == 2) {
          var adolecentesAnt = tablaEx.getNum(0, '7 a 13');
          noStroke();
          //Verde Antioquia
          fill('#07892F');
          var aA = basAdol - (adolecentesAnt * (adol / anti));
          rect(498, aA, 190, height);
        }

        if (h == 3) {
          var ninosAnt = tablaEx.getNum(0, '3 a 6');
          noStroke();
          //Verde Antioquia
          fill('#07892F');
          var nA = basNinos - (ninosAnt * (ninos / anti));
          rect(680, nA, 120, height);
        }
        image(imEdades, 0, 0);
textSize (14);
        text('Desplazados en Antioquia 2002', 380, 20);
        text('Familias', 130, 390);
        text('De 18 - 45 años', 320, 390);
        text('De 7 - 13 años', 520, 390);
        text('De 3 - 6 años', 700, 390);

        //Botón Bolivar
        fill('#FF0000');
        rect(botBoliX, botBoliY, botBoliTam, botBoliTam);
      }
    }
    //BOLIVAR
    if (mouseX > botBoliX && mouseX < botBoliX + botBoliTam && mouseY > botBoliY && mouseY < botBoliY + botBoliTam) {
      background(240);
      for (var j = 0; j < 4; j++) {
        if (j == 0) {
          var familiaBol = tablaEx.getNum(1, 'Jefatura Familiar');
          noStroke();
          //Amarillo Bolivar
          fill('#FCDD09');
          rect(0, iniFam, 283, height);
          //Verde Bolivar
          fill('#078930');
          rect(0, (iniFam + (fam * 0.33)), 283, height);
          //Rojo Bolivar
          fill('#DA121A');
          var fB = basFam - (familiaBol * (fam / boli));
          rect(0, fB, 283, height);

        }

        if (j == 1) {
          var mayoresBol = tablaEx.getNum(1, '18 a 45');
          noStroke();
          //Amarillo Bolivar
          fill('#FCDD09');
          rect(285, iniAdul, 217, height);
          //Verde Bolivar
          fill('#078930');
          rect(285, (iniAdul + (adul * 0.33)), 217, height);
          //Rojo Bolivar
          fill('#DA121A');
          var mB = basAdul - (mayoresBol * (adul / boli));
          rect(285, mB, 217, height);

        }

        if (j == 2) {
          var adolecentesBol = tablaEx.getNum(1, '7 a 13');
          noStroke();
          //Amarillo Bolivar
          fill('#FCDD09');
          rect(498, iniAdol, 190, height);
          //Verde Bolivar
          fill('#078930');
          rect(498, (iniAdol + (adol * 0.33)), 190, height);
          //Rojo Bolivar
          fill('#DA121A');
          var aB = basAdol - (adolecentesBol * (adol / boli));
          rect(498, aB, 190, height);
        }

        if (j == 3) {
          var ninosBol = tablaEx.getNum(1, '3 a 6');
          noStroke();
          //Amarillo Bolivar
          fill('#FCDD09');
          rect(680, iniNinos, 120, height);
          //Verde Bolivar
          fill('#078930');
          rect(680, (iniNinos + (ninos * 0.33)), 120, height);
          //Rojo Bolivar
          fill('#DA121A');
          var nB = basNinos - (ninosBol * (ninos / boli));
          rect(680, nB, 120, height);
        }

        image(imEdades, 0, 0);

        text('Desplazados en Bolivar 2002', 380, 20);
        text('Familias', 130, 390);
        text('De 18 - 45 años', 320, 390);
        text('De 7 - 13 años', 520, 390);
        text('De 3 - 6 años', 700, 390);

        //Botón BOGOTÁ
        fill('#FF0000');
        rect(botBogoX, botBogoY, botBogoTam, botBogoTam);
      }
    }
    //BOGOTÁ
    if (mouseX > botBogoX && mouseX < botBogoX + botBogoTam && mouseY > botBogoY && mouseY < botBogoY + botBogoTam) {
      background(240);

      for (var k = 0; k < 4; k++) {
        if (k == 0) {
          var familiaBog = tablaRec.getNum(0, 'Jefatura Familiar');
          noStroke();
          //Azul Cundinamarca
          fill('#87CEFF');
          rect(0, iniFam, 283, height);
          //Amarillo Cundinamarca
          fill('#FFD700');
          rect(0, (iniFam + (fam * 0.33)), 283, height);
          //Rojo Cundinamarca
          fill('#FF0000');
          var fC = basFam - (familiaBog * (fam / bogo));
          rect(0, fC, 283, height);
        }

        if (k == 1) {
          var mayoresBog = tablaRec.getNum(0, '18 a 45');
          noStroke();
          //Azul Cundinamarca
          fill('#87CEFF');
          rect(285, iniAdul, 217, height);
          //Amarillo Cundinamarca
          fill('#FFD700');
          rect(285, (iniAdul + (adul * 0.33)), 217, height);
          //Rojo Cundinamarca
          fill('#FF0000');
          var mC = basAdul - (mayoresBog * (adul / bogo));
          rect(285, mC, 217, height);
        }

        if (k == 2) {
          var adolecentesBog = tablaRec.getNum(0, '7 a 13');
          noStroke();
          //Azul Cundinamarca
          fill('#87CEFF');
          rect(498, iniAdol, 190, height);
          //Amarillo Cundinamarca
          fill('#FFD700');
          rect(498, (iniAdol + (adol * 0.33)), 190, height);
          //Rojo Cundinamarca
          fill('#FF0000');
          var aC = basAdol - (adolecentesBog * (adol / bogo));
          rect(498, aC, 190, height);
        }

        if (k == 3) {
          var ninosBog = tablaRec.getNum(0, '3 a 6');
          noStroke();
          //Azul Cundinamarca
          fill('#87CEFF');
          rect(680, iniNinos, 120, height);
          //Amarillo Cundinamarca
          fill('#FFD700');
          rect(680, (iniNinos + (ninos * 0.33)), 120, height);
          //Rojo Cundinamarca
          fill('#FF0000');
          var nC = basNinos - (ninosBog * (ninos / bogo));
          rect(680, nC, 120, height);
        }
        image(imEdades, 0, 0);

        text('Recibidos en Bogotá 2002', 380, 20);
        text('Familias', 130, 390);
        text('De 18 - 45 años', 320, 390);
        text('De 7 - 13 años', 520, 390);
        text('De 3 - 6 años', 700, 390);

        //Botón TERCERA PARTE
        fill('#FF0000');
        rect(botTerX, botTerY, botTerTam, botTerTam);
      }
    }
    //TERCERA PARTE
    if (mouseX > botTerX && mouseX < botTerX + botTerTam && mouseY > botTerY && mouseY < botTerY + botTerTam) {
      background(240);

      noStroke();

      //Amarilla 
      fill('#FCD116');
      rect(0, 0, width, height / 2);

      // Azul 
      fill('#003893');
      rect(0, height / 2, width, height);

      // Roja 
      fill('#CE1126');
      var tama = miTabla.getRowCount();


      // gráfica
      beginShape();
      vertex(0, height);
      vertex(0, 300);
      for (var v = 0; v < 25; v++) {
        var totala = 0;
        for (var m = v; m < tama; m += 25) {
          var expul = miTabla.getNum(m, 'desplazados_expulsion');
          totala += expul;
        }

        vertex(((width / 25) * v) + 10, 300 - (totala * (300 / 714185)));
        var tutu = 300 - (totala * (300 / 714185));
        console.log(tutu);
        ano++;
      }
      console.log('fin');
      vertex(width, 300);
      vertex(width, height);
      endShape(CLOSE);

      //Escribir los años en la parte inferior.
      textSize(12);
      fill(0);
      var an = 1993
      for (var t = 0; t < 25; t++) {
        text(an, ((width / 25) * t) + 3, 380);
        an++;
      }
    }
  }
}

function valorinicial() {
  var tam = miTabla.getRowCount();
  for (var j = 0; j < tam; j += 25) {
    var ex = miTabla.getNum(j, 'desplazados_expulsion');
    valori += ex;
  }
}
