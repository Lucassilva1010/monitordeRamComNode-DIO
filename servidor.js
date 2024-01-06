const http = require('http');//Importação do servidor
//melhorando o codigo 
const host = 'http://localhost'
const porta = 3000

const status = require('./pcRam.js')


// console.log(http)

http.createServer((req, res) => {//criação de um servidor
    res.end('<h1>Lucas Silva</h1>')//resposta de um servidor
}).listen(porta, () => console.log(`Servidor disponivel em ${host}:${porta} ---- ${status}`))//configuração de uma porta