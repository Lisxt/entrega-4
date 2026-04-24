# Projeto Notícias - React Native com Expo
Este projeto é uma aplicação de notícias composta por um Backend (API) robusto em Node.js e um Frontend (Mobile) em React Native. O ecossistema centraliza toda a lógica de negócios e persistência de dados no servidor, acessível via rede local.
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
## 🛠️ Tecnologias
-Mobile: React Native (Expo), Axios (Consumo de API).
-Backend (API): Node.js, Express, Drizzle ORM, SQLite.
-Linguagem: TypeScript (Tipagem estrita em todo o ecossistema).
---
## Estrutura do projeto

entrega-4
├── backend-api
│   ├── database.db
│   ├── package-lock.json
│   ├── package.json
│   ├── server.ts
│   └── tsconfig.json
├── my-app
│   ├── src/
│   ├── app.json
│   ├── App.tsx
│   ├── index.ts
│   ├── package-lock.json
│   ├── package.json
│   └── tsconfig.json
├── .gitignore
└── README.md

---
## ⚙️ Configurações Importantes (Rede Local)

Para que o aplicativo no celular consiga se comunicar com a API no computador sem o uso de ferramentas de túnel (como ngrok), siga os passos abaixo:

### 1. Perfil da Rede no Windows
O Windows bloqueia conexões externas se a rede estiver em modo "Público".
1. Vá em *Configurações > Rede e Internet > Wi-Fi*.
2. Clique na rede conectada e altere o *Tipo de perfil de rede* para *Privado*.

### 2. Regra de Entrada no Firewall
É necessário liberar a porta 3000 para receber conexões do celular:
1. Abra o *Firewall do Windows com Segurança Avançada*.
2. Vá em *Regras de Entrada* > *Nova Regra*.
3. Selecione *Porta* > *TCP* > Portas locais específicas: *3000*.
4. Selecione *Permitir a conexão* e dê o nome de API-Noticias.
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


