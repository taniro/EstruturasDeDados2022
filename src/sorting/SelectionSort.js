function selectionsort(vetor) {
	for (let  i = 0; i < vetor.length; i++) {
		let  indiceMenor = i;
		for (let j = i; j < vetor.length; j++) {
			if (vetor[indiceMenor] > vetor[j]) {
				indiceMenor = j;
			}
		}
		if (i != indiceMenor) {
			//troca
			[vetor[i], vetor[indiceMenor]] = [vetor[indiceMenor], vetor[i]];
		}
	}

	return vetor;
}

export default selectionsort;