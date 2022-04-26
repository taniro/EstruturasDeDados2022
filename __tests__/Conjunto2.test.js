import Conjunto from "../src/Conjunto";



let A, B;
beforeEach(() => {
	A = new Conjunto();
	A.add("A");
	A.add("B");
	A.add("C");
	B = new Conjunto();
	B.add("C");
	B.add("D");
	B.add("E");
});

test("union", () => {
	let AuB = A.union(B);
	let resposta = new Conjunto();
	resposta.add("A");
	resposta.add("E");
	resposta.add("D");
	resposta.add("C");
	resposta.add("B");
	expect(AuB.isEqual(resposta)).toBe(true);
	resposta.add("F");
	expect(AuB.isEqual(resposta)).toBe(false);
});
test("contains", () => {
	expect(A.contains(B)).toBe(false);
});

test("Para qualquer conjunto A, ∅ ⊆ A", () => {
	expect(A.contains(new Conjunto())).toBe(true);
});

//novos
test("A ∩ ∅ = ∅", () => {
	let c3 = A.intersection(new Conjunto());
	expect(c3.isEqual(new Conjunto())).toBe(true);
});
test("A U ∅ = A", () => {
	let c3 = A.union(new Conjunto());
	expect(c3.isEqual(A)).toBe(true);
});
test("A ∩ A = A ", () => {
	let c3 = A.intersection(A);
	expect(c3.isEqual(A)).toBe(true);
});
test("A U A = A  ", () => {
	let c3 = A.union(A);
	expect(c3.isEqual(A)).toBe(true);
});
test("A ∩ B = B ∩ A   ", () => {
	let c3 = A.intersection(B);
	let c4 = B.intersection(A);
	expect(c3.isEqual(c4)).toBe(true);
});
test("A U B = B U A   ", () => {
	let c3 = A.union(B);
	let c4 = B.union(A);
	expect(c3.isEqual(c4)).toBe(true);
});

test("A ∩ ( B ∩ C ) = (A ∩ B) ∩ C (leis associativas)", () => {
	let C = new Conjunto();
	C.add("F");
	C.add("E");

	let BiC = B.intersection(C);
	let AiBiC = A.intersection(BiC);

	let AiB = A.intersection(B);
	let AiBiC2 = AiB.intersection(C);

	expect(AiBiC.isEqual(AiBiC2)).toBe(true);
});

test("A U (B U C) = (A U B) U C (leis associativas)", () => {
	let C = new Conjunto();
	C.add("F");
	C.add("E");

	let BuC = B.union(C);
	let AuBuC = A.union(BuC);

	let AuB = A.union(B);
	let AuBuC2 = AuB.union(C);

	expect(AuBuC.isEqual(AuBuC2)).toBe(true);
});

test("A ∩ (B U C) = (A ∩ B) U (A ∩ C) (leis distributivas)", () => {
	let C = new Conjunto();
	C.add("F");
	C.add("E");

	let BuC = B.union(C);
	let AiBuC = A.intersection(BuC);

	let AiB = A.intersection(B);
	let AiC = A.intersection(C);
	let AiBuAiC = AiB.union(AiC);

	expect(AiBuC.isEqual(AiBuAiC)).toBe(true);
});

test("A U (B ∩ C) = (A U B) ∩ (A U C) (leis distributivas)", () => {
	let C = new Conjunto();
	C.add("F");
	C.add("E");

	let BiC = B.intersection(C);
	let AuBiC = A.union(BiC);

	let AuB = A.union(B);
	let AuC = A.union(C);
	let AuBiAuC = AuB.intersection(AuC);

	expect(AuBiC.isEqual(AuBiAuC)).toBe(true);
});

test("A ∩ (A U B) = A (leis da absorção)", () => {
	let AuB = A.union(B);
	let AiAuB = A.intersection(AuB);

	expect(AiAuB.isEqual(A)).toBe(true);
});

test("A U (A ∩ B) = A (leis da absorção)", () => {
	let AiB = A.intersection(B);
	let AuAiB = A.union(AiB);

	expect(AuAiB.isEqual(A)).toBe(true);
});

test("A – (B ∩ C) = (A – B) U (A – C) (leis de DeMorgan)", () => {
	let C = new Conjunto();
	C.add("F");
	C.add("E");

	let BiC = B.intersection(C);
	let AdBiC = A.difference(BiC);

	let AdB = A.difference(B);
	let AdC = A.difference(C);
	let AdBuAdC = AdB.union(AdC);

	expect(AdBiC.isEqual(AdBuAdC)).toBe(true);
});

test("A – (B U C) = (A – B) ∩ (A – C) (leis de DeMorgan)", () => {
	let C = new Conjunto();
	C.add("F");
	C.add("E");

	let BuC = B.union(C);
	let AdBuC = A.difference(BuC);

	let AdB = A.difference(B);
	let AdC = A.difference(C);
	let AdBiAdC = AdB.intersection(AdC);

	expect(AdBuC.isEqual(AdBiAdC)).toBe(true);
});