
// •	se o número for par, escreva 'par' e o número correspondente.
// •	se o número for ímpar, escreva 'ímpar' e o número correspondente.
// •	se o número for zero, escreva 'zero' e o número correspondente.

console.log("------------------------------")

console.log("Inicio do processamento.")

console.log("------------------------------")

let listaAlunos = ["Paloma", "Joselito", "Alane", "Ramom", "Valentina"];
//console.log(listaAlunos.length)

for (let index = 0; index < listaAlunos.length; index++) {
    //const element = array[index];
    console.log(index)
    if (index == 0) {console.log("zero localizado: " + listaAlunos[index])
         } 

        else if (index % 2 != 0) {
            console.log("numero impar localizado: " + listaAlunos[index]) 
         }
        else {
       console.log("numero par localizado: " + listaAlunos[index]) 
    }
    
}

console.log("------------------------------")

console.log("Fim do processamento.")

console.log("------------------------------")