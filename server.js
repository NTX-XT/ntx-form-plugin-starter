import * as ngrok from 'ngrok';
import * as http from 'http-server';
import pkg from 'open';

const port = 8888

http.createServer({
    root: './dist',
    cors: true,
}).listen(port)

ngrok.connect(port).then((tunnel) => {
    console.log(tunnel);
    pkg(tunnel);
})