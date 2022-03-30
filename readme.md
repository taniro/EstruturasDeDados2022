# Estruturas de Dados com JavaScript

Este reposítório contém todos códigos utilizados durante a disciplina de Estruturas de Dados do curso de Análise e Desenvolvimento de Sistemas/UFRN no semestre 2022.1.

A disciplina de Estruturas de dados segue uma abordagem de desenvolvimento dirigido as testes (TDD) onde para cada Tipo Abstrato de Dados:

1. Será descrito o Tipo Abstrato de Dados e suas funções independente de saber como elas são implementadas ou como os dados serão armazenados.
2. Serão criados pequenos testes para validar o conceito do Tipo de Dado Abstrato. (note que não temos a intenção de realizar todos os testes possíveis)
3. É implementada a classe, em JavaScript, para representar o Tipo Abstrato de Dados.

Utilize esse repositório caso não deseje configurar um novo.

Caso deseje clonar esse repositório execute os seguintes comandos:

```
git clone https://github.com/taniro/EstruturasDeDados2022.git
npm install
npm test
npm run docs
```

Caso deseje criar um novo repositório execute os seguintes comandos:

```
npx gitignore node
npm init -y
git init
npm install --save-dev jest
npm install --save-dev babel-jest @babel/core @babel/preset-env @babel/plugin-proposal-class-properties @types/jest
```

Crie o arquivo babel.config.js e adicione as informações abaixo no arquivo:

```
module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				targets: {
					node: 'current',
				},
			},
		],
	],
	plugins: ["@babel/plugin-proposal-class-properties"]
};
```

Edite o arquivo packege.json e altere a propriedade "scripts" para:

```
"scripts": {
	"test": "jest"
},
```

Para preparar o ambiente para criação de documentação execute o seguinte comando:

```
npm install --save-dev jsdoc
```

Crie as pastas "src" e "\_\_tests\_\_".
A pasta src deverá ser utilizada para guardar seu código.
A pasta "\_\_tests\_\_" deverá ser usada para guardar seus arquivos de teste".

Crie o arquivo jsdoc.json e adicione as informações abaixo no arquivo:

```
{
	"source": {
		"include": [
			"./src"
		],
		"includePattern": ".js$",
		"excludePattern": "(node_modules/|docs)"
	},
	"plugins": [
		"plugins/markdown"
	],
	"opts": {
		"encoding": "utf8",
		"readme": "./readme.md",
		"destination": "docs/",
		"recurse": true,
		"verbose": true
	}
}
```

Modifique o arquivo package.json para adicionar o script de criação de documentação:

```
	"scripts": {
		"test": "jest",
		"docs": "./node_modules/.bin/jsdoc -c jsdoc.json"
	},
```

Modifique o arquivo .gitignore para que o git ignore os arquivos da documentação. Adicione ao final do arquivo:

```
# Arquivos de documentação
/docs
```

Crie o arquivo readme.md e adicione algum texto.

Para executar os testes:

```
npm test
```

Para criar a documentação:

```
npm run docs
```
