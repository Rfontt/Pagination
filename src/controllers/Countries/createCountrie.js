const express = require('express');
const Countries = require('../../model/Countries');

async function CreateCountrie(req, res) {
	var { president_id } = req.params;
	var { name, localization } = req.body;

	if (president_id == undefined || name == undefined || localization == undefined) {
		res.status(400).send({
			Message: "Datas undefined"
		})
	}

	var CountrieAlreadyHavePresident = await Countries.findOne({ where: { president_id: president_id} });

	if (CountrieAlreadyHavePresident) {
		res.status(406).send({
			Message: "Countrie already have a president"
		})

	}else{
		var createCountrie = await Countries.create({ president_id, name, localization });

		if (createCountrie) {
			res.status(201).send({
				Message: "Created with sucess"
			})
		}else{
			res.status(500).send({
				Message: "Error"
			})
		}
	}
}

module.exports = CreateCountrie;