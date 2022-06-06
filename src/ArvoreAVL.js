class Node {
	constructor(key) {
		this.key = key;
		this.dir = null;
		this.esq = null;
	}
}

class ArvoreAVL {
	constructor() {
		this.root = null;
	}

	insert(key) {
		this.root = this.insertNode(this.root, key);
	}

	balance(node) {
		return this.heightNode(node.dir) - this.heightNode(node.esq);
	}

	insertNode(node, key) {
		/* 1. Insere normalmente */
		if (node === null) {
			node = new Node(key);
		} else if (key < node.key) {
			node.esq = this.insertNode(node.esq, key);
		} else if (key > node.key) {
			node.dir = this.insertNode(node.dir, key);
		}

		/* 2. Verifica o equilibrio novo no. */

		var equilibrio = this.balance(node);

		console.log("Equilibrio do node " + node.key + " é " + equilibrio);

		/*
				[D]
     	 [C]           [E]
	[B]
[A]

			[D]
	[B]           	[E]
[A]      [C]
*/

		// Rotacao a direita
		if (
			equilibrio < -1 &&
			/*dado < raiz->esq->dado*/ this.balance(node.esq) < 0
		) {
			console.log("Realizando rotacao a direita.");
			node = this.rotacaoDireita(node);
		}
		// Rotacao a esquerda
		if (
			equilibrio > 1 &&
			/*dado > raiz->dir->dado*/ this.balance(node.dir) > 0
		) {
			console.log("Realizando rotacao a esquerda.");
			node = this.rotacaoEsquerda(node);
		}
		// Rotacao dupla a direita
		if (
			equilibrio < -1 &&
			/*dado > raiz->esq->dado*/ this.balance(node.esq) > 0
		) {
			console.log("Realizando rotacao dupla a direita.");
			node.esq = this.rotacaoEsquerda(node.esq);
			node = this.rotacaoDireita(node);
		}
		// Rotacao dupla a esquerda
		if (
			equilibrio > 1 &&
			/*dado < raiz->dir->dado*/ this.balance(node.dir) < 0
		) {
			console.log("Realizando rotacao dupla a esquerda.");
			node.dir = this.rotacaoDireita(node.dir);
			node = this.rotacaoEsquerda(node);
		}
		return node;
	}

	remove(key) {
		root = this.removeNode(root, key);
	}

	findMinNode(node) {
		while (node && node.esq !== null) {
			node = node.esq;
		}
		return node;
	}

	findMaxNode(node) {
		while (node && node.dir !== null) {
			node = node.dir;
		}
		return node;
	}

	removeNode(node, key) {
		if (node === null) {
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

	/*

		   Y                                       X 
		  / \                                   /     \
		 X   T3      rotacaoDireita (Y)        Z       Y
		/ \          - - - - - - - - ->      /  \     /  \ 
	  Z   T2                                A    B   T2  T3
	/  \
   A   B
    
	*/
	rotacaoDireita(y) {
		var x = y.esq;
		y.esq = x.dir;
		x.dir = y;
		return x;
	}

	/*
		  Y                               X
		/  \                            /   \ 
		T1   X     rotacaoEsquerda(Y)   Y      Z
			/  \   - - - - - - - ->    / \    / \
		   T2   Z                     T1  T2 A   B
			   / \
			   A  B
	*/
	rotacaoEsquerda(y) {
		var x = y.dir;
		y.dir = x.esq;
		x.esq = y;

		return x;
	}
}

let arvore = new ArvoreAVL();

//console.log("Altura é " + arvore.height());

arvore.insert(50);
//console.log("Altura é " + arvore.height());
arvore.insert(30);
//arvore.insert(10);
arvore.insert(40);
//arvore.insert(80);
///arvore.insert(90);
//arvore.insert(100);
//
arvore.preOrder();
//arvore.inOrder();
//arvore.posOrder();

console.log("Altura é " + arvore.height());
