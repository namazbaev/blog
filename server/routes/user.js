const _ = require('lodash');
const bcrypt = require('bcrypt');
const express = require('express');
const auth = require('../middleware/auth');
const { User, validateUser } = require('../models/User');
const router = express.Router();

router.post('/', async (req, res) => {
    const { email } = req.body;
    const { error } = validateUser(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    let user = await User.findOne({ email: email });
    if (user) {
        return res.status(400).json({
            message: `There is a user with such an email ${email}`,
            success: false
        })
    }
    user = new User(_.pick(req.body, ['name', 'email', 'password', 'isAdmin']))
    const salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();
    res.status(201).json({
        success: true,
        message: `Successfully saved new user`,
        result: _.pick(user, ['_id', 'name', 'email', 'isAdmin'])
    })
})
router.get('/me', auth, async (req, res) => {
    const user = await User.findById(req.user._id).select('-password');
    res.status(200).send(user)
})
module.exports = router;