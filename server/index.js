// dependecies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');


// middlewares
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


// controller
const register = require('./controller/register');

app.use('/register',register);