const { Model, DataTypes } = require('sequelize');

class Countries extends Model {
	static init(sequelize) {
		super.init({
			name: DataTypes.STRING,
			localization: DataTypes.STRING,
		}, {
			sequelize
		})
	}

	static associate(models) {
		this.belongsTo(models.President, { foreignKey: 'president_id', as: 'president' });
	}
}

module.exports = Countries;