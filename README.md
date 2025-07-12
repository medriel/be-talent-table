# 📝 Teste Técnico Front-end – BeTalent

Este projeto foi desenvolvido como parte do processo seletivo para Front-end na **BeTalent**.

### 📌 Sobre o Projeto

O desafio consiste em construir a visualização de uma tabela de funcionários, com dados provenientes de uma API simulada utilizando **json-server**.  
O layout e os requisitos foram definidos no [Figma disponibilizado pela BeTalent](https://www.figma.com/design/yw6th52zE9bubewc6ayTg5/Teste-Técnico-Frontend-BeTalent).

---

### 🔎 Funcionalidades Implementadas

- Listagem de funcionários com:
  - Foto (ou fallback com iniciais)
  - Nome
  - Cargo
  - Data de admissão (formatada)
  - Telefone (formatado)
- Input de pesquisa que filtra por:
  - Nome
  - Cargo
  - Telefone
  - Data de admissão
- Layout responsivo conforme mockup do Figma
- Separação de responsabilidades via componentes, hooks, utils e services
- Tipagem estática com **TypeScript**

---

### 💻 Tecnologias Utilizadas

- [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [Axios](https://axios-http.com/) para requisições HTTP
- [json-server](https://www.npmjs.com/package/json-server) como API mock

---

### ⚙️ Pré-requisitos

Antes de iniciar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/) ou [npm](https://www.npmjs.com/)
- json-server (pode ser instalado globalmente ou usado via `npx`)

---

### ▶️ Como Rodar o Projeto

1. **Clone este repositório**

```bash
git clone https://github.com/medriel/be-talent-table.git
cd be-talent-table
```

2. **Instale as dependências**

```bash
yarn install
# ou
npm install
```

3. **Inicie a API simulada**

Navegue até a pasta `mock` e rode o servidor:

```bash
json-server --watch db.json
# ou
npx json-server --watch mock/db.json
```

A API estará disponível em [http://localhost:3000](http://localhost:3000).

4. **Execute a aplicação**

Em outro terminal, rode:

```bash
yarn dev
# ou
npm run dev
```

Acesse [http://localhost:5173](http://localhost:5173) no navegador.

---

### 🗂️ Estrutura de Pastas

```
src
├── components    # Componentes reutilizáveis
├── hooks         # Hooks customizados (ex: useEmployees)
├── pages         # Páginas principais (ex: Home)
├── service       # Configuração de API (axios)
├── types         # Tipagens globais (ex: Employee)
├── utils         # Funções utilitárias (formatadores)
```

---

### ✨ Diferenciais Aplicados

- ✅ Projeto totalmente escrito em TypeScript
- ✅ Criação de **hooks customizados** para lógica de negócio (`useEmployees`)
- ✅ Separação de **utils** para formatação de dados
- ✅ Fallback de avatar com **iniciais** quando a foto não está disponível
- ✅ Layout responsivo com base no Figma
- ✅ Código limpo, reutilizável e organizado

---

### 🚀 Melhorias Futuras

- Implementar testes unitários com **Jest** e **React Testing Library**
- Adicionar paginação à tabela
- Suporte à **i18n** (internacionalização)
- Utilizar biblioteca como **libphonenumber-js** para formatação de telefone

---

### 📄 Licença

Este projeto foi desenvolvido exclusivamente para fins de **avaliação técnica** e **não possui fins comerciais**.

---
