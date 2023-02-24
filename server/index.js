import express from 'express';
import https from 'https';
import fs from 'fs';
import serveIndex from 'serve-index';
import cors from 'cors';
import open from 'open';

const app = express();
const port = 8888;

app.use((req, res, next) => {
  res.set("Access-Control-Allow-Private-Network", "true");
  next();
});

app.use(cors());
app.use((req, res, next) => (req.method === 'OPTIONS') ? res.end() : next());
app.use(express.static('dist'), serveIndex('dist', { icons: true }));

https.createServer({
  key: fs.readFileSync('./server/dev-key.pem'),
  cert: fs.readFileSync('./server/dev-cert.pem'),
}, app).listen(port, () => {
  const url = `https://127.0.0.1:${port}`;
  console.log(`Local server listening @ ${url}`);
  open(url);
});