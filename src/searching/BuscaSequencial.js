function buscaSequencial(chave, dados) {
	for (var i = 0; i < dados.length; i++) {
		if (dados[i] == chave) return dados[i];
	}
	return -1;
}

function buscaSequencialSentinela(chave, dados) {
	var tam = dados.length;
	dados[tam] = chave;

	var i;

	for (i = 0; chave != dados[i] && i < tam; i++) {}

	if (chave == dados[i] && i != tam) {
		return dados[i];
	}

	return -1;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(buscaSequencial(2, array));
console.log(buscaSequencialSentinela(15, array));
