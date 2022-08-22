
//var dataISOano = new Date("2020");
//console.log(dataISOano);


let dataAtual = new Date(2022,8,15);
let dataEvento = new Date (2022,9,10)
let listaParticipantes = ["Adriano", " Willian", " Kali", " Arthur", " Marlon"];
let idadeParticipante = 20

console.log("-----------------------------------------------")

if (dataEvento>dataAtual) {
    console.log("Agendar Evento")
} else {console.log("Data Invalida")
}

console.log("-----------------------------------------------")

if (listaParticipantes.length < 100) {
    console.log("Permitir cadastro")
} else {console.log("Cadastro nao permitido. Vagas esgotadas!")
}

console.log("-----------------------------------------------")

if (idadeParticipante >= 18) {
    console.log("Efetuar cadastro") 
    console.log("-----------------------------------------------")
    console.log("Lista de Participantes: " + listaParticipantes)
} else {console.log("Cadastro nao permitido para menores de 18 anos!")
}

console.log("-----------------------------------------------")
