import { db } from '../config/database.js';

export const EmpruntRepository = {
    async findAll() {
        return await db.all('SELECT * FROM EMPRUNT');
    },

    async findById(id) {
        return await db.get('SELECT * FROM EMPRUNT WHERE id = ?', [id]);
    },

    async create(membre_id, exemplaire_id, date_emprunt, date_retour_prevue, date_retour_effective) {
        return await db.run('INSERT INTO EMPRUNT (membre_id, exemplaire_id, date_emprunt, date_retour_prevue, date_retour_effective) VALUES (?, ?, ?, ?, ?)',
            [membre_id, exemplaire_id, date_emprunt, date_retour_prevue, date_retour_effective]);
    },

    async update(id, date_retour_effective) {
        return await db.run('UPDATE EMPRUNT SET date_retour_effective = ? WHERE id = ?', [date_retour_effective, id]);
    },

    async delete(id) {
        return await db.run('DELETE FROM EMPRUNT WHERE id = ?', [id]);
    },

    async findEmpruntsByMembreId(id) {
        return await db.all('SELECT * FROM EMPRUNT WHERE membre_id = ?', [id]);
    },

    async findEmpruntsByExemplaireId(id) {
        return await db.all('SELECT * FROM EMPRUNT WHERE exemplaire_id = ?', [id]);
    }


};
