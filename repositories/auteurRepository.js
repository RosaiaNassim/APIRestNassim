import { db } from '../config/database.js';

export const AuteurRepository = {
    async findAll() {
        return await db.all('SELECT * FROM AUTEUR');
    },

    async findById(id) {
        return await db.get('SELECT * FROM AUTEUR WHERE id = ?', [id]);
    },

    async create(nom, prenom) {
        return await db.run('INSERT INTO AUTEUR (nom, prenom) VALUES (?, ?)', [nom, prenom]);
    },

    async update(id, nom, prenom) {
        return await db.run('UPDATE AUTEUR SET nom = ?, prenom = ? WHERE id = ?', [nom, prenom, id]);
    },

    async delete(id) {
        return await db.run('DELETE FROM AUTEUR WHERE id = ?', [id]);
    }
};
