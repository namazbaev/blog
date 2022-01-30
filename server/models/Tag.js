const Joi = require('joi');
const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
    slug: { type: String, required: true },
    title: { type: String, required: true }
})
const Tags = mongoose.model('Tags', tagSchema);

function validateTags(tag) {
    const schema = {
        title: Joi.string().min(3).required(),
        slug: Joi.string().min(3).required(),
    };
    return Joi.validate(tag, schema);
}
exports.Tags = Tags;
exports.tagSchema = tagSchema;
exports.validate = validateTags;