const { Tags, validate } = require('../models/Tag');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const tags = await Tags.find();
    res.send(tags)
})
router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    const { title, slug } = req.body
    console.log('JOI error', error);
    if (error) {
        return res.status(400).send(error.details[0].message)
    }
    let tag = new Tags({
        title: title,
        slug: slug
    })
    tag = await tag.save();
    res.status(201).send(tag)
})
router.put('/:id', async (req, res) => {
    const { title, slug } = req.body
    const tag = await Tags.findByIdAndUpdate(req.params.id, {
        title: title,
        slug: slug
    }, { new: true });

    if (!tag) {
        return res.status(400).send(`Berilgan ID ${req.params.id} bo'yicha ma'lumot topilmadi!`)
    }
    res.status(200).send(tag)
})
router.get('/:id', async (req, res) => {
    const tag = await Tags.findById(req.params.id);
    if (!tag) {
        return res.status(400).send(`Berilgan ID ${req.params.id} bo'yicha ma'lumot topilmadi!`)
    }
    res.status(200).send(tag)
})
router.delete('/:id', async (req, res) => {
    const tag = await Tags.findByIdAndRemove(req.params.id);
    if (!tag) {
        return res.status(400).send(`Berilgan ID ${req.params.id} bo'yicha ma'lumot topilmadi!`)
    }
    res.status(200).send(`Muvaffaqqiyatli o'chirildi!`)
})
module.exports = router;