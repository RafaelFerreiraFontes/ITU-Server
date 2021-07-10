const express = require('express');

const app = express();

const productRoute = express.Router();

const product = require('../model/user.model');


// get all products
productRoute.get("/", (req, res) => {
    product.find((err, data) => {
        if(err) throw err;
        res.json(data);
    });
});

// get all products
productRoute.get("/:id", (req, res) => {
    const id = req.params.id;
    
    product.find((err, data) => {
        if(err) throw err;
        res.json(data);
    });
});

// create one procut
productRoute.post("/", (req, res) => {
    const {
        name,
        email,
        phone,
        birthDate
    } = req.body;

    product.create({ title, price, quant, image_url })
        .then(data => res.json({ message: "ok", data }))
        .catch(err => res.json({ message: "error"}));
});

module.exports = productRoute;