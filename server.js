// require express, database connection and routes
const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

// restablish PORT and store express in app to utilize 
const PORT = 3001;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

