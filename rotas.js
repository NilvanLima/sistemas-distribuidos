const express = require("express");
const app = express();
const porta = 3000;
const host = "127.0.0.1";

// o '/' é a tela inicial
app.get("/", (requisicao, resposta) => {
  resposta.send("Pagina Inicial");
});

//rota cadastro
app.get('/cadastro', (requisicao, resposta) => {
  resposta.send("Cadastro de Usuario");
});

app.get('/consulta', (requisicao, resposta) => {
  resposta.send("Consultar Usuario");
});

app.get('/apagar', (requisicao, resposta) => {
    resposta.send('Apagar Usuario');
})

app.get('/alterar', (requisicao, resposta) => {
    resposta.send('Alterar Usuario');
})

app.listen(porta, host, () => {
    console.log('Servidor rodando')
})
