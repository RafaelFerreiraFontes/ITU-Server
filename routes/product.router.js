const express = require('express');

const app = express();

const productRoute = express.Router();

const product = require('../models/product.model');

// get all products
productRoute.get("/", (req, res) => {
    product.find((err, data) => {
        if(err) throw err;
        res.json(data);
    });
});

// get one product by id
productRoute.get("/:id", (req, res) => {
    const id = req.params.id;

    product.findById(id, (err, data) => {
        if(err) throw err;
        res.json(data);
    });
});

// create one product
productRoute.post("/", (req, res) => {
    const {
        title,
        price,
        quant,
        image_url
    } = req.body;

    product.create({ title, price, quant, image_url })
        .then(data => res.json({ message: "ok", data }))
        .catch(err => res.json({ message: "error"}));
});

// get one product by id
productRoute.delete("/:id", (req, res) => {
    const id = req.params.id;
    
    product.deleteOne({ _id: id }, (err) => {
        if (!err) {
            res.json({ message: "ok" });
        }
        else {
            console.log(err);
            res.json({ message: "error" });
        }
    });
});

module.exports = productRoute;module.exports = productRoute;