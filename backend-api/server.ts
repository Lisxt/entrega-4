const express = require('express');
const cors = require('cors');
const { drizzle } = require('drizzle-orm/better-sqlite3');
const { sqliteTable, text, integer } = require('drizzle-orm/sqlite-core');
const { eq } = require('drizzle-orm');
const Database = require('better-sqlite3');

const app = express();
app.use(express.json());
app.use(cors());

// Configuração do SQLite
const sqlite = new Database('database.db');
const db = drizzle(sqlite);

// Tabela
const noticias = sqliteTable('noticias', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  titulo: text('titulo').notNull(),
  conteudo: text('conteudo').notNull(),
});

// Criar tabela se não existir
sqlite.exec(`
  CREATE TABLE IF NOT EXISTS noticias (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT NOT NULL,
    conteudo TEXT NOT NULL
  );
`);

// Rotas
app.get('/noticias', (req, res) => {
  const result = db.select().from(noticias).all();
  res.json(result);
});

app.post('/noticias', (req, res) => {
  const { titulo, conteudo } = req.body;
  db.insert(noticias).values({ titulo, conteudo }).run();
  res.status(201).json({ message: "Criado" });
});

app.put('/noticias/:id', (req, res) => {
  const { id } = req.params;
  const { titulo, conteudo } = req.body;
  db.update(noticias).set({ titulo, conteudo }).where(eq(noticias.id, Number(id))).run();
  res.json({ message: "Atualizado" });
});

app.delete('/noticias/:id', (req, res) => {
  const { id } = req.params;
  db.delete(noticias).where(eq(noticias.id, Number(id))).run();
  res.json({ message: "Removido" });
});

// OUVIR EM 0.0.0.0 para o celular/ngrok achar
app.listen(3000, '0.0.0.0', () => {
  console.log('🚀 API online para toda a rede!');
});