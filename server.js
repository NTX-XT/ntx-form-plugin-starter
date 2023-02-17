import * as ngrok from 'ngrok';
import * as http from 'http-server';
import pkg from 'open';

const port = 8888

// ngrok.connect({
//     addr: 8888,
//     configPath: './ngrok.yml'
// }).then((tunnel) => {
const server = http.createServer({
    root: './dist',
    cors: true,
});
server.listen(port)
    //     console.log(tunnel);
    //     pkg(tunnel);
    // });