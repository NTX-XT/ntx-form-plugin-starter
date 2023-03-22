import express from 'express';
import https from 'https';
import fs from 'fs';
import serveIndex from 'serve-index';
import cors from 'cors';
import open from 'open';
import { Command } from 'commander'
import { fileURLToPath } from 'node:url'

const program = new Command();
const options = program
    .description('A local server for NAC form plugins development')
    .requiredOption('-f, --folder <path>', 'Aboslute or relative path to the folder containing the js plugins')
    .option('-p, --port <port>', 'The server prot (defaults to 8888)', '8080')
    .parse().opts()

const app = express();

app.use((req, res, next) => {
        res.set("Access-Control-Allow-Private-Network", "true");
        next();
    })
    .use(cors())
    .use((req, res, next) => (req.method === 'OPTIONS') ? res.end() : next())
    .use(express.static(options.folder), serveIndex(options.folder, { icons: true }));

https.createServer({
    key: fs.readFileSync(fileURLToPath(new URL("./key.pem",
        import.meta.url))),
    cert: fs.readFileSync(fileURLToPath(new URL("./cert.pem",
        import.meta.url))),
}, app).listen(options.port, () => {
    const url = `https://127.0.0.1:${options.port}`;
    console.log(`Local server listening @ ${url}`);
    open(url);
});