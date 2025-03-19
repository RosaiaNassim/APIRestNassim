import { LivreService } from '../services/livreService.js';

export class LivreController {
    static async getAllLivres(req, res) {
        try {
            const livres = await LivreService.getAllLivres();
            res.end(JSON.stringify(livres));
            console.log("livres", livres);
        }
        
        catch (error) {
            res.statusCode = 500;
            res.end(JSON.stringify({ error: error.message }));
        }
    }

    static async getLivreById(req, res, id) {
        try {
            const livre = await LivreService.getLivreById(id);
            if (!livre) {
                res.statusCode = 404;
                return res.end(JSON.stringify({ error: "Livre non trouvé" }));
            }
            res.end(JSON.stringify(livre));
        } catch (error) {
            res.statusCode = 500;
            res.end(JSON.stringify({ error: error.message }));
        }
    }

    static async addLivre(req, res) {
        try {
            let body = '';
            req.on('data', chunk => body += chunk);
            req.on('end', async () => {
                const { titre, categorie_id } = JSON.parse(body);
                const newLivre = await LivreService.addLivre(titre, categorie_id);
                res.statusCode = 201;
                res.end(JSON.stringify({ message: "Livre ajouté", livre: newLivre }));
            });
        } catch (error) {
            res.statusCode = 500;
            res.end(JSON.stringify({ error: error.message }));
        }
    }

    static async updateLivre(req, res, id) {
        try {
            let body = '';
            req.on('data', chunk => body += chunk);
            req.on('end', async () => {
                const { titre, categorie_id } = JSON.parse(body);
                const updated = await LivreService.updateLivre(id, titre, categorie_id);
                if (!updated) {
                    res.statusCode = 404;
                    return res.end(JSON.stringify({ error: "Livre non trouvé" }));
                }
                res.end(JSON.stringify({ message: "Livre mis à jour" }));
            });
        } catch (error) {
            res.statusCode = 500;
            res.end(JSON.stringify({ error: error.message }));
        }
    }

    static async deleteLivre(req, res, id) {
        try {
            const deleted = await LivreService.deleteLivre(id);
            if (!deleted) {
                res.statusCode = 404;
                return res.end(JSON.stringify({ error: "Livre non trouvé" }));
            }
            res.end(JSON.stringify({ message: "Livre supprimé" }));
        } catch (error) {
            res.statusCode = 500;
            res.end(JSON.stringify({ error: error.message }));
        }
    }
}
