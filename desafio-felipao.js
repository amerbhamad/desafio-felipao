let nomedojogador = "Amer";
let QuantidadedeXPatual = 10000;
let ranque = "";

if (QuantidadedeXPatual < 1000) {
    console.log("Ferro.");
if (QuantidadedeXPatual >= 1001 && QuantidadedeXPatual <= 2000) 
    console.log("Bronze.");
if (QuantidadedeXPatual >= 2001 && QuantidadedeXPatual <= 5000) 
    console.log("Prata.");
if (QuantidadedeXPatual >= 5001 && QuantidadedeXPatual <= 7000) 
    console.log("Ouro.");
if (QuantidadedeXPatual >= 7001 && QuantidadedeXPatual <= 8000) 
    console.log("Platina.");
if (QuantidadedeXPatual >= 8001 && QuantidadedeXPatual <= 9000) 
    console.log("Ascendente.");
if (QuantidadedeXPatual >= 9001 && QuantidadedeXPatual <= 10000) 
    console.log("Imortal.");
if (QuantidadedeXPatual >= 10001) 
    console.log("Radiante.");
}

console.log("O herói de nome " + nomedojogador + " está no nivel de " + ranque ) 