class Pakiman
 {
  constructor(name, life, attack)
  {
      this.imagen = new Image();
      this.name = name;
      this.life = life;
      this.attack = attack;

      this.imagen.src = imagenes[this.name];
  }

  hablar()
  {
    alert(this.name);
  }

  mostrar()
  {
    document.body.appendChild(this.imagen);
    document.write("<p>");
    document.write("<strong>"+this.name+"</strong> <br />");
    document.write("Vida:"+this.life+"<br />");
    document.write("Ataque:"+this.attack+"<hr />");
    document.write("</p>");
  }
}
