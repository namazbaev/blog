const cors = require('cors');
const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const tagsRoute = require('./routes/tags');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const articleRoute = require('./routes/article');
const config = require('config');
const app = express();
require('./production/prod')(app)
dotenv.config();

if (!config.get('jwtPrivateKey')) {
    console.log(`jwtPrivateKey not found!`);
    process.exit(1);
}
// connect to db
mongoose.connect(process.env.MONGOSE_URL, {
    useNewUrlParser: true
}).then(() => {
    console.log(`Connected to MongoDB`);
}).catch((e) => console.log(`Error connected to MongoDB!`, e))
// middleware
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/tags', tagsRoute);
app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);
app.use('/api/article', articleRoute);
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`${port} chi portni eshitishni boshladim...`);
})