let listaDeEstudantes = ["Helena", "Chico", "Mário", "José", "Maria"];
let quantidadeDeEstudantes = listaDeEstudantes.length;
if (quantidadeDeEstudantes < 10) {
	listaDeEstudantes.push("João");
	console.log(listaDeEstudantes);
} else {
    console.log("Não é possível inserir mais alunos nessa turma");
}
