// src/database.ts
import * as SQLite from 'expo-sqlite';

// Abre ou cria o banco de dados local
const db = SQLite.openDatabaseSync('portal_noticias.db');

// Entidade Notícia (apenas para tipagem)
export type Noticia = {
  id: number;
  titulo: string;
  conteudo: string;
};

// ==========================================
// INICIALIZAÇÃO DA TABELA
// ==========================================
export const setupDatabase = () => {
  db.execSync(`
    CREATE TABLE IF NOT EXISTS noticias (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      titulo TEXT NOT NULL,
      conteudo TEXT NOT NULL
    );
  `);
};

// ==========================================
// C.R.U.D. MINIMALISTA
// ==========================================

// CREATE
export const insertNoticia = (titulo: string, conteudo: string) => {
  db.runSync('INSERT INTO noticias (titulo, conteudo) VALUES (?, ?)', [titulo, conteudo]);
};

// READ
export const getNoticias = (): Noticia[] => {
  return db.getAllSync('SELECT * FROM noticias');
};

// UPDATE
export const updateNoticia = (id: number, titulo: string, conteudo: string) => {
  db.runSync('UPDATE noticias SET titulo = ?, conteudo = ? WHERE id = ?', [titulo, conteudo, id]);
};

// DELETE
export const deleteNoticia = (id: number) => {
  db.runSync('DELETE FROM noticias WHERE id = ?', [id]);
};