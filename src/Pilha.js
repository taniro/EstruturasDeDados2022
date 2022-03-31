class Pilha {
    constructor(size = 10) {
        this.topo = 0
        this.dados = []
        this.maxSize = size
    }

    push(dado) {
        if (!this.isFull()) {
            this.dados[this.topo] = dado
            this.topo++
        } else {
            throw new Error("stack overflow")
        }
    }

    pop() {
        if (!this.isEmpty()) {
            this.topo--
        } else {
            throw new Error("stack underflow")
        }
    }

    top() {
        if (!this.isEmpty()) {
            return this.dados[this.topo-1]
        }
    }

    isFull() {
        return this.length() === this.maxSize
    }

    isEmpty() {
        return this.length() === 0
    }

    length() {
        return this.topo;
    }

    toString() {

    }
}

export default Pilha;