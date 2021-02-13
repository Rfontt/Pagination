const express = require('express');
const President = require('../../model/President');

async function Pagination(req, res) {
	var page = parseInt(req.query.page);
	var limit = parseInt(req.query.limit);
	var findPresident = await President.findAll();

	const startIndex = (page - 1) * limit; 
	const endIndex = page * limit; 
	const result = {};

	result.presidents = findPresident.slice(startIndex, endIndex);

	if (endIndex < findPresident.length) {
		result.next = {
			page: page + 1,
			limit: limit
		}
	}

	if (startIndex > 0) {
		result.previous = {
			page: page - 1,
			limit: limit
		}
	}

	res.send(result);
}

module.exports = Pagination;



