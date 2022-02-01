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
exports.Article = ArticleSchema;
exports.validate = validateArticle;
