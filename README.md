# Blog Post Manager - Projeto Angular

Este projeto é um sistema de gerenciamento de postagens de blog, desenvolvido com **Angular** no frontend e **Cypress** para testes automatizados. O sistema consome a API pública **JSONPlaceholder** para realizar operações CRUD no endpoint `https://jsonplaceholder.typicode.com/posts`.

## 📋 Funcionalidades

### 1. **Tela Inicial: Listagem de Postagens**
- Exibição de uma tabela com os campos:
  - **ID**
  - **Título** (title)
  - **Corpo** (body)
  - **UserID** (userId)
- Botões disponíveis:
  - **Editar**: Navega para a tela de edição do post.
  - **Excluir**: Apaga a postagem selecionada após confirmação.

### 2. **Tela de Inserção/Edição**
- Formulário com os seguintes campos:
  - **Título** (title): Campo obrigatório, mínimo de 3 caracteres.
  - **Corpo** (body): Campo obrigatório, mínimo de 5 caracteres.
  - **UserID** (userId): Campo obrigatório, aceita somente valores numéricos.
- Botões disponíveis:
  - **Salvar**: Valida os campos e envia os dados para o backend.
  - **Cancelar**: Retorna à tela de listagem sem salvar alterações.

### 3. **Fluxos de Operações**
- As operações seguem os métodos da API **JSONPlaceholder**:
  - **GET** `/posts`: Lista todas as postagens.
  - **POST** `/posts`: Insere uma nova postagem.
  - **PUT** `/posts/{id}`: Atualiza uma postagem existente.
  - **DELETE** `/posts/{id}`: Exclui uma postagem.

## 🧪 Testes Automatizados com Cypress

### Cenários Testados
1. **Inserção**: 
   - Preenchimento do formulário de inserção com dados válidos.
   - Envio dos dados e validação do retorno esperado da API.

2. **Edição**: 
   - Seleção de uma postagem existente.
   - Navegação para a tela de edição, alteração dos campos e salvamento.

## 🚀 Instruções para Instalação e Execução

### Pré-requisitos
- Node.js (versão 16 ou superior)
- Angular CLI
- NPM (ou Yarn)

### Passos para Instalação
1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   cd blog-postagens
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   ng serve
   ```
4. Acesse o projeto no navegador: `http://localhost:4200`.

### Executar Testes Automatizados com Cypress
1. Instale as dependências do Cypress:
   ```bash
   npm install cypress --save-dev
   ```
2. Abra a interface do Cypress:
   ```bash
   npx cypress open
   ```
3. Execute os testes disponíveis na pasta `cypress/integration`.

## 📖 Documentação Complementar
- **JSONPlaceholder API**: [https://jsonplaceholder.typicode.com/](https://jsonplaceholder.typicode.com/)
