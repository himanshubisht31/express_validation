const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    pincode: { type: Number, required: true },
    age: { type: Number, required: true },
    gender: { type: String, default: 'Male' },


}, {
    versionKey: false,
    timestamps: true
})

module.exports = new mongoose.model('user', userSchema)