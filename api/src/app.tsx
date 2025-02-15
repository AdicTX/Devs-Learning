import express from "express";
const bodyParser = require('body-parser');

const server = express();

server.use(bodyParser.json());
server.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
server.get("/", (_req, res) => {
    console.log("Ok");
    res.send("Server Run");
});


//Para correr sólo el servidor => ./package.json:   "start": "node build/app.js""

const PORT = 3001;
server.listen(PORT, () => {      
    console.log('%s listening at', PORT); 
}); 



//Para correr el servidor y la Db conectados desde index.js => "start": "node index.js"

//module.exports = server;
