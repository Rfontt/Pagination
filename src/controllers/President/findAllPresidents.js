const express = require('express');
const President = require('../../model/President');

async function FindAllPresidents(req, res) {
	var findAllPresidents = await President.findAll();

	if (findAllPresidents) {
		res.status(200).send({
			Presidents: findAllPresidents
		})
	}else{
		res.status(404).send({
			Message: "Not found"
		})
	}
}

module.exports = FindAllPresidents;