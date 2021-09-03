require('dotenv').config({path: '.env'});

const express   = require('express');
const mongoose  = require('mongoose');
const cors      = require('cors');
const Routes    = require('./routes');

const port = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(cors())

mongoose.Promise = global.Promise;

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@test.yvyek.mongodb.net/ecommerce?retryWrites=true&w=majority`, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(
    ()  => console.log('Database connected.'), 
    err => console.log('Database not connected: ', err)
);

Routes.forEach(route => {
    app[route.method](route.route, (req, res) => {
        route.controller[route.action](req, res);
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}...`);
});
