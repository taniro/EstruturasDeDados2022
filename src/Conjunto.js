import ListaDuplamenteLigada from "./ListaDuplamenteLigada";

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

	union(anotherset) {
		let AuB = new Conjunto();
		let valuesA = this.values();
		let valuesB = anotherset.values();

		for (const i of valuesA) {
			AuB.add(i);
		}

		for (const i of valuesB) {
			AuB.add(i);
		}

		return AuB;
	}

    intersection(anotherset){
		let AiB = new Conjunto();

		let valoresB = anotherset.values();

		for (const i of valoresB) {
			if (this.has(i)) {
				AiB.add(i);
			}
		}

		return AiB;
    }

    contains(anotherset){
        let valoresB = anotherset.values();

		for (const j of valoresB) {
			if (!this.has(j)) {
				return false;
			}
		}
		return true;
    }





    

    isEqual(anotherset){
        return this.contains(anotherset) && anotherset.contains(this);
    }

    difference(anotherset) {
		let AdB = new Conjunto();
		let valoresA = this.values();
		let valoresB = anotherset.values();

		for (const i of valoresA) {
			AdB.add(i);
		}

		for (const i of valoresB) {
			AdB.delete(i);
		}

		return AdB;
	}

}

export default Conjunto;