"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const serve_static_1 = __importDefault(require("serve-static"));
class Server {
    constructor(port) {
        this.port = port;
    }
    start() {
        const app = express_1.default();
        app.use(serve_static_1.default("public")); // middleware pour localiser les ressources statiques
        app.get('/', (req, res) => {
            res.setHeader('content-type', 'text/html');
            res.send('gestion des books');
        });
        app.get('/personne/:code', (req, res) => {
            res.setHeader('content-type', 'application/json');
            var infos = {
                nom: "de amorin", prenom: "umberto", email: "bertik@sfr.fr", code: req.params.code
            };
            res.send(JSON.stringify(infos));
        });
        app.listen(this.port, () => {
            console.log("Le serveur pour la gestion des books tourne sur http://localhost:" + this.port);
        });
    }
}
exports.default = Server;
