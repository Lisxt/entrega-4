# Projeto Notícias - React Native com Expo
Aplicativo mobile desenvolvido com **React Native + Expo + TypeScript**, simulando um portal de notícias com navegação entre telas e gerenciamento local de notícias.
---
## Sobre o projeto
O aplicativo permite que usuários interajam com notícias através de diferentes perfis:
- Autor → cria, edita e exclui notícias  
- Leitor → visualiza conteúdo  
- Editor → gerencia/publica notícias  
---
## Objetivo
Demonstrar:
- Navegação entre telas com React Navigation  
- CRUD de notícias  
- Uso de banco local com SQLite  
- Organização de um app mobile com Expo  
---
## Tecnologias utilizadas
- React Native  
- Expo  
- TypeScript  
- React Navigation  
- Expo SQLite  
---
## Estrutura do projeto

my-app
├── App.tsx
├── index.ts
├── package.json
├── app.json
├── tsconfig.json
└── src
├── database.ts
└── screens.tsx

---
## Como executar o projeto
### Pré-requisitos
- Node.js  
- npm  
- Expo Go (celular) ou emulador  
---
## Instalação
- Entre na pasta do projeto:

cd my-app

- Instale as dependências:

npm install

---
## Executando o projeto
- Inicie o projeto com limpeza de cache e tunnel:

npx expo start -c –tunnel

---
## Comandos úteis
- Iniciar normalmente:

npx expo start

- Limpar cache:

npx expo start -c

- Executar Android:

npm run android

- Executar iOS:

npm run ios

- Executar Web:

npm run web

---
## Fluxo principal do sistema

Login -> Meu Perfil (Autor) -> Minhas Notícias -> Nova Notícia

---
## Fluxos do aplicativo
### Geral
- Home  
- Cadastro  
- Login  
- Lembrar senha  
- Busca por UF  
- Busca por Tag  
- Detalhe da notícia  
- Comentar  
### Autor
- Login  
- Meu Perfil (Autor)  
- Minhas Notícias  
- Nova Notícia  
- Editar Notícia  
### Leitor
- Login  
- Meu Perfil (Leitor)  
### Editor
- Login  
- Painel do Editor  
- Publicar/Despublicar  
- Editar notícias  
- Meu Perfil  
---
## Banco de dados
Utiliza SQLite local com expo-sqlite.
### Tabela
- noticias
  - id
  - titulo
  - conteudo
### Operações
- CREATE → criar notícia  
- READ → listar notícias  
- UPDATE → editar notícia  
- DELETE → excluir notícia  
---
## Funcionalidades
### Autor
- Criar notícia  
- Editar notícia  
- Excluir notícia  
- Listar notícias  
### Leitor
- Visualizar conteúdo  
### Editor
- Gerenciar/publicar notícias  
---

## Problemas comuns
- Erro de cache:

npx expo start -c

- Problema de conexão:

npx expo start -c –tunnel

- Dependências:

npm install

---
## Observações
- Banco de dados local  
- Algumas telas são protótipos  
- CRUD principal no fluxo do autor  

---
## Autores
- Projeto desenvolvido para fins acadêmicos.

- Alunos: Alice Xavier, Gustavo Xavier, Júlia Clovandi, Luís Felipe e Yuri Clovandi. 
---


