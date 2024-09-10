const letras = "Habilidade";
const stringAsarray = letras.split("");

let quantidade = 0;
for (let caractere of stringAsarray) {
    if (caractere !== " ") {
        if (caractere === "A" || caractere === "a") {
            quantidade++;
        }
    }
}

if (quantidade === 0) {
    console.log("Nenhuma letra 'A' ou 'A' foi encontrada.");
} else {
    console.log(`Foram encontradas ${quantidade} letras "A" ou "a".`)
};












