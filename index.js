const fs = require('fs');
const http = require('http');
// import http from 'http';
const host = '127.0.0.1';
const port = 3000;

const server = http.createServer(async (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    // console.log(req.headers);
    // res.end(JSON.stringify(req.headers));
    
    const fileData = await readFile();

    res.end(fileData);
});

function readFile(){
     return new Promise((resolve, reject) =>{
         fs.readFile('./index.html', (err, data)=>{
             if(err) reject(err);
             resolve(data);
         });
     })

}

server.listen(port, host, () =>{
    console.log(`Servidor esta activo http://${host}:${port}`);
});