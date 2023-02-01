const { Sequelize } = require("sequelize");
const db = require("./db");

module.exports = db.define("student", {
	id: {
		type: Sequelize.INTEGER.UNSIGNED,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
	},
	name: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	address: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	phone: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	pfp: {
		type: Sequelize.STRING,
		allowNull: true,
	},
});
