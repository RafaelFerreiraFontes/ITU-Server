const product = require("../models/product.model");

class ProductController {
    // get all products
    all(req, res) {
        product.find((err, data) => {
            if(err) throw err;
            res.json(data);
        });
    }

    // get one product by id
    one(req, res)  {
        const id = req.params.id;

        product.findById(id, (err, data) => {
            if(err) throw err;
            res.json(data);
        });
    }

    // create one product
    async save(req, res)  {
        const { auth_token, products } = req.body;

        console.log(auth_token, products);

        if(auth_token == process.env.ADMINTOKEN) {
            const p = await product.findOne({ title: products.title }).exec();

            console.log(p);

            if(p) 
            {
                product.updateOne({ _id: p._id }, {
                    price: products.price,
                    quant: p.quant + products.quant,
                    image_url: products.image_url
                }, {}, (err, data) => {
                    console.log(err);
                    if(err)
                        res.json({ message: "error"});
                    else
                        res.json({ message: "ok", data });
                });

                const p2 = await product.findOne({ title: products.title }).exec();

                console.log(p2);
            } else 
            {
                product.create(products)
                    .then(data => res.json({ message: "ok", data }))
                    .catch(err => res.json({ message: "error"}));
            }

            console.log("201");
            return res.status(201);
        } 

        return res.status(401);
    }

    // get one product by id
    remove(req, res)  {
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
    }
}

module.exports = new ProductController;