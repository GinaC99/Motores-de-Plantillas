const express = require('express')
const noProducts = require('../const')
const Contenedor = require('../API/actions.js')

const Products = express();
const ApiProducts = new Contenedor()

Products.get('/', async (req, res) => {
    console.log('Hey esta en el get')
    const answerData = await ApiProducts.getAll();
    answerData ? res.render('productos',{
        productos: answerData,
    }) : res.send({ error: noProducts })
})

Products.post('/', (req, res) => {
    console.log('Esta en el post')
    const Objeto = req.body
    ApiProducts.save(Objeto);
    res.redirect('/');
})
module.exports = Products;
