const express = require("express");
const { expressLayouts } = require('express-ejs-layouts');
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

// settings
app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../app/views"));

const ruta = __dirname + '/app/views/app.ejs' // ponga la ruta COMPLETA de su carpeta en donde se encuentre el archivo "app.ejs"

// no cambiar nada de estas definiciones
const { dirname } = require("path");

// midel
app.use(bodyParser.urlencoded({extended: false}));

module.exports = app;
