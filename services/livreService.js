import { LivreRepository } from '../repositories/livreRepository.js';

export class LivreService {
    static async getAllLivres() {
        return await LivreRepository.findAll();
    }

    static async getLivreById(id) {
        return await LivreRepository.findById(id);
    }

    static async addLivre(titre, categorie_id) {
        return await LivreRepository.create(titre, categorie_id);
    }

    static async updateLivre(id, titre, categorie_id) {
        return await LivreRepository.update(id, titre, categorie_id);
    }

    static async deleteLivre(id) {
        return await LivreRepository.delete(id);
    }
}
