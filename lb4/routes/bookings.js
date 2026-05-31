const express = require("express");
const { Op } = require("sequelize");

const Room = require("../models/Room");
const Booking = require("../models/Booking");

const router = express.Router();

router.get("/rooms", async (req, res) => {
    const rooms = await Room.findAll();
    res.json(rooms);
});

router.get("/available-rooms", async (req, res) => {
    const bookings = await Booking.findAll();
    const bookedRoomIds = bookings.map(booking => booking.RoomId);

    const rooms = await Room.findAll({
        where: {
            id: {
                [Op.notIn]: bookedRoomIds.length > 0 ? bookedRoomIds : [0]
            }
        }
    });

    res.json(rooms);
});

router.post("/bookings", async (req, res) => {
    const { ClientId, RoomId, booking_date } = req.body;

    const booking = await Booking.create({
        ClientId,
        RoomId,
        booking_date
    });

    res.json({
        message: "Booking created",
        booking: booking
    });
});

router.delete("/bookings/:id", async (req, res) => {
    await Booking.destroy({
        where: {
            id: req.params.id
        }
    });

    res.json({
        message: "Booking deleted"
    });
});

module.exports = router;