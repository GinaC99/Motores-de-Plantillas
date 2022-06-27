const express = require('express');
const handlebars = require('express-handlebars');
const Products = require('./routes/showRoutes.js')
// config motor plantillas
const app = express();
const PORT = 8080;

app.engine('hbs',
    handlebars.engine({
        extname: '.hbs',
        defaultLayout: 'index.hbs',
    }))

app.set('view engine', 'hbs');
app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/productos', Products);

app.get('/', (req, res) => {
    res.render('captureValuesForm')
})
app.listen(PORT, () => {
    console.log(`Server is runnign in the port ${PORT}`);
});


