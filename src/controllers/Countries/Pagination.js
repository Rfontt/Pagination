const express = require('express');
const Countries = require('../../model/Countries');

async function Pagination(req, res) {
	var page = parseInt(req.query.page);
	var limit = parseInt(req.query.limit);
	var FindCountries = await Countries.findAll({include: { 
			association: 'president',
			attributes: ['name'],
		}});

	const startIndex = (page - 1) * limit;
	const endIndex = page * limit;
	const results = {};

	results.countries = FindCountries.slice(startIndex, endIndex);

	if (endIndex < FindCountries.length) {
		results.next = {
			page: page + 1,
			limit: limit
		}
	}

	if (startIndex > 0) {
		results.previous = {
			page: page - 1,
			limit: limit
		}
	}

	res.send(results);
}

module.exports = Pagination;
