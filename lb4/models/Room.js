const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Room = sequelize.define("Room", {
    room_number: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Room;