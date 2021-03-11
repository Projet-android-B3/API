require('dotenv').config();
const { Sequelize } = require('sequelize');
const express = require('express');
let routes = require('./app/routes');
let db = require('./app/models');
require('express-group-routes');
const path = require('path');
const Tools = require('./app/utils/Tools');
const bodyParser = require('body-parser');
const cors = require('cors');
// const pathToSwaggerUi = require('swagger-ui-dist').absolutePath();

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true,
}));
app.use(bodyParser.json());
// app.use(express.static(pathToSwaggerUi));

db.sequelize.sync()
    .then(() => {
        console.log('Database initialized');
        routes(app, db);
        app.listen(port, () => {
            console.log(`Listening at http://localhost:${port}`)
        })
    }).catch((error) => {
    console.log(error);
    console.log('Une erreur est survenue dans les dépendances du index.js');
});

