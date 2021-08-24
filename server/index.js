import express from 'express';
import { Builder, Nuxt } from 'nuxt';
import apiRouter from './controllers/api';
let app = express();
let host = process.env.HOST || '127.0.0.1';
let port = Number(process.env.PORT) || 3000;
export default class NuxtExpressServer {
    constructor() {
    }
    start() {
        // Import and Set Nuxt.js options
        const config = require('../nuxt.config.js');
        config.dev = !(process.env.NODE_ENV === 'production');
        // Init Nuxt.js
        const nuxt = new Nuxt(config);
        // Build only in dev mode
        if (config.dev) {
            const builder = new Builder(nuxt);
            builder.build();
        }
        app.use("/api", apiRouter);
        // Give nuxt middleware to express
        app.use(nuxt.render);
        // Listen the server
        app.listen(port, host);
        console.log('Server listening on http://' + host + ':' + port);
    }
}
const server = new NuxtExpressServer();
server.start();
