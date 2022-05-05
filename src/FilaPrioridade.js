class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
	}
}

class FilaPrioridade {
	constructor() {
		this.tree = [];
		this.size = 0;

		this.tree[0] = new Node(0, 99999999);
	}


	/*
	Incremente o valor de size;
	Dados[size] recebe o valor inserido;
	Compare a prioridade desse novo nó com seu pai.
	Se a prioridade do pai for menor que filho, coloque o pai na posição do filho.
	Repita as etapas 3 e 4 até que a prioridade do pai seja maior ou igual ao filho.	*/

	add(dado, prioridade) {
		let novo_no = new Node(dado, prioridade);
		this.tree[++this.size] = novo_no;

		let pos_filho = this.size;
		let pos_pai = Math.trunc(pos_filho / 2);

		while (this.tree[pos_filho].priority > this.tree[pos_pai].priority) {
			let aux = this.tree[pos_filho];
			this.tree[pos_filho] = this.tree[pos_pai];
			this.tree[pos_pai] =  aux;
			
			pos_filho = pos_pai;
			pos_pai = Math.trunc(pos_filho / 2);
		}

		//this.tree[pos_filho] = node;
	}

	/*
	Remover o nó raiz.
	Mover o último elemento do último nível para a raiz.
	Comparar o valor desse pai com seu filho.
	Se o valor do pai for menor que filho, troque-os.
	Repita as etapas 3 e 4 até que a prioridade do pai seja maior ou igual ao filho.
	*/
	remove() {
		let elemento_maior_prioridade = this.tree[1];
		let ultimo = this.tree[this.size];
		this.tree[1] = ultimo;
		this.size = this.size - 1;
		let pos_pai;
		for (pos_pai = 1; pos_pai * 2 <= this.size; pos_pai = pos_filho) {
			pos_filho = pos_pai * 2;
			if (
				(pos_filho != this.size) 
				&&
				(this.tree[pos_filho].priority < this.tree[pos_filho + 1].priority)) {
				pos_filho++;
			}
			if (ultimo.priority < this.tree[pos_filho].priority) {
				this.tree[pos_pai] = this.tree[pos_filho];
			} else {
				break;
			}
		}
		this.tree[pos_pai] = ultimo;
		return elemento_maior_prioridade;
	}

	asArray() {
	}
}

export default FilaPrioridade;
