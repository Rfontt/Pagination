const Sequelize = require('sequelize');
const databaseConfig = require('../config/database');
const President = require('../model/President');
const Countries = require('../model/Countries');

const connection = new Sequelize(databaseConfig);

President.init(connection);
Countries.init(connection);
Countries.associate(connection.models);

module.exports = connection;