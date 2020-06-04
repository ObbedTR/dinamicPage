
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose');

const PUERTO = process.env.PORT || 3000;

//posible error
let artistRouter = require('./routes/artista')
//posible error

const app = express();

app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials/');

app.use('/', artistRouter);

mongoose.Promise = global.Promise;
const cadena = 'mongodb+srv://artist:artist@tarangojaime-gulld.azure.mongodb.net/test';
mongoose.connect(cadena,{useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=>{
        console.log('Conexión con Mongo exitosa');
    })
    .catch(err=> console.log(err));


app.listen(PUERTO, ()=>{
    console.log('El sitio web ha sido debidamente iniciado')
})