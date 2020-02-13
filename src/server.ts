import express, { Request, Response } from 'express';
import serveStatic from "serve-static";


export default class Server {

    constructor(private port: number) {

    }

    public start(): void {
        const app = express();
        app.use(serveStatic("public")); // middleware pour localiser les ressources statiques
        app.get('/', (req: Request, res: Response) => {
            res.setHeader('content-type', 'text/html');
            res.send('gestion des books');
        });

        app.get('/personne/:code', (req: Request, res: Response) => {
            res.setHeader('content-type', 'application/json');

            var infos = {
                nom: "de amorin", prenom: "umberto", email: "bertik@sfr.fr", code: req.params.code
            }
            res.send(JSON.stringify(infos));
        });

         app.listen(this.port, () => {
            console.log("Le serveur pour la gestion des books tourne sur http://localhost:" + this.port);
        });

    } 
}



