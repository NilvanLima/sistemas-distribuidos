const http = require('http')
const url = require('url')
const porta = 3001
const host = '127.0.0.1'

const servidor = http.createServer((requisicao, resposta) => {    
    resposta.writeHead(200, {'Content-Type': 'text/html'})
    resposta.write(requisicao.url)
    //formato de String que passamos dados para o servidor (queryString)
    //forma de passar dado para o servidor, passando nome e RA pela rota
    const p = url.parse(requisicao.url, true).query
    resposta.write('<br/>' + p.nome)
    resposta.write('<br/>' + p.ra)    
    resposta.end()
    //http://localhost:3001/?nome=Niv&ra=40028922
})

//a placa de rede vai ficar escutando na porta, daí vem o listen
servidor.listen(porta, host, () => {console.log('Servidor rodando')})