const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
{
    name: 
    {
        type: String
    },
    email:  
    {
        type: String
    },
    phone: 
    {
        type: String
    },
    birthDate: 
    {
        type: String
    }
}, 
{
    collection: 'user',
    versionKey: false
});

module.exports = mongoose.model('user', userSchema);