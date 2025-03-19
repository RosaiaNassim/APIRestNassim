import { AuteurService } from '../services/auteurService.js';

export const AuteurController = {
    async getAllAuteurs(req, res) {
        const auteurs = await AuteurService.getAllAuteurs();
        res.end(JSON.stringify(auteurs));
    },

    async getAuteurById(req, res, id) {
        const auteur = await AuteurService.getAuteurById(id);
        res.end(JSON.stringify(auteur));
    },

    async addAuteur(req, res) {
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', async () => {
            const { nom, prenom } = JSON.parse(body);
            console.log(nom, prenom);
            
            await AuteurService.addAuteur(nom, prenom);
            res.end(JSON.stringify({ message: "Auteur ajouté" }));
        });
    },

    async updateAuteur(req, res, id) {
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', async () => {
            const { nom, prenom } = JSON.parse(body);
            await AuteurService.updateAuteur(id, nom, prenom);
            res.end(JSON.stringify({ message: "Auteur mis à jour" }));
        });
    },

    async deleteAuteur(req, res, id) {
        await AuteurService.deleteAuteur(id);
        res.end(JSON.stringify({ message: "Auteur supprimé" }));
    }
};


