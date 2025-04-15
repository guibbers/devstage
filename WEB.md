# DevStage Web

**DevStage Web** é a interface frontend do projeto DevStage, desenvolvida com [Next.js](https://nextjs.org/) e [TypeScript](https://www.typescriptlang.org/). Esta aplicação fornece uma plataforma moderna e eficiente para gerenciar ambientes de desenvolvimento.

## 🚀 Tecnologias Utilizadas

- [Next.js](https://nextjs.org/) – Framework React para aplicações web
- [TypeScript](https://www.typescriptlang.org/) – Superset do JavaScript que adiciona tipagem estática
- [Tailwind CSS](https://tailwindcss.com/) – Framework CSS utilitário para estilização rápida
- [PostCSS](https://postcss.org/) – Ferramenta para transformar estilos com plugins JS
- [Orval](https://orval.dev/) – Gerador de código para APIs OpenAPI

## 📁 Estrutura do Projeto

- `src/` – Contém os componentes, páginas e lógica da aplicação
- `public/` – Arquivos estáticos acessíveis publicamente
- `next.config.ts` – Configurações do Next.js
- `orval.config.ts` – Configurações do Orval para geração de código a partir de OpenAPI
- `package.json` – Dependências e scripts do projeto
- `tsconfig.json` – Configurações do compilador TypeScript

## ▶️ Como Executar o Projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [Yarn](https://yarnpkg.com/) ou [npm](https://www.npmjs.com/)

### Passos para Rodar a Aplicação

1. Clone o repositório:

   ```bash
   git clone https://github.com/guibbers/devstage-web.git
   cd devstage-web
   ```

2. Instale as dependências:

   ```bash
   yarn install
   # ou
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   yarn dev
   # ou
   npm run dev
   ```

4. Acesse a aplicação no navegador:

   ```
   http://localhost:3000
   ```

   A página será recarregada automaticamente conforme você fizer alterações no código.

## 📄 Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

---