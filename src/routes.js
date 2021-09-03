const AdminController = require("./controllers/admin.controller");
const ProductController = require("./controllers/product.controller");
const UserController    = require("./controllers/user.controller");

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
}, 
// user routes
{
    method: "post",
    route: "/buy",
    controller: UserController,
    action: "buy"
},
// admin routes
{
    method: "post",
    route: "/admin",
    controller: AdminController,
    action: "login"
}];

module.exports = Routes;