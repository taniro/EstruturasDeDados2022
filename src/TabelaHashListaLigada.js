import ListaDuplamenteLigada from "./ListaDuplamenteLigada";

class TabelaHashListaLigada {
	constructor() {
		this.tabela = [];
	}

	funcaoHash(palavra) {
		let soma = 0;
		for (let x = 0; x < palavra.length; x++) {
			soma += palavra.charCodeAt(x) * 31;
		}
		return soma % 17;
	}

	add(chave, dado) {
		let indiceHash = this.funcaoHash(chave);

		//se a lista não está criada, crie a lista
		if (
			this.tabela[indiceHash] === null ||
			this.tabela[indiceHash] === undefined
		) {
			this.tabela[indiceHash] = new ListaDuplamenteLigada();
		}

		//se a chave está na tabela, remover o antigo para substituir
		if (this.tabela[indiceHash].search(chave) !== undefined) {
			this.remove(chave);
		}

		//adicione na lista
		this.tabela[indiceHash].append(chave, dado);
	}

	remove(chave) {
		//obtem o valor de hash
		let indiceHash = this.funcaoHash(chave);

		//se a lista não está criada o valor não está na tabela, retorne false
		if (
			this.tabela[indiceHash] === null ||
			this.tabela[indiceHash] === undefined
		) {
			return false;
		}

		//remova da lista se encontrar
		return this.tabela[indiceHash].remove(chave);
	}

	get(chave) {
		let indiceHash = this.funcaoHash(chave);

		//se a lista não está criada, retorne indefinido
		if (
			this.tabela[indiceHash] === null ||
			this.tabela[indiceHash] === undefined
		) {
			return undefined;
		}

		//senao, faça uma busca na lista e retorne o valor encontrado
		return this.tabela[indiceHash].search(chave);
	}
}

export default TabelaHashListaLigada;
