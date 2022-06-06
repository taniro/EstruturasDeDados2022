

function insertionSort(array) {
	for (let i = 1; i < array.length; i++) {
		let escolhido = array[i];
		let j = i - 1;

		while (j >= 0 && array[j] > escolhido) {
			array[j + 1] = array[j];
			j = j - 1;
		}
		array[j + 1] = escolhido;
	}
	return array;
}

export default insertionSort;
