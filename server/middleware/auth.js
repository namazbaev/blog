const config = require('config');
const jwt = require('jsonwebtoken');
module.exports = function auth(req, res, next) {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).send(`Token is not available!`);
    }
    try {
        const decoded = jwt.verify(token, config.get('jwtPrivateKey'));
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(400).send(`Unsuitable token!`)
    }
}