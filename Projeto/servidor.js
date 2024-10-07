const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
console.log(req.url, req.method);

res.setHeader('Tipo-Conteudo', 'texto/html');

let caminho = './views/';


switch(req.url){
    case '/':
        caminho += 'index.html';
        res.statusCode = 200;
        break;
 
    case '/login':
        caminho += 'login.html';
        res.statusCode = 200;
        break;

    case '/criarConta':
        caminho += 'criarConta.html';
            res.statusCode = 200;
            break;
     
    case '/produtos':
        caminho += 'produtos.html';
        res.statusCode = 200;
        break;
 
    case '/carrinho':
        caminho += 'carrinho.html';
            res.statusCode = 200;
            break;
     
 
    default:
        caminho += '404.html';
        res.statusCode = 404;
        break;
}



fs.readFile(caminho, (err, data) =>{
    if(err){
        console.log(err);
        res.end();
    } else {
        res.end(data);
    }
});
});

server.listen(3000, 'localhost', () => {
    console.log("Ouvindo requisição na porta 3000");
    });
    