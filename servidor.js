const http =  require('http');
const express = require('express');
const aplicacao =  express();
const servidorHttp = http.createServer(aplicacao);
const io = require('socket.io')(servidorHttp);

io.addListener('connection', (socket) => {
    console.log("Um usuário conectou");
    socket.addListener('nova mensagem', (msg) =>{
        io.emit('nova mensagem', msg);
    });
})

aplicacao.use(express.static('public'));

const porta = 1000;

//configura porta do server e rede em que funcionará o chat. 
servidorHttp.listen(porta, /*'000.000.00.00',*/ () => {
    console.log('Servidor HTTP rodando na porta: ' + porta);
    //console.log('Servidor HTTP rodando em' + 'http://000.000.00.00:' + porta);
});