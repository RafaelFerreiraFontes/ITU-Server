const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema(
{
    title: 
    {
        type: String
    },
    price:  
    {
        type: Number
    },
    quant: 
    {
        type: Number
    },
    image_url: 
    {
        type: String
    }
}, 
{
    collection: 'product',
    versionKey: false
});

module.exports = mongoose.model('product', productSchema);