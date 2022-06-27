const express = require('express');
const Products = require('./routes/showRoutes.js')

const app = express();

app.set('views','./views');
app.set('view engine','pug');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/productos', Products)

app.get('/',(req,res)=>{
    res.render('index.pug')
})

const PORT =8080;
app.listen(PORT,()=>{
    console.log('Hey el servirdor is runnign in ',PORT)
})