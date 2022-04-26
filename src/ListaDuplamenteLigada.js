/**
 * Implementação de uma Lista Duplamente Ligada
 * @author {https://github.com/taniro}
 */

 class Node {
	/**
	 * Construtor do Nó que será usado para implementar uma Lista Duplamente Ligada
	 * @param {any} [dado]  - Novo elemento que será inserido no Nó
	 * Os nós apontam para 2 direções: O proximo nó e o anterior
	 */
	constructor(dado) {
		this.dado = dado;
		this.anterior = null;
		this.proximo = null;
	}
}

class ListaDuplamenteLigada {
	/**
	 * Construtor de uma Lista Duplamente Ligada
	 * Definindo quem é a cabeça[head] e quem é a cauda[tail] para implementar a recursividade na Lista
	 */
	constructor() {
		this.head = null;
		this.tail = null;
	}

	/**
	 * Insere um Novo Nó no inicio da Lista
	 * @param {any} [dado] - Novo nó que está sendo inserindo na Lista
	 * Caso a Lista esteja vazia, o primeiro nó a ser inserido será a cabeça e a cauda ao mesmo tempo
	 */
	add(dado) {
		let novo_no = new Node(dado);
		if (this.isEmpty()) {
			this.head = novo_no;
			this.tail = novo_no;
			novo_no.anterior = null;
			novo_no.proximo = null;
		} else {
			novo_no.proximo = this.head;
			novo_no.anterior = null;
			this.head.anterior = novo_no;
			this.head = novo_no;
		}
	}

	/**
	 * Insere um Novo Nó no final da Lista
	 * @param {any} [dado] - Novo nó que está sendo inserindo no final da Lista
	 * Caso a Lista esteja vazia, o primeiro nó a ser inserido será a cabeça e a cauda ao mesmo tempo
	 */
	append(dado) {
		let novo_no = new Node(dado);
		if (this.isEmpty()) {
			this.head = novo_no;
			this.tail = novo_no;
			novo_no.anterior = null;
			novo_no.proximo = null;
		} else {
			novo_no.proximo = null;
			novo_no.anterior = this.tail;
			this.tail.proximo = novo_no;
			this.tail = novo_no;
		}
	}

	/**
	 * Remove o Nó que se encontra no começo da Lista.
	 *
	 */
	removeFirst() {
		if (!this.isEmpty()) {
			if (this.length() === 1) {
				this.head = null;
				this.tail = null;
			} else {
				this.head = this.head.proximo;
				this.head.anterior = null;
			}
		}
	}

	/**
	 * Remove um Nó específico da Lista
	 * @param {any} [dado] - Nó que será removido
	 * @returns {boolean} - Retorna true se o Nó foi removido, e false se ele não foi removido
	 */
	remove(dado) {
		if (!this.isEmpty()) {
			let current = this.head;
			let next = this.head.proximo;
			let last = this.tail;
			let aux;

			if (current.dado === dado) {
				return this.removeFirst();
			} else if (last.dado === dado) {
				return this.removeLast();
			} else {
				while (next != null) {
					if (next.dado === dado) {
						aux = next.proximo;
						current.proximo = next.proximo;
						aux.anterior = current;
						return true;
					}
					//iteração
					current = next;
					next = next.proximo;
				}
			}
		}

		return false;
	}

	/**
	 * Remove o Nó que está no final da Lista
	 *
	 */
	removeLast() {
		if (!this.isEmpty()) {
			if (this.length() === 1) {
				this.head = null;
				this.tail = null;
			} else {
				this.tail = this.tail.anterior;
				this.tail.proximo = null;
			}
		}
	}

	/**
	 * Verifica se a Lista está fazia ou não
	 * @returns {boolean} - Retorna [true] se a fila estiver vazia e [false] caso ela não esteja
	 */
	isEmpty() {
		return this.head === null;
	}

	/**
	 * Formatação da Lista em String
	 * @returns {string} - Lista retornada em formato de string
	 */
	toString() {
		let tmp = this.head;
		let texto = "";

		while (tmp != null) {
			texto += tmp.dado + (tmp.proximo ? "->" : "");
			tmp = tmp.proximo;
		}

		return texto;
	}

	/**
	 * Retorna o tamanho da Lista
	 * @returns {number} - Tamanho da Lista
	 */
	length() {
		let cont = 0;
		let tmp = this.head;

		while (tmp != null) {
			tmp = tmp.proximo;
			cont++;
		}
		return cont;
	}
    
	/**
	 * Insere um Novo Nó em um local específico da Lista
	 * @param {number} [posicao] - O índicie que o novo nó será inserido
	 * @param {any} [dado] - Novo Nó a ser inserido na Lista
	 */
	addAt(posicao, dado) {
		if (posicao >= this.length()) {
			//adicionando no final
			this.append(dado);
		} else {
			if (posicao <= 0) {
				//adicionando no inicio
				this.add(dado);
			} else {
				let novo_no = new Node(dado);
				let i = 1;

				let aux_a = this.head;
				let aux_b = this.head.proximo;

				while (i != posicao) {
					//iteração
					aux_a = aux_b;
					aux_b = aux_b.proximo;
					i++;
				}
				aux_a.proximo = novo_no;
				novo_no.proximo = aux_b;
				novo_no.anterior = aux_a;
				aux_b.anterior = novo_no;
			}
		}
	}

	/**
	 * Formatação da Lista em um Array
	 * @returns {any} - Lista em formato de array
	 */
	asArray() {
		let current = this.head;
		let dados = [];

		while (current != null) {
			dados.push(current.dado);
			current = current.proximo;
		}

		return dados;
	}

	/**
	 * Procura um Dado específico na Lista
	 * @param {any} [dado] - Dado que será procurado na Lista
	 * @returns {boolean} - Retorna [true] caso o dado tenha sido encontrado e [false] se ele não existir
	 */
	search(dado) {
		if (this.isEmpty()) {
			return false;
		} else {
			let tmp = this.head;
			while (tmp !== null) {
				if (tmp.dado == dado) {
					return true;
				}
				//iteração
				tmp = tmp.proximo;
			}
			return false;
		}
	}

	clear() {
		this.head = null;
		this.tail = null;
	}
}

export default ListaDuplamenteLigada;