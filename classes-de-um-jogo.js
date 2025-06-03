// Definição da classe Heroi
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    // Estrutura de decisão para definir o ataque conforme o tipo do herói
    switch (this.tipo) {
      case "mago":
        ataque = "usando magia";
        break;
      case "guerreiro":
        ataque = "usando espada";
        break;
      case "monge":
        ataque = "usando artes marciais";
        break;
      case "ninja":
        ataque = "usando shuriken";
        break;
    }
    console.log(`O ${this.tipo} atacou ${ataque}`);
  }
}

const listaHerois = [
  new Heroi("Merlin", 60, "mago"),
  new Heroi("Aragorn", 35, "guerreiro"),
  new Heroi("Shaolin", 28, "monge"),
  new Heroi("Hanzo", 25, "ninja"),
];
for (let heroi of listaHerois) {
  heroi.atacar();
}