const express = require('express');
const Countries = express.Router();

const CreateCountrieController = require('../controllers/Countries/createCountrie');
const FindAllCountriesController = require('../controllers/Countries/findAllCountries');
const PaginationController = require('../controllers/Countries/Pagination');


Countries.post("/countrie/:president_id", CreateCountrieController);
Countries.get("/countrie", FindAllCountriesController);
Countries.get("/countrie/page", PaginationController);

module.exports = Countries;
