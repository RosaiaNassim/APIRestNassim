import { parse } from 'url';
import { LivreController } from '../controllers/livreController.js';
import { AuteurController } from '../controllers/auteurController.js';
import { EmpruntController } from '../controllers/empruntController.js';

export const routeHandler = async (req, res) => {
    const { pathname } = parse(req.url, true);
    const method = req.method;
    const idMatch = pathname.match(/^\/api\/(livres|auteurs|emprunts)\/(\d+)$/);
    
    res.setHeader('Content-Type', 'application/json');

    try {
        // 📚 Routes Livres
        if (pathname === '/api/livres' && method === 'GET') return await LivreController.getAllLivres(req, res);
        if (pathname === '/api/livres' && method === 'POST') return await LivreController.addLivre(req, res);
        if (idMatch && idMatch[1] === 'livres' && method === 'GET') return await LivreController.getLivreById(req, res, idMatch[2]);
        if (idMatch && idMatch[1] === 'livres' && method === 'PUT') return await LivreController.updateLivre(req, res, idMatch[2]);
        if (idMatch && idMatch[1] === 'livres' && method === 'DELETE') return await LivreController.deleteLivre(req, res, idMatch[2]);

        // ✍️ Routes Auteurs
        if (pathname === '/api/auteurs' && method === 'GET') return await AuteurController.getAllAuteurs(req, res);
        if (pathname === '/api/auteurs' && method === 'POST') return await AuteurController.addAuteur(req, res);
        if (idMatch && idMatch[1] === 'auteurs' && method === 'GET') return await AuteurController.getAuteurById(req, res, idMatch[2]);
        if (idMatch && idMatch[1] === 'auteurs' && method === 'PUT') return await AuteurController.updateAuteur(req, res, idMatch[2]);
        if (idMatch && idMatch[1] === 'auteurs' && method === 'DELETE') return await AuteurController.deleteAuteur(req, res, idMatch[2]);

        // 📆 Routes Emprunts
        if (pathname === '/api/emprunts' && method === 'GET') return await EmpruntController.getAllEmprunts(req, res);
        if (pathname === '/api/emprunts' && method === 'POST') return await EmpruntController.addEmprunt(req, res);
        if (idMatch && idMatch[1] === 'emprunts' && method === 'GET') return await EmpruntController.getEmpruntById(req, res, idMatch[2]);
        if (idMatch && idMatch[1] === 'emprunts' && method === 'PUT') return await EmpruntController.updateEmprunt(req, res, idMatch[2]);
        if (idMatch && idMatch[1] === 'emprunts' && method === 'DELETE') return await EmpruntController.deleteEmprunt(req, res, idMatch[2]);

        // ❌ Route inconnue
        res.statusCode = 404;
        res.end(JSON.stringify({ error: "Route non trouvée" }));
    } catch (err) {
        res.statusCode = 500;
        res.end(JSON.stringify({ error: err.message }));
    }
};


