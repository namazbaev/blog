const Joi = require('joi');
const _ = require('lodash');
const bcrypt = require('bcrypt');
const express = require('express');
const { User } = require('../models/User');
const router = express.Router();

router.post('/', async (req, res) => {
    const { error } = validateAuth(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    let user = await User.findOne({ email: req.body.email });
    if (!user) {
        return res.status(400).send(`Email or password error!`)
    }
    const isValidPassword = await bcrypt.compare(req.body.password, user.password);
    if (!isValidPassword) {
        return res.status(400).send(`Email or password error!`)
    }
    const token = user.generateAuthToken();
    res.header('Authorization', token).json({
        token,
        success: true
    })
})
function validateAuth(req) {
    const schema = {
        password: Joi.string().min(6).max(1024).required(),
        email: Joi.string().min(3).max(255).required().email(),
    };
    return Joi.validate(req, schema);
}
module.exports = router;