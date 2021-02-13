const express = require('express');
const President = require('../../model/President');

async function CreatePresident(req, res) {
	var { name, date_exit } = req.body;

	if (name == undefined || date_exit == undefined) {
		res.status(400).send({
			Message: "Datas undefined"
		})
	}

	var presidentAlreadyExists = await President.findOne({ where: { name: name} });

	if (presidentAlreadyExists) {
		res.status(406).send({
			Message: "President already exists"
		})

	}else{
		var createPresident = await President.create({ name, date_exit });

		if (createPresident) {
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

module.exports = CreatePresident;