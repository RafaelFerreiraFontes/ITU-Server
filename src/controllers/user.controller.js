const user      = require("../models/user.model");
const product   = require("../models/product.model");
const sale      = require("../models/sale.model");

class UserController {
    buy(req, res) {
        const { productCart, userData } = req.body;

        user.findOne({ email: userData.email }, (err, data) => {
            if(err) throw err;

            if(!data) {
                // create user
                user.create(userData).catch(err => res.json({ message: "erro"}));
                return;
            }

            // verify productCart
            const ids = productCart.map(prod => prod.id);
            
            product.find({
                '_id': {
                    $in : ids
                }
            }, (err, data) => {
                if(err) throw err;
                
                const outstock = [];

                productCart.forEach(prod => {
                    const prodStock = data.find(prodStock => prodStock._id == prod.id);
                    if(prodStock.quant < prod.quant) outstock.push(prodStock);
                });

                if(outstock.length > 0) {
                    res.json({ message: "produtos sem estoque", products: outstock });
                } else {
                    productCart.forEach(async prod => {
                        const prodStock = data.find(prodStock => prodStock._id == prod.id);
                        await product.updateOne({ _id: prod.id }, { quant: prodStock.quant - prod.quant });
                    });

                    res.json({ message: "compra realizada" });
                    // [o] remover do db (vulgo diminuir a coluna quant)
                    // [ ] enviar email
                    
                }

            });
        });
    }
}

module.exports = new UserController;