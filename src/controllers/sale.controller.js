const sale = require("../models/sale.model");

class SaleController {
    add(products, userId){
        const productIds = products.map(prod => prod.id);

        sale.create({productId: productIds, userId: userId}, function (err, data) {
            if (err) console.log(err)
            else console.log("Deu bom")
        });
    }
}

module.exports = new SaleController;