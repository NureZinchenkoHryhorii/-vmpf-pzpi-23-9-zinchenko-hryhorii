const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Booking = sequelize.define("Booking", {
    booking_date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }
});

module.exports = Booking;