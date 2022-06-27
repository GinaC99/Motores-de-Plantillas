const express = require('express');
const Products = require('./routes/showRoutes.js')
// config motor plantillas
const app = express();
const PORT = 8080;


app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/productos', Products);

app.get('/', (req, res) => {
    res.render('captureValuesForm')
})
app.listen(PORT, () => {
    console.log(`Server is runnign in the port ${PORT}`);
});


