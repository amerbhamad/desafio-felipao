var vitorias = parseInt(prompt("Digite o número de vitórias:"));
var derrotas = parseInt(prompt("Digite o número de derrotas:"));
const resultado = calcular(vitorias, derrotas);

function calcular(vitorias, derrotas) {
    let partidas = vitorias - derrotas;
    let ranque = "";
    if (partidas <= 10) {
        ranque = "Ferro";
    } else if (partidas >= 11 && partidas <= 20) {
        ranque = "Bronze";
    } else if (partidas >= 21 && partidas <= 50) {    
        ranque = "Prata";
    } else if (partidas >= 51 && partidas <= 80) {
        ranque = "Ouro";
    } else if (partidas >= 81 && partidas <= 90) {
        ranque = "Diamante";
    } else if (partidas >= 91 && partidas <= 100) {
        ranque = "Lendário";
    } else if (partidas >= 101) {
        ranque = "Imortal";
    }
    console.log("O herói tem saldo de " + partidas + " e está no nível de " + ranque);
}
