import mergesort from "../src/sorting/MergeSort";
import selectionsort from "../src/sorting/SelectionSort";
import bubblesort from "../src/sorting/BubbleSort";


test("Teste Bubble sort", () => {

    //let dadosNaoOrdenados = [4, 7, 1, 78, 32, 60, 13];
    //let dadosOrdenados = [1, 4, 7, 13, 32, 60, 78];

    let dadosNaoOrdenados = [6, 5, 4, 3, 2, 1];
    let dadosOrdenados = [1,2, 3, 4, 5, 6];

	expect(bubblesort(dadosNaoOrdenados)).toStrictEqual(dadosOrdenados);
});


test("Teste Selection sort", () => {

    //let dadosNaoOrdenados = [4, 7, 1, 78, 32, 60, 13];
    //let dadosOrdenados = [1, 4, 7, 13, 32, 60, 78];

    let dadosNaoOrdenados = [6, 5, 4, 3, 2, 1];
    let dadosOrdenados = [1,2, 3, 4, 5, 6];

	expect(selectionsort(dadosNaoOrdenados)).toStrictEqual(dadosOrdenados);
});

test("Teste Merge sort", () => {

    //let dadosNaoOrdenados = [4, 7, 1, 78, 32, 60, 13];
    //let dadosOrdenados = [1, 4, 7, 13, 32, 60, 78];

    let dadosNaoOrdenados = [6, 5, 4, 3, 2, 1];
    let dadosOrdenados = [1,2, 3, 4, 5, 6];

	expect(mergesort(dadosNaoOrdenados)).toStrictEqual(dadosOrdenados);
});