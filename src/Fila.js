class Fila {
    constructor(size){
        this.inicio = 0;
        this.fim = 0;
        this.dados = [];
        this.maxSize = size;
    }

    enqueue(dado){
        if(!this.isFull()){
            this.dados[this.fim] = dado
            this.fim ++
        }else{
            throw new Error("queue overflow")
        }
    }
    dequeue(){
        if(!this.isEmpty()){
            this.inicio++
        }else{
            throw new Error("queue underflow")
        }
    }
    front(){
        if(!this.isEmpty()){
            return this.dados[this.inicio]
        }
    }
    isEmpty(){
        return this.length() === 0
    }
    isFull(){
        return this.length() === this.maxSize
    }
    length(){
        return this.fim - this.inicio
    }
    clear(){
        this.inicio = 0
        this.fim = 0
    }
    toString(){}
}

export default Fila;