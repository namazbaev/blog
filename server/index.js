const cors = require('cors');
const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const articleRoute = require('./routes/article')
const tagsRoute = require('./routes/tags')
const app = express();
dotenv.config();

// connect to db
mongoose.connect(process.env.MONGOSE_URL, {
    useNewUrlParser: true
}).then(() => {
    console.log(`Connected to MongoDB`);
}).catch((e) => console.log(`Error connected to MongoDB!`, e))
// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/tags', tagsRoute)
app.use('/api/article', articleRoute)
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`${port} chi portni eshitishni boshladim...`);
})