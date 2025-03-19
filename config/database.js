import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(fileURLToPath(import.meta.url));

// Connexion à la base SQLite
export const db = await open({
    filename: join(__dirname, './bibliotheque.db'),
    driver: sqlite3.Database
});

// Fonction pour initialiser la base de données
export async function initializeDatabase() {
    const sqlFilePath = path.join(__dirname, '../tables.sql');
    const sql = fs.readFileSync(sqlFilePath, 'utf-8');
    await db.exec(sql);
    console.log("Database initialized with tables from 'tables.sql'.");
}

// Appel de la fonction pour initialiser la base de données
initializeDatabase().catch((err) => {
    console.error("Error initializing database:", err);
});