import { db } from '../config/database.js';

export const LivreRepository = {
    async findAll() {
        return await db.all('SELECT * FROM LIVRE');
    },

    async findById(id) {
        return await db.get('SELECT * FROM LIVRE WHERE id = ?', [id]);
    },

    async create(titre, categorie_id) {
        return await db.run('INSERT INTO LIVRE (titre, categorie_id) VALUES (?, ?)', [titre, categorie_id]);
    }
};

