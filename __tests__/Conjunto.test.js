import Conjunto from "../src/Conjunto";

let c;

beforeEach(() => {
	c = new Conjunto();
});

test("Instanciacao", () => {
	expect(c.length()).toBe(0);
	expect(c.isEmpty()).toBe(true);
});

test("Adição de um elemento", () => {
	c.add("A");
	expect(c.length()).toBe(1);
	expect(c.add("A")).toBe(false);
	c.add("B");
	expect(c.length()).toBe(2);
	c.add("C");
	expect(c.length()).toBe(3);
	c.delete("A");
	expect(c.length()).toBe(2);
	expect(c.values()).toStrictEqual(["C", "B"]);
	expect(c.delete("F")).toBe(false);
});

test("'a' pertence a C?", () => {
	expect(c.has("a")).toBe(false);
	c.add("a");
	expect(c.has("a")).toBe(true);
});
