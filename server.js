const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.send('Hello World!');
});

//Servidor
app.listen(3000, () => {
    console.log('Servicios Operando al 100%')
});

const home = require('./routes/home');
app.use("/home", home);