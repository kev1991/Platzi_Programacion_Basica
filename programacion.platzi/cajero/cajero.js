class Billete
 {
  constructor(v, c)
  {
    this.valor = v;
    this.cantidad = c;
  }
}

function entregarDinero()
{
  var t = document.getElementById('dinero')
  dinero = parseInt(t.value);
  for (var bi of caja)
  {
    if (dinero > 0)
     {
       div = Math.floor(dinero / bi.valor);
       if (div > bi.cantidad)
        {
         papeles =  bi.cantidad;
        }
        else
         {
          papeles = div;
         }
         entrgado.push(new Billete(bi.valor, papeles) );
         dinero -= (bi.valor * papeles);
     }
  }
  if (dinero > 0)
  {
    resultado.innerHTML = "Soy un cajero pobre y no tengo esa cantidad de dinero:(";
  }
  else
  {
    for(var e of entrgado)
    {
      if (e.cantidad > 0)
      {
        resultado.innerHTML += e.cantidad + "   billetes entrgados $" + e.valor + "<br />";
      }
    }
  }
}

var caja = [];
var entrgado = [];

caja.push(new Billete(100, 10) );
caja.push(new Billete(50, 30) );
caja.push(new Billete(20, 20) );
caja.push(new Billete(10, 10) );
caja.push(new Billete(5, 10) );


var dinero = 0;
var div = 0;
var papeles = 0;

var resultado = document.getElementById('resultado')
var b = document.getElementById('extraer');
b.addEventListener("click", entregarDinero);
