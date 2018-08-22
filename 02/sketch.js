var e =30;
var w =20;

function setup() {
  createCanvas(700,700);
}

function draw() {
  background(252,251,246);
  stroke (66, 57, 39);
  fill (66, 57, 39);
 
  //block 1
  triangle (e, e, e, e+w, e+w, e+w); //line 1, row 1
  triangle (e+w, e, e+w, e+w, e+2*w, e+w);//line 1, row 2
  triangle (e+2*w, e, e+3*w, e, e+3*w, e+w); //line 1, row 3
  triangle (e+3*w, e, e+4*w, e, e+4*w, e+w) //line 1, row 4
  triangle (e+4*w, e, e+4*w, e+w, e+5*w, e+w); //line 1, row 5
  triangle (e+5*w, e, e+5*w, e+w, e+6*w, e+w); //line 1, row 6
  triangle (e+6*w, e, e+7*w, e, e+7*w, e+w); //line 1, row 7
  triangle (e+7*w, e, e+8*w, e, e+8*w, e+w); //line 1, row 8
  
  triangle (e, e+w, e, e+2*w, e+w, e+2*w); //line 2, row 1
  triangle (e+w, e+w, e+2*w, e+w, e+2*w, e+2*w); //line 2, row 2
  triangle (e+2*w, e+w, e+3*w, e+w, e+3*w, e+2*w); //line 2, row 3
  triangle (e+3*w, e+w, e+3*w, e+2*w, e+4*w, e+2*w) //line 2, row 4
  triangle (e+4*w, e+w, e+4*w, e+2*w, e+5*w, e+2*w) //line 2, row 5
  triangle (e+5*w, e+w, e+6*w, e+w, e+6*w, e+2*w); //line 2, row 6
  triangle (e+6*w, e+w, e+7*w, e+w, e+7*w, e+2*w) //line 2, row 8
  triangle (e+7*w, e+w, e+7*w, e+2*w, e+8*w, e+2*w) //line 2, row 8
  
  triangle (e, e+2*w, e+w, e+2*w, e+w, e+3*w) //line 3, row 1
  triangle (e+w, e+2*w, e+2*w, e+2*w, e+2*w, e+3*w); //line 3, row 2
  triangle (e+2*w, e+2*w, e+2*w, e+3*w, e+3*w, e+3*w)
  triangle (e+3*w, e+2*w, e+3*w, e+3*w, e+4*w, e+3*w)
  triangle (e+4*w, e+2*w, e+5*w, e+2*w, e+5*w, e+3*w) //line 3, row 5
  triangle (e+5*w, e+2*w, e+6*w, e+2*w, e+6*w, e+3*w); //line 3, row 6 1
  triangle (e+6*w, e+2*w, e+6*w, e+3*w, e+7*w, e+3*w)
  triangle (e+7*w, e+2*w, e+7*w, e+3*w, e+8*w, e+3*w)
  
  triangle (e, e+3*w, e+w, e+3*w, e+w, e+4*w) //line 4, row 1
  triangle (e+w, e+3*w, e+w, e+4*w, e+2*w, e+4*w);
  triangle (e+2*w, e+3*w, e+2*w, e+4*w, e+3*w, e+4*w);
  triangle (e+3*w, e+3*w, e+4*w, e+3*w, e+4*w, e+4*w);
  triangle (e+4*w, e+3*w, e+5*w, e+3*w, e+5*w, e+4*w);
  triangle (e+5*w, e+3*w, e+5*w, e+4*w, e+6*w, e+4*w);
  triangle (e+6*w, e+3*w, e+6*w, e+4*w, e+7*w, e+4*w);
  triangle (e+7*w, e+3*w, e+8*w, e+3*w, e+8*w, e+4*w)
  
  triangle (e, e+4*w, e, e+5*w, e+w, e+5*w); ///line 5 row 1
  triangle (e+w, e+4*w, e+w, e+5*w, e+2*w, e+5*w);//line 5, row 2
  triangle (e+2*w, e+4*w, e+3*w, e+4*w, e+3*w, e+5*w); //line 5, row 3
  triangle (e+3*w, e+4*w, e+4*w, e+4*w, e+4*w, e+5*w) //line 5, row 4
  triangle (e+4*w, e+4*w, e+4*w, e+5*w, e+5*w, e+5*w); //line 5, row 5
  triangle (e+5*w, e+4*w, e+5*w, e+5*w, e+6*w, e+5*w); //line 5, row 6
  triangle (e+6*w, e+4*w, e+7*w, e+4*w, e+7*w, e+5*w); //line 5, row 7
  triangle (e+7*w, e+4*w, e+8*w, e+4*w, e+8*w, e+5*w); //line 5, row 8
  
  triangle (e, e+5*w, e, e+6*w, e+w, e+6*w); //line 6, row 1
  triangle (e+w, e+5*w, e+2*w, e+5*w, e+2*w, e+6*w); //line 6, row 2
  triangle (e+2*w, e+5*w, e+3*w, e+5*w, e+3*w, e+6*w); //line 6, row 3
  triangle (e+3*w, e+5*w, e+3*w, e+6*w, e+4*w, e+6*w) //line 6, row 4
  triangle (e+4*w, e+5*w, e+4*w, e+6*w, e+5*w, e+6*w) //line 6, row 5
  triangle (e+5*w, e+5*w, e+6*w, e+5*w, e+6*w, e+6*w); //line 6, row 6
  triangle (e+6*w, e+5*w, e+7*w, e+5*w, e+7*w, e+6*w) //line 6, row 7
  triangle (e+7*w, e+5*w, e+7*w, e+6*w, e+8*w, e+6*w) //line 6, row 8
  
  triangle (e, e+6*w, e+w, e+6*w, e+w, e+7*w) //line 7, row 1
  triangle (e+w, e+6*w, e+2*w, e+6*w, e+2*w, e+7*w); //line 7, row 2
  triangle (e+2*w, e+6*w, e+2*w, e+7*w, e+3*w, e+7*w)
  triangle (e+3*w, e+6*w, e+3*w, e+7*w, e+4*w, e+7*w)
  triangle (e+4*w, e+6*w, e+5*w, e+6*w, e+5*w, e+7*w) //line 7, row 5
  triangle (e+5*w, e+6*w, e+6*w, e+6*w, e+6*w, e+7*w); //line 7, row 6 
  triangle (e+6*w, e+6*w, e+6*w, e+7*w, e+7*w, e+7*w)
  triangle (e+7*w, e+6*w, e+7*w, e+7*w, e+8*w, e+7*w)
  
  triangle (e, e+7*w, e+w, e+7*w, e+w, e+8*w) //line 8, row 1
  triangle (e+w, e+7*w, e+w, e+8*w, e+2*w, e+8*w);
  triangle (e+2*w, e+7*w, e+2*w, e+8*w, e+3*w, e+8*w);
  triangle (e+3*w, e+7*w, e+4*w, e+7*w, e+4*w, e+8*w);
  triangle (e+4*w, e+7*w, e+5*w, e+7*w, e+5*w, e+8*w);
  triangle (e+5*w, e+7*w, e+5*w, e+8*w, e+6*w, e+8*w);
  triangle (e+6*w, e+7*w, e+6*w, e+8*w, e+7*w, e+8*w);
  triangle (e+7*w, e+7*w, e+8*w, e+7*w, e+8*w, e+8*w)
  
  //block 2//
  
  triangle (e+8*w, e+w, e+9*w, e, e+9*w, e+w); //line 1 row 9
  triangle (e+9*w, e+w, e+10*w, e, e+10*w, e+w); // line 1 row 10
  triangle (e+10*w, e, e+10*w, e+w, e+11*w, e); // row 11
  triangle (e+11*w, e, e+11*w, e+w, e+12*w, e); //row 12
  triangle (e+12*w, e+w, e+13*w, e, e+13*w, e+w); //row 13
  triangle (e+13*w, e+w, e+14*w, e, e+14*w, e+w); //row 14
  triangle (e+14*w, e, e+14*w, e+w, e+15*w, e); //row 15
  triangle (e+15*w, e, e+15*w, e+w, e+16*w, e); //row 16
  
  triangle (e+8*w, e+w, e+8*w, e+2*w, e+9*w, e+w); // line 2 row 9
  triangle (e+9*w, e+2*w, e+10*w, e+w, e+10*w, e+2*w);
  triangle (e+10*w, e+2*w, e+11*w, e+w, e+11*w, e+2*w);
  triangle (e+11*w, e+w, e+11*w, e+2*w, e+12*w, e+w); //row 12
  triangle (e+12*w, e+w, e+12*w, e+2*w, e+13*w, e+w); //row 13
  triangle (e+13*w, e+2*w, e+14*w, e+w, e+14*w, e+2*w); //row 14
  triangle (e+14*w, e+2*w, e+15*w, e+w, e+15*w, e+2*w); //row 15
  triangle (e+15*w, e+w, e+15*w, e+2*w, e+16*w, e+w); //row 16
  
  triangle (e+8*w, e+2*w, e+8*w, e+3*w, e+9*w, e+2*w); // line 3 row 9
  triangle (e+9*w, e+2*w, e+9*w, e+3*w, e+10*w, e+2*w); // line 3 row 10
  triangle (e+10*w, e+3*w, e+11*w, e+2*w, e+11*w, e+3*w);
  triangle (e+11*w, e+3*w, e+12*w, e+2*w, e+12*w, e+3*w); //row 12
  triangle (e+12*w, e+2*w, e+12*w, e+3*w, e+13*w, e+2*w); //row 13
  triangle (e+13*w, e+2*w, e+13*w, e+3*w, e+14*w, e+2*w); //row 14
  triangle (e+14*w, e+3*w, e+15*w, e+2*w, e+15*w, e+3*w); //row 15
  triangle (e+15*w, e+3*w, e+16*w, e+2*w, e+16*w, e+3*w); //row 16
  
  triangle (e+8*w, e+4*w, e+9*w, e+3*w, e+9*w, e+4*w); // line 4 row 9
  triangle (e+9*w, e+3*w, e+9*w, e+4*w, e+10*w, e+3*w); // line 4 row 10
  triangle (e+10*w, e+3*w, e+10*w, e+4*w, e+11*w, e+3*w);
  triangle (e+11*w, e+4*w, e+12*w, e+3*w, e+12*w, e+4*w); //row 12
  triangle (e+12*w, e+4*w, e+13*w, e+3*w, e+13*w, e+4*w); //row 13
  triangle (e+13*w, e+3*w, e+13*w, e+4*w, e+14*w, e+3*w); //row 14
  triangle (e+14*w, e+3*w, e+14*w, e+4*w, e+15*w, e+3*w); //row 15
  triangle (e+15*w, e+4*w, e+16*w, e+3*w, e+16*w, e+4*w); //row 16
  
  triangle (e+8*w, e+5*w, e+9*w, e+4*w, e+9*w, e+5*w); //line 5 row 9 e+w = e+5w
  triangle (e+9*w, e+5*w, e+10*w, e+4*w, e+10*w, e+5*w); // line 5 row 10
  triangle (e+10*w, e+4*w, e+10*w, e+5*w, e+11*w, e+4*w); // row 11
  triangle (e+11*w, e+4*w, e+11*w, e+5*w, e+12*w, e+4*w); //row 12
  triangle (e+12*w, e+5*w, e+13*w, e+4*w, e+13*w, e+5*w); //row 13
  triangle (e+13*w, e+5*w, e+14*w, e+4*w, e+14*w, e+5*w); //row 14
  triangle (e+14*w, e+4*w, e+14*w, e+5*w, e+15*w, e+4*w); //row 15
  triangle (e+15*w, e+4*w, e+15*w, e+5*w, e+16*w, e+4*w); //row 16
  
  triangle (e+8*w, e+5*w, e+8*w, e+6*w, e+9*w, e+5*w); // line 6 row 9
  triangle (e+9*w, e+6*w, e+10*w, e+5*w, e+10*w, e+6*w);
  triangle (e+10*w, e+6*w, e+11*w, e+5*w, e+11*w, e+6*w);
  triangle (e+11*w, e+5*w, e+11*w, e+6*w, e+12*w, e+5*w); //row 12
  triangle (e+12*w, e+5*w, e+12*w, e+6*w, e+13*w, e+5*w); //row 13
  triangle (e+13*w, e+6*w, e+14*w, e+5*w, e+14*w, e+6*w); //row 14
  triangle (e+14*w, e+6*w, e+15*w, e+5*w, e+15*w, e+6*w); //row 15
  triangle (e+15*w, e+5*w, e+15*w, e+6*w, e+16*w, e+5*w); //row 16
  
  triangle (e+8*w, e+6*w, e+8*w, e+7*w, e+9*w, e+6*w); // line 7 row 9
  triangle (e+9*w, e+6*w, e+9*w, e+7*w, e+10*w, e+6*w); // line 7 row 10
  triangle (e+10*w, e+7*w, e+11*w, e+6*w, e+11*w, e+7*w);
  triangle (e+11*w, e+7*w, e+12*w, e+6*w, e+12*w, e+7*w); //row 12
  triangle (e+12*w, e+6*w, e+12*w, e+7*w, e+13*w, e+6*w); //row 13
  triangle (e+13*w, e+6*w, e+13*w, e+7*w, e+14*w, e+6*w); //row 14
  triangle (e+14*w, e+7*w, e+15*w, e+6*w, e+15*w, e+7*w); //row 15
  triangle (e+15*w, e+7*w, e+16*w, e+6*w, e+16*w, e+7*w); //row 16
  
  triangle (e+8*w, e+8*w, e+9*w, e+7*w, e+9*w, e+8*w); // line 8 row 9
  triangle (e+9*w, e+7*w, e+9*w, e+8*w, e+10*w, e+7*w); // line 8 row 10
  triangle (e+10*w, e+7*w, e+10*w, e+8*w, e+11*w, e+7*w);
  triangle (e+11*w, e+8*w, e+12*w, e+7*w, e+12*w, e+8*w); //row 12
  triangle (e+12*w, e+8*w, e+13*w, e+7*w, e+13*w, e+8*w); //row 13
  triangle (e+13*w, e+7*w, e+13*w, e+8*w, e+14*w, e+7*w); //row 14
  triangle (e+14*w, e+7*w, e+14*w, e+8*w, e+15*w, e+7*w); //row 15
  triangle (e+15*w, e+8*w, e+16*w, e+7*w, e+16*w, e+8*w); //row 16
  
  
  //block3//
  triangle (e+16*w, e, e+16*w, e+w, e+17*w, e+w); //line 1 row 16 e=16
  triangle (e+17*w, e, e+17*w, e+w, e+18*w, e+w);
  triangle (e+18*w, e, e+19*w, e, e+19*w, e+w); //line 1, row 18
  triangle (e+19*w, e, e+20*w, e, e+20*w, e+w); //line 1, row 19
  triangle (e+20*w, e, e+20*w, e+w, e+21*w, e+w);
  triangle (e+21*w, e, e+21*w, e+w, e+22*w, e+w);
  triangle (e+22*w, e, e+23*w, e, e+23*w, e+w); //line 1, row 22
  triangle (e+23*w, e, e+24*w, e, e+24*w, e+w); //line 1, row 23
  
  triangle (e+16*w, e+w, e+16*w, e+2*w, e+17*w, e+2*w); //line 2, row 16
  triangle (e+17*w, e+w, e+18*w, e+w, e+18*w, e+2*w); //line 2, row 17
  triangle (e+18*w, e+w, e+19*w, e+w, e+19*w, e+2*w); //line 2, row 18
  triangle (e+19*w, e+w, e+19*w, e+2*w, e+20*w, e+2*w); //line 2, row 19
  triangle (e+20*w, e+w, e+20*w, e+2*w, e+21*w, e+2*w); //line 2, row 20
  triangle (e+21*w, e+w, e+22*w, e+w, e+22*w, e+2*w); //line 2, row 21
  triangle (e+22*w, e+w, e+23*w, e+w, e+23*w, e+2*w); //line 2, row 22
  triangle (e+23*w, e+w, e+23*w, e+2*w, e+24*w, e+2*w); //line 2, row 23
  
  triangle (e+16*w, e+2*w, e+17*w, e+2*w, e+17*w, e+3*w); //line 3, row 16
  triangle (e+17*w, e+2*w, e+18*w, e+2*w, e+18*w, e+3*w); //line 3, row 17
  triangle (e+18*w, e+2*w, e+18*w, e+3*w, e+19*w, e+3*w);
  triangle (e+19*w, e+2*w, e+19*w, e+3*w, e+20*w, e+3*w);
  triangle (e+20*w, e+2*w, e+21*w, e+2*w, e+21*w, e+3*w); //line 3, row 20
  triangle (e+21*w, e+2*w, e+22*w, e+2*w, e+22*w, e+3*w); //line 3, row 21
  triangle (e+22*w, e+2*w, e+22*w, e+3*w, e+23*w, e+3*w);
  triangle (e+23*w, e+2*w, e+23*w, e+3*w, e+24*w, e+3*w);
  
  triangle (e+16*w, e+3*w, e+17*w, e+3*w, e+17*w, e+4*w) //line 4, row 16
  triangle (e+17*w, e+3*w, e+17*w, e+4*w, e+18*w, e+4*w);
  triangle (e+18*w, e+3*w, e+18*w, e+4*w, e+19*w, e+4*w);
  triangle (e+19*w, e+3*w, e+20*w, e+3*w, e+20*w, e+4*w);
  triangle (e+20*w, e+3*w, e+21*w, e+3*w, e+21*w, e+4*w);
  triangle (e+21*w, e+3*w, e+21*w, e+4*w, e+22*w, e+4*w);
  triangle (e+22*w, e+3*w, e+22*w, e+4*w, e+23*w, e+4*w);
  triangle (e+23*w, e+3*w, e+24*w, e+3*w, e+24*w, e+4*w);
  
 triangle (e+16*w, e+4*w, e+16*w, e+5*w, e+17*w, e+5*w); //line 5 row 16 Y e=4*w
  triangle (e+17*w, e+4*w, e+17*w, e+5*w, e+18*w, e+5*w);
  triangle (e+18*w, e+4*w, e+19*w, e+4*w, e+19*w, e+5*w); //line 5, row 18
  triangle (e+19*w, e+4*w, e+20*w, e+4*w, e+20*w, e+5*w); //line 5, row 19
  triangle (e+20*w, e+4*w, e+20*w, e+5*w, e+21*w, e+5*w);
  triangle (e+21*w, e+4*w, e+21*w, e+5*w, e+22*w, e+5*w);
  triangle (e+22*w, e+4*w, e+23*w, e+4*w, e+23*w, e+5*w); //line 5, row 22
  triangle (e+23*w, e+4*w, e+24*w, e+4*w, e+24*w, e+5*w); //line 5, row 23
  
  triangle (e+16*w, e+5*w, e+16*w, e+6*w, e+17*w, e+6*w); //line 6, row 16
  triangle (e+17*w, e+5*w, e+18*w, e+5*w, e+18*w, e+6*w); //line 6, row 17
  triangle (e+18*w, e+5*w, e+19*w, e+5*w, e+19*w, e+6*w); //line 6, row 18
  triangle (e+19*w, e+5*w, e+19*w, e+6*w, e+20*w, e+6*w); //line 6, row 19
  triangle (e+20*w, e+5*w, e+20*w, e+6*w, e+21*w, e+6*w); //line 6, row 20
  triangle (e+21*w, e+5*w, e+22*w, e+5*w, e+22*w, e+6*w); //line 6, row 21
  triangle (e+22*w, e+5*w, e+23*w, e+5*w, e+23*w, e+6*w); //line 6, row 22
  triangle (e+23*w, e+5*w, e+23*w, e+6*w, e+24*w, e+6*w); //line 6, row 23
  
  triangle (e+16*w, e+6*w, e+17*w, e+6*w, e+17*w, e+7*w); //line 7, row 16
  triangle (e+17*w, e+6*w, e+18*w, e+6*w, e+18*w, e+7*w); //line 7, row 17
  triangle (e+18*w, e+6*w, e+18*w, e+7*w, e+19*w, e+7*w);
  triangle (e+19*w, e+6*w, e+19*w, e+7*w, e+20*w, e+7*w);
  triangle (e+20*w, e+6*w, e+21*w, e+6*w, e+21*w, e+7*w); //line 7, row 20
  triangle (e+21*w, e+6*w, e+22*w, e+6*w, e+22*w, e+7*w); //line 7, row 21
  triangle (e+22*w, e+6*w, e+22*w, e+7*w, e+23*w, e+7*w);
  triangle (e+23*w, e+6*w, e+23*w, e+7*w, e+24*w, e+7*w);
  
  triangle (e+16*w, e+7*w, e+17*w, e+7*w, e+17*w, e+8*w) //line 8, row 16
  triangle (e+17*w, e+7*w, e+17*w, e+8*w, e+18*w, e+8*w);
  triangle (e+18*w, e+7*w, e+18*w, e+8*w, e+19*w, e+8*w);
  triangle (e+19*w, e+7*w, e+20*w, e+7*w, e+20*w, e+8*w);
  triangle (e+20*w, e+7*w, e+21*w, e+7*w, e+21*w, e+8*w);
  triangle (e+21*w, e+7*w, e+21*w, e+8*w, e+22*w, e+8*w);
  triangle (e+22*w, e+7*w, e+22*w, e+8*w, e+23*w, e+8*w);
  triangle (e+23*w, e+7*w, e+24*w, e+7*w, e+24*w, e+8*w);
  
    //block 4
  triangle (e+24*w, e+w, e+25*w, e, e+25*w, e+w); //line 1 row 24 8w= 24
  triangle (e+25*w, e+w, e+26*w, e, e+26*w, e+w); // line 1 row 25
  triangle (e+26*w, e, e+26*w, e+w, e+27*w, e); // row 26
  triangle (e+27*w, e, e+27*w, e+w, e+28*w, e); //row 27
  triangle (e+28*w, e+w, e+29*w, e, e+29*w, e+w); //row 28
  triangle (e+29*w, e+w, e+30*w, e, e+30*w, e+w); //row 29
  triangle (e+30*w, e, e+30*w, e+w, e+31*w, e); //row 30
  triangle (e+31*w, e, e+31*w, e+w, e+32*w, e); //row 21
  
  triangle (e+24*w, e+w, e+24*w, e+2*w, e+25*w, e+w); // line 2 row 24
  triangle (e+25*w, e+2*w, e+26*w, e+w, e+26*w, e+2*w);
  triangle (e+26*w, e+2*w, e+27*w, e+w, e+27*w, e+2*w);
  triangle (e+27*w, e+w, e+27*w, e+2*w, e+28*w, e+w); //row 27
  triangle (e+28*w, e+w, e+28*w, e+2*w, e+29*w, e+w); //row 28
  triangle (e+29*w, e+2*w, e+30*w, e+w, e+30*w, e+2*w); //row 29
  triangle (e+30*w, e+2*w, e+31*w, e+w, e+31*w, e+2*w); //row 30
  triangle (e+31*w, e+w, e+31*w, e+2*w, e+32*w, e+w); //row 31
  
  triangle (e+24*w, e+2*w, e+24*w, e+3*w, e+25*w, e+2*w); // line 3 row 24
  triangle (e+25*w, e+2*w, e+25*w, e+3*w, e+26*w, e+2*w); // line 3 row 25
  triangle (e+26*w, e+3*w, e+27*w, e+2*w, e+27*w, e+3*w);
  triangle (e+27*w, e+3*w, e+28*w, e+2*w, e+28*w, e+3*w); //row 27
  triangle (e+28*w, e+2*w, e+28*w, e+3*w, e+29*w, e+2*w); //row 28
  triangle (e+29*w, e+2*w, e+29*w, e+3*w, e+30*w, e+2*w); //row 29
  triangle (e+30*w, e+3*w, e+31*w, e+2*w, e+31*w, e+3*w); //row 30
  triangle (e+31*w, e+3*w, e+32*w, e+2*w, e+32*w, e+3*w); //row 31
  
  triangle (e+24*w, e+4*w, e+25*w, e+3*w, e+25*w, e+4*w); // line 4 row 24
  triangle (e+25*w, e+3*w, e+25*w, e+4*w, e+26*w, e+3*w); // line 4 row 25
  triangle (e+26*w, e+3*w, e+26*w, e+4*w, e+27*w, e+3*w);
  triangle (e+27*w, e+4*w, e+28*w, e+3*w, e+28*w, e+4*w); //row 27
  triangle (e+28*w, e+4*w, e+29*w, e+3*w, e+29*w, e+4*w); //row 28
  triangle (e+29*w, e+3*w, e+29*w, e+4*w, e+30*w, e+3*w); //row 29
  triangle (e+30*w, e+3*w, e+30*w, e+4*w, e+31*w, e+3*w); //row 30
  triangle (e+31*w, e+4*w, e+32*w, e+3*w, e+32*w, e+4*w); //row 31
  
  triangle (e+24*w, e+5*w, e+25*w, e+4*w, e+25*w, e+5*w); //line 5 row 24
  triangle (e+25*w, e+5*w, e+26*w, e+4*w, e+26*w, e+5*w); // line 5 row 25
  triangle (e+26*w, e+4*w, e+26*w, e+5*w, e+27*w, e+4*w); // row 26
  triangle (e+27*w, e+4*w, e+27*w, e+5*w, e+28*w, e+4*w); //row 27
  triangle (e+28*w, e+5*w, e+29*w, e+4*w, e+29*w, e+5*w); //row 28
  triangle (e+29*w, e+5*w, e+30*w, e+4*w, e+30*w, e+5*w); //row 29
  triangle (e+30*w, e+4*w, e+30*w, e+5*w, e+31*w, e+4*w); //row 30
  triangle (e+31*w, e+4*w, e+31*w, e+5*w, e+32*w, e+4*w); //row 31
  
  triangle (e+24*w, e+5*w, e+24*w, e+6*w, e+25*w, e+5*w); // line 6 row 24
  triangle (e+25*w, e+6*w, e+26*w, e+5*w, e+26*w, e+6*w);
  triangle (e+26*w, e+6*w, e+27*w, e+5*w, e+27*w, e+6*w);
  triangle (e+27*w, e+5*w, e+27*w, e+6*w, e+28*w, e+5*w); //row 27
  triangle (e+28*w, e+5*w, e+28*w, e+6*w, e+29*w, e+5*w); //row 28
  triangle (e+29*w, e+6*w, e+30*w, e+5*w, e+30*w, e+6*w); //row 29
  triangle (e+30*w, e+6*w, e+31*w, e+5*w, e+31*w, e+6*w); //row 30
  triangle (e+31*w, e+5*w, e+31*w, e+6*w, e+32*w, e+5*w); //row 31
  
  triangle (e+24*w, e+6*w, e+24*w, e+7*w, e+25*w, e+6*w); // line 7 row 24
  triangle (e+25*w, e+6*w, e+25*w, e+7*w, e+26*w, e+6*w); // line 7 row 25
  triangle (e+26*w, e+7*w, e+27*w, e+6*w, e+27*w, e+7*w);
  triangle (e+27*w, e+7*w, e+28*w, e+6*w, e+28*w, e+7*w); //row 27
  triangle (e+28*w, e+6*w, e+28*w, e+7*w, e+29*w, e+6*w); //row 28
  triangle (e+29*w, e+6*w, e+29*w, e+7*w, e+30*w, e+6*w); //row 29
  triangle (e+30*w, e+7*w, e+31*w, e+6*w, e+31*w, e+7*w); //row 30
  triangle (e+31*w, e+7*w, e+32*w, e+6*w, e+32*w, e+7*w); //row 31
  
  triangle (e+24*w, e+8*w, e+25*w, e+7*w, e+25*w, e+8*w); // line 8 row 24
  triangle (e+25*w, e+7*w, e+25*w, e+8*w, e+26*w, e+7*w); // line 8 row 25
  triangle (e+26*w, e+7*w, e+26*w, e+8*w, e+27*w, e+7*w);
  triangle (e+27*w, e+8*w, e+28*w, e+7*w, e+28*w, e+8*w); //row 27
  triangle (e+28*w, e+8*w, e+29*w, e+7*w, e+29*w, e+8*w); //row 28
  triangle (e+29*w, e+7*w, e+29*w, e+8*w, e+30*w, e+7*w); //row 29
  triangle (e+30*w, e+7*w, e+30*w, e+8*w, e+31*w, e+7*w); //row 30
  triangle (e+31*w, e+8*w, e+32*w, e+7*w, e+32*w, e+8*w); //row 31
  
  //block 9
  triangle (e, e+16*w, e, e+17*w, e+w, e+17*w); //line 16, row 1 y e-16
  triangle (e+w, e+16*w, e+w, e+17*w, e+2*w, e+17*w);//line 16, row 2
  triangle (e+2*w, e+16*w, e+3*w, e+16*w, e+3*w, e+17*w); //line 16, row 3
  triangle (e+3*w, e+16*w, e+4*w, e+16*w, e+4*w, e+17*w) //line 16, row 4
  triangle (e+4*w, e+16*w, e+4*w, e+17*w, e+5*w, e+17*w); //line 16, row 5
  triangle (e+5*w, e+16*w, e+5*w, e+17*w, e+6*w, e+17*w); //line 16, row 6
  triangle (e+6*w, e+16*w, e+7*w, e+16*w, e+7*w, e+17*w); //line 16, row 7
  triangle (e+7*w, e+16*w, e+8*w, e+16*w, e+8*w, e+17*w); //line 16, row 8
  
  triangle (e, e+17*w, e, e+18*w, e+w, e+18*w); //line 17, row 1
  triangle (e+w, e+17*w, e+2*w, e+17*w, e+2*w, e+18*w); //line 17, row 2
  triangle (e+2*w, e+17*w, e+3*w, e+17*w, e+3*w, e+18*w); //line 17, row 3
  triangle (e+3*w, e+17*w, e+3*w, e+18*w, e+4*w, e+18*w) //line 17, row 4
  triangle (e+4*w, e+17*w, e+4*w, e+18*w, e+5*w, e+18*w) //line 17, row 5
  triangle (e+5*w, e+17*w, e+6*w, e+17*w, e+6*w, e+18*w); //line 17, row 6
  triangle (e+6*w, e+17*w, e+7*w, e+17*w, e+7*w, e+18*w) //line 17, row 8
  triangle (e+7*w, e+17*w, e+7*w, e+18*w, e+8*w, e+18*w) //line 17, row 8
  
  triangle (e, e+18*w, e+w, e+18*w, e+w, e+19*w) //line 18, row 1
  triangle (e+w, e+18*w, e+2*w, e+18*w, e+2*w, e+19*w); //line 18, row 2
  triangle (e+2*w, e+18*w, e+2*w, e+19*w, e+3*w, e+19*w)
  triangle (e+3*w, e+18*w, e+3*w, e+19*w, e+4*w, e+19*w)
  triangle (e+4*w, e+18*w, e+5*w, e+18*w, e+5*w, e+19*w) //line 18, row 5
  triangle (e+5*w, e+18*w, e+6*w, e+18*w, e+6*w, e+19*w); //line 18, row 6 1
  triangle (e+6*w, e+18*w, e+6*w, e+19*w, e+7*w, e+19*w)
  triangle (e+7*w, e+18*w, e+7*w, e+19*w, e+8*w, e+19*w)
  
  triangle (e, e+19*w, e+w, e+19*w, e+w, e+20*w) //line 19, row 1
  triangle (e+w, e+19*w, e+w, e+20*w, e+2*w, e+20*w);
  triangle (e+2*w, e+19*w, e+2*w, e+20*w, e+3*w, e+20*w);
  triangle (e+3*w, e+19*w, e+4*w, e+19*w, e+4*w, e+20*w);
  triangle (e+4*w, e+19*w, e+5*w, e+19*w, e+5*w, e+20*w);
  triangle (e+5*w, e+19*w, e+5*w, e+20*w, e+6*w, e+20*w);
  triangle (e+6*w, e+19*w, e+6*w, e+20*w, e+7*w, e+20*w);
  triangle (e+7*w, e+19*w, e+8*w, e+19*w, e+8*w, e+20*w)
  
  triangle (e, e+20*w, e, e+21*w, e+w, e+21*w); ///line 20 row 1
  triangle (e+w, e+20*w, e+w, e+21*w, e+2*w, e+21*w);//line 20, row 2
  triangle (e+2*w, e+20*w, e+3*w, e+20*w, e+3*w, e+21*w); //line 20, row 3
  triangle (e+3*w, e+20*w, e+4*w, e+20*w, e+4*w, e+21*w) //line 20, row 4
  triangle (e+4*w, e+20*w, e+4*w, e+21*w, e+5*w, e+21*w); //line 20, row 5
  triangle (e+5*w, e+20*w, e+5*w, e+21*w, e+6*w, e+21*w); //line 20, row 6
  triangle (e+6*w, e+20*w, e+7*w, e+20*w, e+7*w, e+21*w); //line 20, row 7
  triangle (e+7*w, e+20*w, e+8*w, e+20*w, e+8*w, e+21*w); //line 20, row 8
  
  triangle (e, e+21*w, e, e+22*w, e+w, e+22*w); //line 21, row 1
  triangle (e+w, e+21*w, e+2*w, e+21*w, e+2*w, e+22*w); //line 21, row 2
  triangle (e+2*w, e+21*w, e+3*w, e+21*w, e+3*w, e+22*w); //line 21, row 3
  triangle (e+3*w, e+21*w, e+3*w, e+22*w, e+4*w, e+22*w) //line 21, row 4
  triangle (e+4*w, e+21*w, e+4*w, e+22*w, e+5*w, e+22*w) //line 21, row 5
  triangle (e+5*w, e+21*w, e+6*w, e+21*w, e+6*w, e+22*w); //line 21, row 6
  triangle (e+6*w, e+21*w, e+7*w, e+21*w, e+7*w, e+22*w) //line 21, row 7
  triangle (e+7*w, e+21*w, e+7*w, e+22*w, e+8*w, e+22*w) //line 21, row 8
  
  triangle (e, e+22*w, e+w, e+22*w, e+w, e+23*w) //line 22, row 1
  triangle (e+w, e+22*w, e+2*w, e+22*w, e+2*w, e+23*w); //line 22, row 2
  triangle (e+2*w, e+22*w, e+2*w, e+23*w, e+3*w, e+23*w)
  triangle (e+3*w, e+22*w, e+3*w, e+23*w, e+4*w, e+23*w)
  triangle (e+4*w, e+22*w, e+5*w, e+22*w, e+5*w, e+23*w) //line 22, row 5
  triangle (e+5*w, e+22*w, e+6*w, e+22*w, e+6*w, e+23*w); //line 22, row 6 
  triangle (e+6*w, e+22*w, e+6*w, e+23*w, e+7*w, e+23*w)
  triangle (e+7*w, e+22*w, e+7*w, e+23*w, e+8*w, e+23*w)
  
  triangle (e, e+23*w, e+w, e+23*w, e+w, e+24*w) //line 23, row 1
  triangle (e+w, e+23*w, e+w, e+24*w, e+2*w, e+24*w);
  triangle (e+2*w, e+23*w, e+2*w, e+24*w, e+3*w, e+24*w);
  triangle (e+3*w, e+23*w, e+4*w, e+23*w, e+4*w, e+24*w);
  triangle (e+4*w, e+23*w, e+5*w, e+23*w, e+5*w, e+24*w);
  triangle (e+5*w, e+23*w, e+5*w, e+24*w, e+6*w, e+24*w);
  triangle (e+6*w, e+23*w, e+6*w, e+24*w, e+7*w, e+24*w);
  triangle (e+7*w, e+23*w, e+8*w, e+23*w, e+8*w, e+24*w)
  
  
  //yellow
  stroke (245, 187, 40);
  fill (245, 187, 40);
  
  //block 10
  triangle (e+8*w, e+17*w, e+9*w, e+16*w, e+9*w, e+17*w); //line 16 row 9
  triangle (e+9*w, e+17*w, e+10*w, e+16*w, e+10*w, e+17*w); // line 16 row 10
  triangle (e+10*w, e+16*w, e+10*w, e+17*w, e+11*w, e+16*w); // row 11
  triangle (e+11*w, e+16*w, e+11*w, e+17*w, e+12*w, e+16*w); //row 12
  triangle (e+12*w, e+17*w, e+13*w, e+16*w, e+13*w, e+17*w); //row 13
  triangle (e+13*w, e+17*w, e+14*w, e+16*w, e+14*w, e+17*w); //row 14
  triangle (e+14*w, e+16*w, e+14*w, e+17*w, e+15*w, e+16*w); //row 15
  triangle (e+15*w, e+16*w, e+15*w, e+17*w, e+16*w, e+16*w); //row 16
  
  triangle (e+8*w, e+17*w, e+8*w, e+18*w, e+9*w, e+17*w); // line 17 row 9
  triangle (e+9*w, e+18*w, e+10*w, e+17*w, e+10*w, e+18*w);
  triangle (e+10*w, e+18*w, e+11*w, e+17*w, e+11*w, e+18*w);
  triangle (e+11*w, e+17*w, e+11*w, e+18*w, e+12*w, e+17*w); //row 12
  triangle (e+12*w, e+17*w, e+12*w, e+18*w, e+13*w, e+17*w); //row 13
  triangle (e+13*w, e+18*w, e+14*w, e+17*w, e+14*w, e+18*w); //row 14
  triangle (e+14*w, e+18*w, e+15*w, e+17*w, e+15*w, e+18*w); //row 15
  triangle (e+15*w, e+17*w, e+15*w, e+18*w, e+16*w, e+17*w); //row 16
  
  triangle (e+8*w, e+18*w, e+8*w, e+19*w, e+9*w, e+18*w); // line 18 row 9
  triangle (e+9*w, e+18*w, e+9*w, e+19*w, e+10*w, e+18*w); // line 18 row 10
  triangle (e+10*w, e+19*w, e+11*w, e+18*w, e+11*w, e+19*w);
  triangle (e+11*w, e+19*w, e+12*w, e+18*w, e+12*w, e+19*w); //row 12
  triangle (e+12*w, e+18*w, e+12*w, e+19*w, e+13*w, e+18*w); //row 13
  triangle (e+13*w, e+18*w, e+13*w, e+19*w, e+14*w, e+18*w); //row 14
  triangle (e+14*w, e+19*w, e+15*w, e+18*w, e+15*w, e+19*w); //row 15
  triangle (e+15*w, e+19*w, e+16*w, e+18*w, e+16*w, e+19*w); //row 16
  
  triangle (e+8*w, e+20*w, e+9*w, e+19*w, e+9*w, e+20*w); // line 19 row 9
  triangle (e+9*w, e+19*w, e+9*w, e+20*w, e+10*w, e+19*w); // line 19 row 10
  triangle (e+10*w, e+19*w, e+10*w, e+20*w, e+11*w, e+19*w);
  triangle (e+11*w, e+20*w, e+12*w, e+19*w, e+12*w, e+20*w); //row 12
  triangle (e+12*w, e+20*w, e+13*w, e+19*w, e+13*w, e+20*w); //row 13
  triangle (e+13*w, e+19*w, e+13*w, e+20*w, e+14*w, e+19*w); //row 14
  triangle (e+14*w, e+19*w, e+14*w, e+20*w, e+15*w, e+19*w); //row 15
  triangle (e+15*w, e+20*w, e+16*w, e+19*w, e+16*w, e+20*w); //row 16
  
  triangle (e+8*w, e+21*w, e+9*w, e+20*w, e+9*w, e+21*w); //line 20 row 9 e+w = e+5w
  triangle (e+9*w, e+21*w, e+10*w, e+20*w, e+10*w, e+21*w); // line 20 row 10
  triangle (e+10*w, e+20*w, e+10*w, e+21*w, e+11*w, e+20*w); // row 11
  triangle (e+11*w, e+20*w, e+11*w, e+21*w, e+12*w, e+20*w); //row 12
  triangle (e+12*w, e+21*w, e+13*w, e+20*w, e+13*w, e+21*w); //row 13
  triangle (e+13*w, e+21*w, e+14*w, e+20*w, e+14*w, e+21*w); //row 14
  triangle (e+14*w, e+20*w, e+14*w, e+21*w, e+15*w, e+20*w); //row 15
  triangle (e+15*w, e+20*w, e+15*w, e+21*w, e+16*w, e+20*w); //row 16
  
  triangle (e+8*w, e+21*w, e+8*w, e+22*w, e+9*w, e+21*w); // line 21 row 9
  triangle (e+9*w, e+22*w, e+10*w, e+21*w, e+10*w, e+22*w);
  triangle (e+10*w, e+22*w, e+11*w, e+21*w, e+11*w, e+22*w);
  triangle (e+11*w, e+21*w, e+11*w, e+22*w, e+12*w, e+21*w); //row 12
  triangle (e+12*w, e+21*w, e+12*w, e+22*w, e+13*w, e+21*w); //row 13
  triangle (e+13*w, e+22*w, e+14*w, e+21*w, e+14*w, e+22*w); //row 14
  triangle (e+14*w, e+22*w, e+15*w, e+21*w, e+15*w, e+22*w); //row 15
  triangle (e+15*w, e+21*w, e+15*w, e+22*w, e+16*w, e+21*w); //row 16
  
  triangle (e+8*w, e+22*w, e+8*w, e+23*w, e+9*w, e+22*w); // line 22 row 9
  triangle (e+9*w, e+22*w, e+9*w, e+23*w, e+10*w, e+22*w); // line 22 row 10
  triangle (e+10*w, e+23*w, e+11*w, e+22*w, e+11*w, e+23*w);
  triangle (e+11*w, e+23*w, e+12*w, e+22*w, e+12*w, e+23*w); //row 12
  triangle (e+12*w, e+22*w, e+12*w, e+23*w, e+13*w, e+22*w); //row 13
  triangle (e+13*w, e+22*w, e+13*w, e+23*w, e+14*w, e+22*w); //row 14
  triangle (e+14*w, e+23*w, e+15*w, e+22*w, e+15*w, e+23*w); //row 15
  triangle (e+15*w, e+23*w, e+16*w, e+22*w, e+16*w, e+23*w); //row 16
  
  triangle (e+8*w, e+24*w, e+9*w, e+23*w, e+9*w, e+24*w); // line 23 row 9
  triangle (e+9*w, e+23*w, e+9*w, e+24*w, e+10*w, e+23*w); // line 23 row 10
  triangle (e+10*w, e+23*w, e+10*w, e+24*w, e+11*w, e+23*w);
  triangle (e+11*w, e+24*w, e+12*w, e+23*w, e+12*w, e+24*w); //row 12
  triangle (e+12*w, e+24*w, e+13*w, e+23*w, e+13*w, e+24*w); //row 13
  triangle (e+13*w, e+23*w, e+13*w, e+24*w, e+14*w, e+23*w); //row 14
  triangle (e+14*w, e+23*w, e+14*w, e+24*w, e+15*w, e+23*w); //row 15
  triangle (e+15*w, e+24*w, e+16*w, e+23*w, e+16*w, e+24*w); //row 16
  
  
  //block 11
  triangle (e+16*w, e+16*w, e+16*w, e+17*w, e+17*w, e+17*w); //line 16 row 16 e=16
  triangle (e+17*w, e+16*w, e+17*w, e+17*w, e+18*w, e+17*w);
  triangle (e+18*w, e+16*w, e+19*w, e+16*w, e+19*w, e+17*w); //line 16, row 18
  triangle (e+19*w, e+16*w, e+20*w, e+16*w, e+20*w, e+17*w); //line 16, row 19
  triangle (e+20*w, e+16*w, e+20*w, e+17*w, e+21*w, e+17*w);
  triangle (e+21*w, e+16*w, e+21*w, e+17*w, e+22*w, e+17*w);
  triangle (e+22*w, e+16*w, e+23*w, e+16*w, e+23*w, e+17*w); //line 16, row 22
  triangle (e+23*w, e+16*w, e+24*w, e+16*w, e+24*w, e+17*w); //line 16, row 23
  
  triangle (e+16*w, e+17*w, e+16*w, e+18*w, e+17*w, e+18*w); //line 17, row 16
  triangle (e+17*w, e+17*w, e+18*w, e+17*w, e+18*w, e+18*w); //line 17, row 17
  triangle (e+18*w, e+17*w, e+19*w, e+17*w, e+19*w, e+18*w); //line 17, row 18
  triangle (e+19*w, e+17*w, e+19*w, e+18*w, e+20*w, e+18*w); //line 17, row 19
  triangle (e+20*w, e+17*w, e+20*w, e+18*w, e+21*w, e+18*w); //line 17, row 20
  triangle (e+21*w, e+17*w, e+22*w, e+17*w, e+22*w, e+18*w); //line 17, row 21
  triangle (e+22*w, e+17*w, e+23*w, e+17*w, e+23*w, e+18*w); //line 17, row 22
  triangle (e+23*w, e+17*w, e+23*w, e+18*w, e+24*w, e+18*w); //line 17, row 23
  
  triangle (e+16*w, e+18*w, e+17*w, e+18*w, e+17*w, e+19*w); //line 18, row 16
  triangle (e+17*w, e+18*w, e+18*w, e+18*w, e+18*w, e+19*w); //line 18, row 17
  triangle (e+18*w, e+18*w, e+18*w, e+19*w, e+19*w, e+19*w);
  triangle (e+19*w, e+18*w, e+19*w, e+19*w, e+20*w, e+19*w);
  triangle (e+20*w, e+18*w, e+21*w, e+18*w, e+21*w, e+19*w); //line 18, row 20
  triangle (e+21*w, e+18*w, e+22*w, e+18*w, e+22*w, e+19*w); //line 18, row 21
  triangle (e+22*w, e+18*w, e+22*w, e+19*w, e+23*w, e+19*w);
  triangle (e+23*w, e+18*w, e+23*w, e+19*w, e+24*w,e+19*w);
  
  triangle (e+16*w, e+19*w, e+17*w, e+19*w, e+17*w, e+20*w) //line 19, row 16
  triangle (e+17*w, e+19*w, e+17*w, e+20*w, e+18*w, e+20*w);
  triangle (e+18*w, e+19*w, e+18*w, e+20*w, e+19*w, e+20*w);
  triangle (e+19*w, e+19*w, e+20*w, e+19*w, e+20*w, e+20*w);
  triangle (e+20*w, e+19*w, e+21*w, e+19*w, e+21*w, e+20*w);
  triangle (e+21*w, e+19*w, e+21*w, e+20*w, e+22*w, e+20*w);
  triangle (e+22*w, e+19*w, e+22*w, e+20*w, e+23*w, e+20*w);
  triangle (e+23*w, e+19*w, e+24*w, e+19*w, e+24*w, e+20*w);
  
 triangle (e+16*w, e+20*w, e+16*w, e+21*w, e+17*w, e+21*w); //line 20 row 16 Y e=4*w
  triangle (e+17*w, e+20*w, e+17*w, e+21*w, e+18*w, e+21*w);
  triangle (e+18*w, e+20*w, e+19*w, e+20*w, e+19*w, e+21*w); //line 20, row 18
  triangle (e+19*w, e+20*w, e+20*w, e+20*w, e+20*w, e+21*w); //line 20, row 19
  triangle (e+20*w, e+20*w, e+20*w, e+21*w, e+21*w, e+21*w);
  triangle (e+21*w, e+20*w, e+21*w, e+21*w, e+22*w, e+21*w);
  triangle (e+22*w, e+20*w, e+23*w, e+20*w, e+23*w, e+21*w); //line 20, row 22
  triangle (e+23*w, e+20*w, e+24*w, e+20*w, e+24*w, e+21*w); //line 20, row 23
  
  triangle (e+16*w, e+21*w, e+16*w, e+22*w, e+17*w, e+22*w); //line 21, row 16
  triangle (e+17*w, e+21*w, e+18*w, e+21*w, e+18*w, e+22*w); //line 21, row 17
  triangle (e+18*w, e+21*w, e+19*w, e+21*w, e+19*w, e+22*w); //line 21, row 18
  triangle (e+19*w, e+21*w, e+19*w, e+22*w, e+20*w, e+22*w); //line 21, row 19
  triangle (e+20*w, e+21*w, e+20*w, e+22*w, e+21*w, e+22*w); //line 21, row 20
  triangle (e+21*w, e+21*w, e+22*w, e+21*w, e+22*w, e+22*w); //line 21, row 21
  triangle (e+22*w, e+21*w, e+23*w, e+21*w, e+23*w, e+22*w); //line 21, row 22
  triangle (e+23*w, e+21*w, e+23*w, e+22*w, e+24*w, e+22*w); //line 21, row 23
  
  triangle (e+16*w, e+22*w, e+17*w, e+22*w, e+17*w, e+23*w); //line 22, row 16
  triangle (e+17*w, e+22*w, e+18*w, e+22*w, e+18*w, e+23*w); //line 22, row 17
  triangle (e+18*w, e+22*w, e+18*w, e+23*w, e+19*w, e+23*w);
  triangle (e+19*w, e+22*w, e+19*w, e+23*w, e+20*w, e+23*w);
  triangle (e+20*w, e+22*w, e+21*w, e+22*w, e+21*w, e+23*w); //line 22, row 20
  triangle (e+21*w, e+22*w, e+22*w, e+22*w, e+22*w, e+23*w); //line 22, row 21
  triangle (e+22*w, e+22*w, e+22*w, e+23*w, e+23*w, e+23*w);
  triangle (e+23*w, e+22*w, e+23*w, e+23*w, e+24*w, e+23*w);
  
  triangle (e+16*w, e+23*w, e+17*w, e+23*w, e+17*w, e+24*w) //line 23, row 16
  triangle (e+17*w, e+23*w, e+17*w, e+24*w, e+18*w, e+24*w);
  triangle (e+18*w, e+23*w, e+18*w, e+24*w, e+19*w, e+24*w);
  triangle (e+19*w, e+23*w, e+20*w, e+23*w, e+20*w, e+24*w);
  triangle (e+20*w, e+23*w, e+21*w, e+23*w, e+21*w, e+24*w);
  triangle (e+21*w, e+23*w, e+21*w, e+24*w, e+22*w, e+24*w);
  triangle (e+22*w, e+23*w, e+22*w, e+24*w, e+23*w, e+24*w);
  triangle (e+23*w, e+23*w, e+24*w, e+23*w, e+24*w, e+24*w);
  
  //black
  stroke (66, 57, 39);
  fill (66, 57, 39);
  
  //block 12
  
  triangle (e+24*w, e+17*w, e+25*w, e+16*w, e+25*w, e+17*w); //line 16 row 24
  triangle (e+25*w, e+17*w, e+26*w, e+16*w, e+26*w, e+17*w); // line 16 row 25
  triangle (e+26*w, e+16*w, e+26*w, e+17*w, e+27*w, e+16*w); // row 26
  triangle (e+27*w, e+16*w, e+27*w, e+17*w, e+28*w, e+16*w); //row 27
  triangle (e+28*w, e+17*w, e+29*w, e+16*w, e+29*w, e+17*w); //row 28
  triangle (e+29*w, e+17*w, e+30*w, e+16*w, e+30*w, e+17*w); //row 29
  triangle (e+30*w, e+16*w, e+30*w, e+17*w, e+31*w, e+16*w); //row 30
  triangle (e+31*w, e+16*w, e+31*w, e+17*w, e+32*w, e+16*w); //row 31
  
  triangle (e+24*w, e+17*w, e+24*w, e+18*w, e+25*w, e+17*w); // line 17 row 24
  triangle (e+25*w, e+18*w, e+26*w, e+17*w, e+26*w, e+18*w);
  triangle (e+26*w, e+18*w, e+27*w, e+17*w, e+27*w, e+18*w);
  triangle (e+27*w, e+17*w, e+27*w, e+18*w, e+28*w, e+17*w); //row 27
  triangle (e+28*w, e+17*w, e+28*w, e+18*w, e+29*w, e+17*w); //row 28
  triangle (e+29*w, e+18*w, e+30*w, e+17*w, e+30*w, e+18*w); //row 29
  triangle (e+30*w, e+18*w, e+31*w, e+17*w, e+31*w, e+18*w); //row 30
  triangle (e+31*w, e+17*w, e+31*w, e+18*w, e+32*w, e+17*w); //row 31
  
  triangle (e+24*w, e+18*w, e+24*w, e+19*w, e+25*w, e+18*w); // line 18 row 24
  triangle (e+25*w, e+18*w, e+25*w, e+19*w, e+26*w, e+18*w); // line 18 row 25
  triangle (e+26*w, e+19*w, e+27*w, e+18*w, e+27*w, e+19*w);
  triangle (e+27*w, e+19*w, e+28*w, e+18*w, e+28*w, e+19*w); //row 27
  triangle (e+28*w, e+18*w, e+28*w, e+19*w, e+29*w, e+18*w); //row 28
  triangle (e+29*w, e+18*w, e+29*w, e+19*w, e+30*w, e+18*w); //row 29
  triangle (e+30*w, e+19*w, e+31*w, e+18*w, e+31*w, e+19*w); //row 30
  triangle (e+31*w, e+19*w, e+32*w, e+18*w, e+32*w, e+19*w); //row 31
  
  triangle (e+24*w, e+20*w, e+25*w, e+19*w, e+25*w, e+20*w); // line 19 row 24
  triangle (e+25*w, e+19*w, e+25*w, e+20*w, e+26*w, e+19*w); // line 19 row 25
  triangle (e+26*w, e+19*w, e+26*w, e+20*w, e+27*w, e+19*w);
  triangle (e+27*w, e+20*w, e+28*w, e+19*w, e+28*w, e+20*w); //row 27
  triangle (e+28*w, e+20*w, e+29*w, e+19*w, e+29*w, e+20*w); //row 28
  triangle (e+29*w, e+19*w, e+29*w, e+20*w, e+30*w, e+19*w); //row 29
  triangle (e+30*w, e+19*w, e+30*w, e+20*w, e+31*w, e+19*w); //row 30
  triangle (e+31*w, e+20*w, e+32*w, e+19*w, e+32*w, e+20*w); //row 31
  
  triangle (e+24*w, e+21*w, e+25*w, e+20*w, e+25*w, e+21*w); //line 20 row 24 e+w = e+5w
  triangle (e+25*w, e+21*w, e+26*w, e+20*w, e+26*w, e+21*w); // line 20 row 25
  triangle (e+26*w, e+20*w, e+26*w, e+21*w, e+27*w, e+20*w); // row 26
  triangle (e+27*w, e+20*w, e+27*w, e+21*w, e+28*w, e+20*w); //row 27
  triangle (e+28*w, e+21*w, e+29*w, e+20*w, e+29*w, e+21*w); //row 28
  triangle (e+29*w, e+21*w, e+30*w, e+20*w, e+30*w, e+21*w); //row 29
  triangle (e+30*w, e+20*w, e+30*w, e+21*w, e+31*w, e+20*w); //row 30
  triangle (e+31*w, e+20*w, e+31*w, e+21*w, e+32*w, e+20*w); //row 31
  
  triangle (e+24*w, e+21*w, e+24*w, e+22*w, e+25*w, e+21*w); // line 21 row 24
  triangle (e+25*w, e+22*w, e+26*w, e+21*w, e+26*w, e+22*w);
  triangle (e+26*w, e+22*w, e+27*w, e+21*w, e+27*w, e+22*w);
  triangle (e+27*w, e+21*w, e+27*w, e+22*w, e+28*w, e+21*w); //row 27
  triangle (e+28*w, e+21*w, e+28*w, e+22*w, e+29*w, e+21*w); //row 28
  triangle (e+29*w, e+22*w, e+30*w, e+21*w, e+30*w, e+22*w); //row 29
  triangle (e+30*w, e+22*w, e+31*w, e+21*w, e+31*w, e+22*w); //row 30
  triangle (e+31*w, e+21*w, e+31*w, e+22*w, e+32*w, e+21*w); //row 31
  
  triangle (e+24*w, e+22*w, e+24*w, e+23*w, e+25*w, e+22*w); // line 22 row 24
  triangle (e+25*w, e+22*w, e+25*w, e+23*w, e+26*w, e+22*w); // line 22 row 25
  triangle (e+26*w, e+23*w, e+27*w, e+22*w, e+27*w, e+23*w);
  triangle (e+27*w, e+23*w, e+28*w, e+22*w, e+28*w, e+23*w); //row 27
  triangle (e+28*w, e+22*w, e+28*w, e+23*w, e+29*w, e+22*w); //row 28
  triangle (e+29*w, e+22*w, e+29*w, e+23*w, e+30*w, e+22*w); //row 29
  triangle (e+30*w, e+23*w, e+31*w, e+22*w, e+31*w, e+23*w); //row 30
  triangle (e+31*w, e+23*w, e+32*w, e+22*w, e+32*w, e+23*w); //row 31
  
  triangle (e+24*w, e+24*w, e+25*w, e+23*w, e+25*w, e+24*w); // line 23 row 24
  triangle (e+25*w, e+23*w, e+25*w, e+24*w, e+26*w, e+23*w); // line 23 row 25
  triangle (e+26*w, e+23*w, e+26*w, e+24*w, e+27*w, e+23*w);
  triangle (e+27*w, e+24*w, e+28*w, e+23*w, e+28*w, e+24*w); //row 27
  triangle (e+28*w, e+24*w, e+29*w, e+23*w, e+29*w, e+24*w); //row 28
  triangle (e+29*w, e+23*w, e+29*w, e+24*w, e+30*w, e+23*w); //row 29
  triangle (e+30*w, e+23*w, e+30*w, e+24*w, e+31*w, e+23*w); //row 30
  triangle (e+31*w, e+24*w, e+32*w, e+23*w, e+32*w, e+24*w); //row 31
  
  
}