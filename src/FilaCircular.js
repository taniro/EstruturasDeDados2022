class FilaCircular {
	constructor(tam = 5) {
		this.dados = [];
		this.inicio = 1;
		this.fim = 1;
		this.capacidade = tam;
	}

	enqueue(dado) {
		if (this.isFull()) {
			throw new Error("queue overflow");
		} else {
			this.dados[this.fim] = dado;
			if (this.fim === this.capacidade) {
				this.fim = 0;
			} else {
				this.fim++;
			}
		}
	}

	dequeue() {
		if (this.isEmpty()) {
			throw new Error("queue underflow");
		} else {
			if (this.inicio === this.capacidade) {
				this.inicio = 0;
			} else {
				this.inicio++;
			}
		}
	}

	isEmpty() {
		return this.inicio === this.fim;
	}

	isFull() {
		return this.inicio === this.fim + 1;
	}

	lenght() {
		if (this.isEmpty()) {
			return 0;
		} else if (this.inicio < this.fim) {
			return this.fim - this.inicio;
		} else {
			return this.capacidade - this.inicio + this.fim + 1;
		}
	}

	front() {
		if (!this.isEmpty()) {
			return this.dados[this.inicio];
		}
	}

	clear() {
		this.inicio = this.fim = 1;
	}
}

export default FilaCircular;