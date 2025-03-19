import { EmpruntRepository } from '../repositories/empruntRepository.js';

export const EmpruntService = {
    async getAllEmprunts() {
        return await EmpruntRepository.findAll();
    },

    async getEmpruntById(id) {
        return await EmpruntRepository.findById(id);
    },

    async addEmprunt(membre_id, exemplaire_id, date_emprunt, date_retour_prevue, date_retour_effective) {
        return await EmpruntRepository.create(membre_id, exemplaire_id, date_emprunt, date_retour_prevue, date_retour_effective);
    },

    async updateEmprunt(id, date_retour) {
        return await EmpruntRepository.update(id, date_retour);
    },

    async deleteEmprunt(id) {
        return await EmpruntRepository.delete(id);
    }
};
