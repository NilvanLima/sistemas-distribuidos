const http = require('http')

//na ordem, requisição e o server dá uma resposta
//REQUISIÇÃO GET
http.createServer((requisicao, resposta) => {
    resposta.writeHead(200, {'Content-Type': 'text/plain'})
    resposta.write('Ola, mundo \n')
    resposta.end()

}).listen(3000)