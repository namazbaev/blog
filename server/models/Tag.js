const Joi = require('joi');
const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
    title: { type: String, required: true },
    slug: { type: String, unique: true, required: true }
})
const Tags = mongoose.model('Tags', tagSchema);

function validateTags(tag) {
    const schema = {
        slug: Joi.string().min(3).required(),
        title: Joi.string().min(3).required(),
    };
    return Joi.validate(tag, schema);
}
exports.Tags = Tags;
exports.tagSchema = tagSchema;
exports.validate = validateTags;