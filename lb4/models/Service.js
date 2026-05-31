const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Service = sequelize.define("Service", {
    service_name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Service;