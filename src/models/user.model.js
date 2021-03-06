const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
{
    name: 
    {
        type: String,
        required: true
    },
    email:  
    {
        type: String,
        unique: true,
        required: true
    },
    phone: 
    {
        type: String
    },
    birthDate: 
    {
        type: String,
        required: true
    }
}, 
{
    collection: 'user',
    versionKey: false
});

module.exports = mongoose.model('user', userSchema);