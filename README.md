# Ecommerce

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

## Pré requisitos

- Node V20
- Git

## Link no Github

[ecommerce mentoria 2.0](https://github.com/sonegobruno/ecommerce-mentoria-2)

```sh
git clone https://github.com/sonegobruno/ecommerce-mentoria-2
cd ecommerce-mentoria-2
npm install
```

## Servir o projeto localmente

```sh
npm start
```

ou

```sh
npx nx serve
```

O projeto será servido por padrão em http://localhost:4200/.

## Executar tarefas independentes

```sh
npx nx <NOME_DA_TAREFA> <NOME_DO_MODULO>
```

Exemplos:

```sh
npx nx test ecommerce
npx nx lint modules-layout
```

## Visualizar Dependency Graph

```sh
npx nx graph
```

## Executar tarefas somente do que foi afetado

```sh
npx nx affected:<NOME_DA_TAREFA>
```

Exemplos:

```sh
npx nx affected:test
npx nx affected:graph
```
