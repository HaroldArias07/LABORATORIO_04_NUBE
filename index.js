var express = require('express');
var app = express();

app.get('/', c_inicio);
app.get('/clientes', c_clientes);
app.get('/productos', c_productos);

function c_inicio(req, res) {
    res.send('<h1>Bienvenido Harold Arias</h1>')
}

function c_clientes(req, res) {
    res.send('<h1>Cliente 1: Luis Alberto</h1> <h1>Cliente 2: Benito Fernandez</h1> <h1>Cliente 3: Jaime Farfan</h1>')
}

function c_productos(req, res) {
    res.send('<h1>Producto 1: Arroz</h1> <h1>Producto 2: Azucar</h1> <h1>Producto 3: Agua</h1>')
}

function c_server(req, res) {
    console.log('port:5000');
}

var server = app.listen(5000, c_server);