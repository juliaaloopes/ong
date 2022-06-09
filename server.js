
const express = require("express");
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const ongRoutes = require("./src/ong/routes.js");

const animal = require('./src/ong/animal');


const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/'));

// "start": "concurrently --kill-others \"nodemon ./src/server.js\" \"npm run dev\"",


app.use(cors());

app.use(express.json());
app.use(express.static('assets'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.get('/animais', function(req, res) {
    res.sendFile(__dirname + "/index.html");
})

/*app.get('/ong/animal', function(req, res) {
    res.send({status: 200});
})*/

app.use('/ong', ongRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));
