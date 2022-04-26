class Conjunto{
	constructor() {
		this.dados = new ListaDuplamenteLigada();
	}

	add(elemento) {
		if (!this.has(elemento)) {
			this.dados.add(elemento);
			return true;
		} else {
			return false;
		}
	}

	delete(elemento) {
		return this.dados.remove(elemento);
	}

	has(elemento) {
		return this.dados.search(elemento);
	}

	clear() {
		this.dados.clear();
	}

	length() {
		return this.dados.length();
	}

	values() {
		return this.dados.asArray();
	}

	isEmpty() {
		return this.dados.isEmpty();
	}
}

export default Conjunto;