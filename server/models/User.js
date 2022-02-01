const Joi = require('joi');
const config = require('config');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 30
    },
    email: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 1024
    },
    isAdmin: Boolean
})

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id, isAdmin: this.isAdmin }, config.get('jwtPrivateKey'));
    return token;
}
const User = mongoose.model('User', userSchema);

function validateUser(user) {
    const schema = {
        isAdmin: Joi.boolean(),
        name: Joi.string().min(3).max(30).required(),
        password: Joi.string().min(6).max(1024).required(),
        email: Joi.string().min(3).max(255).required().email(),
    };
    return Joi.validate(user, schema);
}
exports.User = User;
exports.validateUser = validateUser;