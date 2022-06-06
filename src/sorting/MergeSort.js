function mergesort(vetor) {
	if (vetor.length === 1) {
		return vetor;
	}

	const mid = Math.floor(vetor.length / 2);

	const esquerda = vetor.slice(0, mid);
	const direita = vetor.slice(mid, vetor.length);

	return merge(mergesort(esquerda), mergesort(direita));
}

function merge(esquerda, direita) {
	let result = [];
	let il = 0;
	let ir = 0;

	while (il < esquerda.length && ir < direita.length) {
		if (esquerda[il] < direita[ir]) {
			result.push(esquerda[il]);
			il++;
		} else {
			result.push(direita[ir]);
			ir++;
		}
	}

	while (il < esquerda.length) {
		result.push(esquerda[il]);
		il++;
	}

	while (ir < direita.length) {
		result.push(direita[ir]);
		ir++;
	}

	return result;
}

export default mergesort;
