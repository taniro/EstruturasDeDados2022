function bubblesort(array) {
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length - 1 - i; j++) {
			if (array[j] >= array[j + 1]) {
				/*let aux = array[j];
				array[j] = array[j + 1];
				array[j + 1] = aux;*/
				[array[j], array[j + 1]] = [array[j + 1], array[j]];
			}
		}
	}

	return array;
}

export default bubblesort;