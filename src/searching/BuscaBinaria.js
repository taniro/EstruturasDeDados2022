function buscaBinaria(chave, v) {
	let esquerda = -1;
	let direita = v.length;

	let itr = 0;

	while (esquerda < direita - 1) {
		console.log("iteração: " + ++itr);

		let meio = Math.floor((esquerda + direita) / 2);
		if (v[meio] < chave) {
			esquerda = meio;
		} else {
			direita = meio;
		}
	}
	return v[direita];
}

function buscaBinariaRecursivo(chave, esquerda, direita, v) {
	if (esquerda > direita - 1) return -1;

	let meio = Math.floor((esquerda + direita) / 2);

	if (chave === v[meio]) {
		return v[meio];
	} else if (chave < v[meio]) {
		return buscaBinariaRecursivo(chave, esquerda, meio - 1, v);
	} else {
		return buscaBinariaRecursivo(chave, meio + 1, direita, v);
	}
}

let vetor_o = [10, 20, 30, 40, 50, 60, 70, 80, 90];
console.log(buscaBinaria(90, vetor_o));
//console.log(buscaBinariaRecursivo(3, 0, vetor_o.length - 1, vetor_o));
