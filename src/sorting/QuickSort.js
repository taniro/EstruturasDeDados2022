function quicksort(vetor, inferior, superior) {
	let pivo_pos;
	if (inferior < superior) {
		let pivo = vetor[superior - 1];
		let i, j;
		i = inferior - 1;
		for (j = inferior; j < superior - 1; j++) {
			if (vetor[j] <= pivo) {
				i++;
				[vetor[j], vetor[i]] = [vetor[i], vetor[j]];
			}
		}

		[vetor[superior - 1], vetor[i + 1]] = [
			vetor[i + 1],
			vetor[superior - 1],
		];

		pivo_pos = i + 1;
		quicksort(vetor, inferior, pivo_pos - 1);
		quicksort(vetor, pivo_pos + 1, superior - 1);
		return vetor;
	}
}

export default quicksort;