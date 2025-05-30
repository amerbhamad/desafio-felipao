let nomedojogador = "Amer";
let xp = 5004
let ranque = "";

if (xp <= 1000) {
    ranque = "Ferro";
}   else if (xp >= 1001 && xp <= 2000) {
    ranque = "Bronze";
}   else if (xp >= 2001 && xp <= 5000) {    
    ranque = "Prata";
} else if (xp >= 5001 && xp <= 7000) {
    ranque = "Ouro";
} else if (xp >= 7001 && xp <= 8000) {
    ranque = "Platina";
} else if (xp >= 8001 && xp <= 9000) {
    ranque = "Ascendente";
} else if (xp >= 9001 && xp <= 10000) {
    ranque = "Imortal";
} else if (xp >= 10001) {
    ranque = "Radiante";
}

console.log("O herói de nome " + nomedojogador + " está no nivel de " + ranque ) 