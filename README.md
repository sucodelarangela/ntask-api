# NTask (Node Task)

Gerenciador de tarefas dividido em 2 projetos: o primeiro será uma API servidora dos dados, e o segundo será um cliente web consumidor do primeiro.

O projeto vai usar o padrão de organização MVR (_Model-View-Router_) utilizando o módulo `consign`.

Funcionalidades:

- Listagem de tarefas do usuário;
- Consulta, cadastro, exclusão e alteração de uma tarefa do usuário;
- Consulta, cadastro e exclusão de um usuário;
- Autenticação de usuário;
- Página de documentação da API.

Passos da implementação:

- [x] Instalação do `express` e configuraçao inicial do app ([https://expressjs.com/](https://expressjs.com/))
- [x] Criação de novo endpoint teste
- [x] Instalação do `consign`
- [x] Organização do carregamento em módulos (padrão MVR), com diretórios _routes_ e _models_ e arquivos _middlewares.js_ e _boot.js_
- [x] Refatoraçao do _index.js_ utilizando o `consign`
- [x] Instalação do `SQLite3` ([https://www.sqlite.org/download.html](https://www.sqlite.org/download.html))
- [x] Instalação do `sequelize` ([https://sequelize.org](https://sequelize.org))
- [x] Arquivo de configuração de conexão entre `Sequelize` e `SQLite3` (_config.js_)
- [x] Arquivo responsável pela conexão (_db.js_)
- [x] Autenticação para inicialização do servidor da API
- [x] Modelagem da aplicação com Sequelize
- [x] Definindo associações das tabelas
- [x] Organização das rotas das tarefas
- [x] Implementação de um middleware
- [x] CRUD do recurso `/tasks`
- [x] Refatoração do middleware existente e instalação do middleware `body-parser`
- [ ] Rotas de gestão de usuários

---

Developed with 🧡 by [@sucodelarangela 🍊](https://angelacaldas.vercel.app) (it's a me!) with the guidance of software engineer [Caio Ribeiro Pereira](https://www.linkedin.com/in/caioribeiropereira/).
