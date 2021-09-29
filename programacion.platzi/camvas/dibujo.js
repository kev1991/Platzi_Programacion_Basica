

var text = document.getElementById("text_lines");
var button = document.getElementById("botoncito");
button.addEventListener("click", dibujoPorClick);




var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");


function dibujoPorClick()
{
  var lineas = parseInt(text.value);

  var yi, xf, xi, yf;
  var space = ancho / lineas

  for(l = 0;l < lineas; l++ )
  {
    yi = space * l
    xf = space * (l + 1)
    xi = space * l
    yf = space * (l + 1)
    drowline("red", 0, yi, xf,300)
    drowline("red", xi, 0, 300,yf)
  }
  function drowline(color, x_start, y_start, x_end, y_end)
  {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(x_start, y_start);
    lienzo.lineTo(x_end, y_end);
    lienzo.stroke();
    lienzo.closePath();
  }
}
