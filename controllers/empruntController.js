import { EmpruntService } from '../services/empruntService.js';

export const EmpruntController = {
    async getAllEmprunts(req, res) {
        const emprunts = await EmpruntService.getAllEmprunts();
        res.end(JSON.stringify(emprunts));
    },

    async getEmpruntById(req, res, id) {
        const emprunt = await EmpruntService.getEmpruntById(id);
        res.end(JSON.stringify(emprunt));
    },

    async addEmprunt(req, res) {
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', async () => {
            const { membre_id, exemplaire_id, date_emprunt, date_retour_prevue, date_retour_effective } = JSON.parse(body)[0];
            await EmpruntService.addEmprunt(membre_id, exemplaire_id, date_emprunt, date_retour_prevue, date_retour_effective);
            res.end(JSON.stringify({ message: "Emprunt ajouté" }));
        });
    },

    async updateEmprunt(req, res, id) {
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', async () => {
            const { date_retour } = JSON.parse(body);
            await EmpruntService.updateEmprunt(id, date_retour);
            res.end(JSON.stringify({ message: "Emprunt mis à jour" }));
        });
    },

    async deleteEmprunt(req, res, id) {
        await EmpruntService.deleteEmprunt(id);
        res.end(JSON.stringify({ message: "Emprunt supprimé" }));
    }
};

