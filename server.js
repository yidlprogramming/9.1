const http = require('http');

const PORT = 8080;

const server = http.createServer(function(req, res){
    res.writeHead(200);
    res.end('my first server');
});


server.listen(PORT, 'localhost', function(){
    console.log(`server is listening at http:localhost:${PORT}`);
});