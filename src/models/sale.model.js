const mongoose = require('mongoose');

const Schema = mongoose.Schema;


var saleSchema = new Schema(
{
    productId: 
    [
        {
            type: Schema.Types.ObjectId, 
            ref: 'product'
        }
    ],
    userId: 
    {
        type: Schema.Types.ObjectId, 
        ref: 'user'
    }
});

module.exports = mongoose.model('sale', saleSchema);