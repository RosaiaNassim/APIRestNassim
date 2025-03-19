import { AuteurRepository } from '../repositories/auteurRepository.js';

export const AuteurService = {
    async getAllAuteurs() {
        return await AuteurRepository.findAll();
    },

    async getAuteurById(id) {
        return await AuteurRepository.findById(id);
    },

    async addAuteur(nom, prenom) {
        return await AuteurRepository.create(nom, prenom);
    },

    async updateAuteur(id, nom, prenom) {
        return await AuteurRepository.update(id, nom, prenom);
    },

    async deleteAuteur(id) {
        return await AuteurRepository.delete(id);
    }
};
