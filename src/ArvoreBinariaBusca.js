class Node {
	constructor(key) {
		this.key = key;
		this.dir = null;
		this.esq = null;
	}
}

class ArvoreBinariaBusca {
	constructor() {
		this.root = null;
	}

	insert(key) {
		let newNode = new Node(key);
		if (this.root === null) {
			this.root = newNode;
		} else {
			this.insertNode(this.root, newNode);
		}
	}
	insertNode(node, newNode) {
		if (newNode.key < node.key) {
			if (node.esq === null) {
				node.esq = newNode;
			} else {
				this.insertNode(node.esq, newNode);
			}
		} else {
			if (node.dir === null) {
				node.dir = newNode;
			} else {
				this.insertNode(node.dir, newNode);
			}
		}
	}

	remove(key) {
		this.root = this.removeNode(this.root, key);
	}

	findMinNode(node) {
		while (node && node.esq !== null) {
			node = node.esq;
		}
		return node;
	}

	removeNode(node, key) {
		if (this.node === null) {
			return null;
		}
		if (key < node.key) {
			node.esq = this.removeNode(node.esq, key);
			return node;
		} else if (key > node.key) {
			node.dir = this.removeNode(node.dir, key);
			return node;
		} else {
			//caso 1
			if (node.esq === null && node.dir === null) {
				node = null;
				return node;
			}
			//caso 2
			if (node.esq === null) {
				node = node.dir;
				return node;
			} else if (node.dir === null) {
				node = node.esq;
				return node;
			}
			//caso 3
			var aux = this.findMinNode(node.dir);
			node.key = aux.key;
			node.dir = this.removeNode(node.dir, aux.key);
			return node;
		}
	}

	height() {
		if (this.root === null) return -1;
		// altura da árvore vazia
		else {
			return this.heightNode(this.root);
		}
	}

	heightNode(raiz) {
		if (raiz === null) return -1;
		// altura da árvore vazia
		else {
			let altura_esquerda = this.heightNode(raiz.esq);
			let altura_direita = this.heightNode(raiz.dir);
			if (altura_esquerda < altura_direita) {
				return altura_direita + 1;
			} else {
				return altura_esquerda + 1;
			}
		}
	}

	preOrder() {
		this.preOrderNode(this.root);
	}

	preOrderNode(node) {
		if (node !== null) {
			console.log(node.key);
			this.preOrderNode(node.esq);
			this.preOrderNode(node.dir);
		}
	}

	inOrder() {
		this.inOrderNode(this.root);
	}

	inOrderNode(node) {
		if (node !== null) {
			this.inOrderNode(node.esq);
			console.log(node.key);
			this.inOrderNode(node.dir);
		}
	}

	posOrder() {
		this.posOrderNode(this.root);
	}

	posOrderNode(node) {
		if (node !== null) {
			this.posOrderNode(node.esq);
			this.posOrderNode(node.dir);
			console.log(node.key);
		}
	}
}

let arvore = new ArvoreBinariaBusca();

console.log("Altura é " + arvore.height());

arvore.insert(50);
console.log("Altura é " + arvore.height());
arvore.insert(30);
arvore.insert(10);
arvore.insert(40);
arvore.insert(80);
arvore.insert(90);

arvore.preOrder();
arvore.inOrder();
arvore.posOrder();

console.log("Altura é " + arvore.heightNode(arvore.root));
