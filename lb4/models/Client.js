const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Client = sequelize.define("Client", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Client;