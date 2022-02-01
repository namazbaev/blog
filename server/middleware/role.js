module.exports = function (req, res, next) {
    if (!req.user.isAdmin) {
        return res.status(403).send(`Your appeal was rejected. The reason is that you do not have the role of admin!`)
    }
    next();
}