const { Model, DataTypes } = require('sequelize');

class President extends Model {
	static init(sequelize) {
		super.init({
			name: DataTypes.STRING,
			date_exit: DataTypes.DATE,
		}, {
			sequelize
		})
	}
}

module.exports = President;