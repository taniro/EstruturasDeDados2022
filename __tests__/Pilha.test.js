import Pilha from "../src/Pilha";

let p;

beforeEach(
    () => {
        p = new Pilha(5);
    }
);

test("Adicionar um elemento",
    () => {
        p.push("dado")
        expect(p.isEmpty()).toBe(false);
    }
)

test("Stack underflow",
    () => {
        expect(() => {
            p.pop()
        }).toThrowError("stack underflow");
    }
)

test("Stack overflow",
    () => {
        p.push("1");
        p.push("2");
        p.push("3");
        p.push("4");
        p.push("5");
        expect(() => {
            p.push("6")
        }).toThrowError("stack overflow");
    }
)

test("Inicial é vazia",
    () => {
        expect(p.isEmpty()).toBe(true);
    }
)

test(
    "Tamanho Inicial",
    () => {
        expect(p.length()).toBe(0);
    }
);

test(
    "Push(5)",
    () => {
        p.push(5);
        expect(p.length()).toBe(1);
    }
);

test(
    "Push(5), Push(6), Push(7)",
    () => {
        p.push(5);
        p.push(6);
        p.push(7);
        expect(p.length()).toBe(3);
    }
);

test(
    "Push(5), Push(6), Push(7), Pop(), Top()",
    () => {
        p.push(5);
        p.push(6);
        p.push(7);
        p.pop()
        console.log(p.topo, p.dados)
        expect(p.length()).toBe(2);
        expect(p.top()).toBe(6);
    }
);