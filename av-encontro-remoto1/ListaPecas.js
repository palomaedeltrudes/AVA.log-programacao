const listaDePecas = ['Lanterna', 'Roda', 'Parabrisa']
console.log("------------------------------")
console.log("Inicio do processamento.")

console.log("------------------------------")

let pesoPeca = 115
if (pesoPeca > 100) {console.log("Peso ok! Pode cadastrar a peca.")}
else {console.log("Peca recusada.")}

console.log("------------------------------")

let qtdePeca = 11
if (qtdePeca > 10) {console.log("Ultrapassou o limite da caixa.")}
else {console.log("caixa ok!")}

console.log("------------------------------")

for (let index = 0; index < listaDePecas.length; index++) {
        const nomePeca = listaDePecas[index];
            if (nomePeca.length < 3) {console.log("Erro no nome da peca.")}
            else {console.log("Nome da peca ok.")}

}


console.log("------------------------------")

console.log("Fim do processamento.")
