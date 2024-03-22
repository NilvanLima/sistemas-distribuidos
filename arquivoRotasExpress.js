const express = require('express')
const app = express()
const fs = require('fs')
const porta = 3000
const host = '127.0.0.1'

app.get('/', (requisicao, resposta) =>{
    fs.readFile('inicial.html', (err, arquivo) =>{
        resposta.writeHead(200, {'Content-Type': 'text/html'})
        resposta.write(arquivo)
        return resposta.end()
    })
})
app.get('/alterar', (requisicao, resposta) =>{
    fs.readFile('alterar.html', (err, arquivo) =>{
        resposta.writeHead(200, {'Content-Type': 'text/html'})
        resposta.write(arquivo)
        return resposta.end()
    })
})
app.get('/apagar', (requisicao, resposta) =>{
    fs.readFile('apagar.html', (err, arquivo) =>{
        resposta.writeHead(200, {'Content-Type': 'text/html'})
        resposta.write(arquivo)
        return resposta.end()
    })
})
app.get('/cadastrar', (requisicao, resposta) =>{
    fs.readFile('cadastrar.html', (err, arquivo) =>{
        resposta.writeHead(200, {'Content-Type': 'text/html'})
        resposta.write(arquivo)
        return resposta.end()
    })
})
app.get('/consultar', (requisicao, resposta) =>{
    fs.readFile('consultar.html', (err, arquivo) =>{
        resposta.writeHead(200, {'Content-Type': 'text/html'})
        resposta.write(arquivo)
        return resposta.end()
    })
})

app.listen(porta, host, () =>{
    console.log('Server running')
})