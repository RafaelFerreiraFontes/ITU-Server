require('dotenv').config({path: '.env'});
const express = require('express');
const port = 8080 || process.env.PORT;

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.pm4ek.gcp.mongodb.net/CommentsDB?retryWrites=true&w=majority`, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => {
        console.log('Database connected.');
    }, err => {
        console.log('Database not connected: ', err);
    }
);

const app = express();

app.use(express.json());

const productRouter = require('./routes/product.router');

app.use('/product', productRouter);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}...`);
});
