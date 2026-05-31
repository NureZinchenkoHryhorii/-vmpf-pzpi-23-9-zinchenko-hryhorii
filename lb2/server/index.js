const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const products = [
    { id: 1, name: "Ноутбук", price: 30000 },
    { id: 2, name: "Миша", price: 1000 },
    { id: 3, name: "Клавіатура", price: 2000 }
];

app.get("/products", (req, res) => {
    res.json(products);
});

app.listen(5000, () => {
    console.log("Server started on port 5000");
});
