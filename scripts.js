class heroiAventura {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }
  atacar() {
    let ataque;
    if (this.tipo === "mago") {
      ataque = "magia";
    } else if (this.tipo === "guerreiro") {
      ataque = "espada";
    } else if (this.tipo === "monge") {
      ataque = "artes maciais";
    } else {
      ataque = "shuriken";
    }
    console.log(
      `O ${this.tipo} de nome ${this.nome}, idade ${this.idade} atacou usando ${ataque}.`
    );
  }
}

let heroi1 = new heroiAventura("Daniela", 25, "ninja");
heroi1.atacar();
