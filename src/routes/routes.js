const express = require('express');
const routes = express.Router();
const Countries = require('./countries');
const President = require('./president');

routes.use(Countries);
routes.use(President);

module.exports = routes;
