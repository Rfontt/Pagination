const express = require('express');
const President = express.Router();
const CreatePresidentController = require('../controllers/President/createPresident');
const FindAllPresidentsController = require('../controllers/President/findAllPresidents');
const PaginationController = require('../controllers/President/Pagination');

President.post('/president', CreatePresidentController);
President.get('/president', FindAllPresidentsController);
President.get('/president/page', PaginationController);

module.exports = President;
