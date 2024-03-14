const http = require('http')
const porta = 3000
const host = '127.0.0.1'

const servidor = http.createServer((requisicao, resposta) => {
    //200 = sucesso, cliente fez um pedido, server encontrou o dado e retornou
    resposta.writeHead(200, {'Content-type': 'text/html'})

    //tratando as rotas
    if(requisicao .url == '/'){
        resposta.write('<h1>Seja bem-vindo!</h1>')
    }else if(requisicao.url == '/teste1'){
        resposta.write('<h1>Teste 1</h1>')
    }else if(requisicao.url == '/teste2'){
        resposta.write('<h1>Teste 2 </h1>')
    }else if(requisicao.url == '/teste2/teste3'){
        resposta.write('<h1>Teste 3</h1>')
    }
    resposta.end()
})

//a placa de rede vai ficar escutando na porta, daí vem o listen
servidor.listen(porta, host, () => {console.log('Servidor rodando')})