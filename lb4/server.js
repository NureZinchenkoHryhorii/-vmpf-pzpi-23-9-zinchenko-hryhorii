const express = require("express");
const sequelize = require("./database");

const Hotel = require("./models/Hotel");
const Room = require("./models/Room");
const Client = require("./models/Client");
const Booking = require("./models/Booking");
const Service = require("./models/Service");

const bookingRoutes = require("./routes/bookings");

const app = express();

app.use(express.json());

Hotel.hasMany(Room);
Room.belongsTo(Hotel);

Hotel.hasMany(Service);
Service.belongsTo(Hotel);

Client.hasMany(Booking);
Booking.belongsTo(Client);

Room.hasMany(Booking);
Booking.belongsTo(Room);

app.use("/", bookingRoutes);

app.get("/", (req, res) => {
    res.send("Hotel Booking System");
});

async function start() {
    await sequelize.sync({ force: true });

    const hotel1 = await Hotel.create({
        name: "Hotel Ukraine",
        address: "Kyiv, Center"
    });

    const hotel2 = await Hotel.create({
        name: "Sea Hotel",
        address: "Odesa, Beach"
    });

    await Room.create({
        room_number: "101",
        price: 1200,
        HotelId: hotel1.id
    });

    await Room.create({
        room_number: "102",
        price: 1500,
        HotelId: hotel1.id
    });

    await Room.create({
        room_number: "201",
        price: 2000,
        HotelId: hotel2.id
    });

    await Client.create({
        name: "Ivan Petrenko",
        phone: "+380501112233"
    });

    await Client.create({
        name: "Olena Kovalenko",
        phone: "+380671234567"
    });

    await Service.create({
        service_name: "Breakfast",
        HotelId: hotel1.id
    });

    await Service.create({
        service_name: "Parking",
        HotelId: hotel1.id
    });

    await Service.create({
        service_name: "Pool",
        HotelId: hotel2.id
    });

    app.listen(3000, () => {
        console.log("Server started on port 3000");
    });
}

start();