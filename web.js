var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    console.log('Request : ' + req.url);
    if(req.url === '/index'|| req.url === '/'){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        fs.createReadStream(__dirname+'/index.html').pipe(res);
    } 
    else if (req.url === '/about'|| req.url === '/'){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        fs.createReadStream(__dirname+'/about.html').pipe(res);
    }
    else if (req.url === '/cv'|| req.url === '/'){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        fs.createReadStream(__dirname+'/cv.html').pipe(res);
    }
    else if (req.url === '/galeri'|| req.url === '/'){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        fs.createReadStream(__dirname+'/galeri.html').pipe(res);
    }
    else if (req.url === '/portofolio'|| req.url === '/'){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        fs.createReadStream(__dirname+'/portofolio.html').pipe(res);
    } 
    else {
        res.writeHead(404, {'Content-Type':'text/html'});
        fs.createReadStream(__dirname+'/error.html').pipe(res);
    }
});

server.listen(2707);
console.log('Server Aktif. Listening port 2707.');