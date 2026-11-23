Markdown
# Animalec — MiniProj2 (Tarefa 3.2)

Projeto desenvolvido no âmbito da unidade curricular da **Universidade Aberta (UAb)**, que estende a aplicação **Animalec** com a implementação completa (CRUD) das entidades **Patrocinadores (`Sponsors`)** e **Especialistas (`Experts`)**, tanto no Back-end como no Front-end.

**Autor:** Daniel Silva (Aluno n.º 58727)

---

## Estrutura do Repositório

- **`Back End Animalec/`** — API REST desenvolvida em Node.js, Express e MongoDB (Mongoose), com autenticação JWT.
- **`Front End Animalec/`** — Aplicação Web Single Page Application (SPA) desenvolvida em Vue.js, Vuex e Vue Router.

---

## Funcionalidades Implementadas

### Back-end (`Sponsors` e `Experts`)
- **Modelos Mongoose:** `models/sponsor.model.js` e `models/expert.model.js`.
- **Controladores:** Operações CRUD (`get`, `getOne`, `create`, `update`, `delete`) em `controllers/sponsor.controller.js` e `controllers/expert.controller.js`.
- **Rotas REST:** Endpoints `/sponsors` e `/experts` protegidos por autenticação JWT em `routes/sponsor.routes.js` e `routes/expert.routes.js`.

### Front-end (`Sponsors` e `Experts`)
- **Serviços API:** Comunicação com o back-end em `src/api/sponsor.service.js` e `src/api/expert.service.js`.
- **Gestão de Estado (Vuex):** Módulos `src/store/sponsors/` e `src/store/experts/`.
- **Vistas de Back-office:** Listagem, visualização, criação, edição e remoção em `src/views/sponsors/` e `src/views/experts/`.
- **Rotas:** Configuração das rotas de administração em `src/router/index.js`.

---

## Como Executar Localmente

### Pré-requisitos
- Node.js instalado
- MongoDB a correr localmente (`mongodb://localhost:27017/test`)

### 1. Arrancar o Back-end
```bash
cd "Back End Animalec"
npm install
npm start
