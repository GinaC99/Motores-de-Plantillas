const express = require('express');
const { Server: HTTPServer } = require('http');
const { Server: IOServer, Socket } = require('socket.io');
const noProducts = require('./const')
const Contenedor = require('./API/actions.js')

const PORT = 8080;

const app = express();
const httpServer = new HTTPServer(app)
const io = new IOServer(httpServer);
const ApiProducts = new Contenedor()

const getData = async (req, res) => {
    console.log('Hey esta en el get')
    const answerData = await ApiProducts.getAll();
    return (answerData)
}

const postData = (req, res) => {
    console.log('Esta en el post')
    const Objeto = req.body
    ApiProducts.save(Objeto);
    res.redirect('/');
}

const postMsg = async (req, res) => {
    console.log('Esta en el post de Mensajes')
    let Objeto
    try {
        Objeto = req.body
        Objeto.date = new Date()
        await ApiProducts.mensaje(Objeto);
        res.redirect('/')
    } catch {
        const data = await ApiProducts.allMessages()
        return data
    }
}

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/productos/getData', getData);
app.post('/productos/postData', postData);
app.post('/productos/posMesg', postMsg);

app.get('/', (req, res) => {
    res.render('index')
})

httpServer.listen(PORT, () => {
    console.log('Hey el server esta funcionando en el puerto', PORT)
})

io.on("connection", async (socket) => {
    console.log("Nuevo cliente conectado!");
    const data = await getData()
    const Msgj = await postMsg();
    socket.emit('Productos', data)
    socket.emit('Mensajes', Msgj)
});


