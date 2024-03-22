const http = require("http"); //express faz isso automaticamente
const fs = require("fs");
//biblioteca fs, file system
const porta = 3000;

//criando o servidor
const server = http.createServer((requisicao, resposta) => {
    fs.readFile('cadastro.html', (err, arquivo) => {
        resposta.writeHead(200, {'Content-Type': 'text/html'});
        resposta.write(arquivo);
        return resposta.end();
    })
})

server.listen(porta, () =>{
    console.log('Server running')
})
