var teclas = {
  UP:38,
  DOWN:40,
  LEFT:37,
  RIGHT:39
 };
 console.log(teclas);


document.addEventListener("keydown", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 100;
var y = 100;
drowline("red",x-1, y-1, x+1, y+1, papel);

function drowline(color, x_start, y_start, x_end, y_end, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 4;
  lienzo.moveTo(x_start, y_start);
  lienzo.lineTo(x_end, y_end);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento)
{
var colorcito = "red";
var movimiento = 10;
  switch (evento.keyCode) {
    case teclas.UP:
    drowline(colorcito, x, y , x, y - movimiento, papel);
    y = y - movimiento
      break;
    case teclas.DOWN:
    drowline(colorcito, x, y , x, y + movimiento, papel);
    y = y + movimiento
      break;
    case teclas.LEFT:
    drowline(colorcito, x, y , x - movimiento, y, papel);
    x = x - movimiento
      break;
    case teclas.RIGHT:
    drowline(colorcito, x, y , x + movimiento, y, papel);
    x = x + movimiento
        break;
    default:

  }
}
