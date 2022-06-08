
const express = require("express");
const serveStatic = require("serve-static")
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const ongRoutes = require("./ong/routes.js");

const app = express();
//const port = process.env.PORT || 8000;

app.use(serveStatic(path.join(__dirname, 'dist')));
const port = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());
app.use(express.static('assets'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api/ong', ongRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));
