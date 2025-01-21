const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    userID: String,
    Name: String,
    Email: String,
    Phone: Number,
    Password: String
})
const userData = mongoose.model('user',userSchema);
module.exports = userData;