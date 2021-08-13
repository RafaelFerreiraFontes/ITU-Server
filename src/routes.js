const ProductController = require("./controllers/product.controller");

const Routes = [{
    method: "get",
    route: "/products",
    controller: ProductController,
    action: "all"
}, {
    method: "get",
    route: "/products/:id",
    controller: ProductController,
    action: "one"
}, {
    method: "post",
    route: "/products",
    controller: ProductController,
    action: "save"
}, {
    method: "delete",
    route: "/products/:id",
    controller: ProductController,
    action: "remove"
}];

module.exports = Routes;