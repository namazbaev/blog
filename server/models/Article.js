const Joi = require('joi');
const mongoose = require('mongoose');
const { tagSchema } = require('./Tag')
const ArticleSchema = mongoose.model('Article', new mongoose.Schema({
    name: String,
    tags: [{ type: tagSchema }],
    slug: {
        type: String,
        unique: true
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    description: {
        type: String,
        required: true
    }
}))
function validateArticle(article) {
    const schema = {
        name: Joi.string().min(3).required(),
        slug: Joi.string(),
        tags: Joi.array().required(),
        description: Joi.string().min(10).required(),
    };
    return Joi.validate(article, schema);
}

async function createArticle() {
    const article = new ArticleSchema({
        name: 'Yangiliklar',
        slug: 'news',
        tags: '61f64df054144b82f80333d7',
        // created_at: Date.now,
        description: 'lorem ipsum wr wer werwer'
    })
    const savedArticle = await article.save();
    console.log(savedArticle);
}

exports.Article = ArticleSchema;
exports.validate = validateArticle;
