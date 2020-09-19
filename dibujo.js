var d = document.getElementById("canvas");
var lienzo = d.getContext("2d");
//metodo del canvas
var lineas = 30;
var l = 0;
var xi,yi, xf, yf;
var nxf, nyf;
colorcito = "red";

for(l=0; l< lineas; l++){
  xi = 10 * l;
  yi = 10 * l;
  xf = 10 * (l + 1);
  yf = 10 * (l + 1);
  nxf = 300 - xf;
  nyf = 300 - yf;
  dibujarLinea(colorcito,0,yi,xf,300);
  dibujarLinea(colorcito, xi, 300, 300,nyf); 
  dibujarLinea(colorcito,300,yi,xf,0);
  dibujarLinea(colorcito,xi,0,0,nyf);
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();//arrancan el dibujo
    lienzo.strokeStyle = color; //atributo objeto lienzo
    lienzo.moveTo(xinicial,yinicial); //mover la posicion del lienzo
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke(); 
    lienzo.closePath();//cierra el dibujo actual
}
