import http from 'http';
import { routeHandler } from './routes/routes.js';

const server = http.createServer((req, res) => {
    routeHandler(req, res);
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});

