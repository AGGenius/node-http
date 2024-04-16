const data = require('./data.js');
const http = require('node:http');

const server = http.createServer((req, res) => {
    console.log('Request recieved');
    res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <main>
            <h1>${data.webdata.tittle}</h1>
            <h2>${data.webdata.subtittle}</h2>
            <p>${data.webdata.mainText}</p>
        </main>
    </body>
    </html>`);
});

server.listen(0, () => {
    console.log(`Server listener active at port http://localhost:${server.address().port}`);
})