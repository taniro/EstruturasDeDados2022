import Fila from "../src/Fila";


let f;

beforeEach(
    () => {
        f = new Fila(5);
    }
);

test("Adicionar um elemento",
    () => {
        f.enqueue("A")
        expect(f.isEmpty()).toBe(false);
    }
)

test("Overflow",()=>{
    f.enqueue("A")
    f.enqueue("B")
    f.enqueue("C")
    f.enqueue("D")
    f.enqueue("E")
    expect(() => {
        f.enqueue("F")
    }).toThrowError("queue overflow");
})

test("underflow",()=>{

    expect(() => {
        f.dequeue()
    }).toThrowError("queue underflow");
})

test("length",()=>{
    f.enqueue("A")
    f.enqueue("b")
    f.enqueue("c")
    expect (f.length()).toBe(3)
})

test("Front size",()=>{
    f.enqueue("a");
    f.enqueue("b");
    f.enqueue("c");
    f.dequeue();

    expect(f.front()).toBe("b")
    expect(f.length()).toBe(2)
})

test("enqueuefront",
    ()=>{
        f.enqueue("a")
        f.enqueue("b")
        f.dequeue()

        expect(f.front()).toBe("b")
    }
)

























