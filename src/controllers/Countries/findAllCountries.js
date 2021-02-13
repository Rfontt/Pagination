const express = require('express');
const Countries = require('../../model/Countries');

async function FindAllCountries(req, res) {
	var findAllCountries = await Countries.findAll();

	if (findAllCountries) {
		res.status(200).send({
			Countries: findAllCountries
		})
	}else{
		res.status(404).send({
			Message: "Not found"
		})
	}
}

module.exports = FindAllCountries;