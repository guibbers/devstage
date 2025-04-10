# DevStage Server

Este é o backend do **DevStage**, uma plataforma para auxiliar no desenvolvimento e acompanhamento de estágios. Desenvolvido com **Node.js** e **TypeScript**, este projeto tem como objetivo fornecer uma API robusta e escalável para suportar funcionalidades como cadastro de usuários, gerenciamento de atividades e acompanhamento de progresso.

## ✨ Tecnologias

- Node.js
- TypeScript
- Express
- Prisma (ORM)
- PostgreSQL (via Docker)
- Docker Compose

## 🚀 Como rodar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [Yarn](https://classic.yarnpkg.com/) ou npm

### Clone o repositório

```bash
git clone https://github.com/guibbers/devstage-server.git
cd devstage-server
```
## Instale as dependências
yarn install
# ou
npm install

## Configure o ambiente

Crie um arquivo .env com base no .env.example (caso exista) ou adicione manualmente as variáveis necessárias, como a URL do banco de dados:

```bash
  DATABASE_URL="postgresql://postgres:postgres@localhost:5432/devstage"
  PORT=3333
```

## Suba os serviços com Docker
```bash
  docker-compose up -d
```

## Execute as migrações do Prisma
```bash
  npx prisma migrate dev
```
## Inicie o servidor
```bash
  yarn dev
  # ou
  npm run dev
```

## 🧪 Testes da API
Você pode testar os endpoints usando o arquivo api.http incluído no projeto, com suporte para REST Client extension no VSCode.

## 🗃 Estrutura de pastas
```bash 
src/
├── config/         # Configurações da aplicação
├── modules/        # Domínios e regras de negócio
├── shared/         # Recursos compartilhados (ex: middlewares, utils, erros)
└── server.ts       # Entrada principal do servidor
```
📄 Licença
Este projeto está licenciado sob a MIT License.

Feito por [@guibbers](https://github.com/guibbers)
