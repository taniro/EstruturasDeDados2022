import TabelaHashListaLigada from "../src/TabelaHashListaLigada";

let f;

beforeEach(() => {
	f = new TabelaHashListaLigada();
});

test("Instanciação", () => {
	f.add("nome", "taniro");
	console.log(f.get("nome"));
	f.add("sobrenome", "chacon");

	console.log(f.get("sobrenome"));

	f.add("sobrenome", "rodrigues");

	console.log(f.get("sobrenome"));

	f.remove("sobrenome");
	console.log(f.get("sobrenome"));
	console.log(f.get("nome"));
});
