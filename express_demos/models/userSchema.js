const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: String,
    age: Number,
    pass: String,
});

module.exports = mongoose.model('users', userSchema);