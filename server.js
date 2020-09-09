const express = require('express');
require('./models/db')
const Buku = require('./models/modelBuku');
const bodyParser = require("body-parser");
const homeRoute = require('./controllers.js/routes');


const app = express();



app.set('view engine', 'ejs');
app.use(express.static('views'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', homeRoute);


const PORT = 8000;

// STARTING THE SERVER
app.listen(PORT, ()=>{
    console.log('This app is rrunning on:', PORT);
})