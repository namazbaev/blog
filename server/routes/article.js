const { Article, validate } = require('../models/Article');
const { Tags } = require('../models/Tag');
const express = require('express');
const router = express.Router();

// get all article
router.get('/', async (req, res) => {
    const articles = await Article.find();
    res.send(articles)
})
// cretae article
router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    const { name, slug, description, tags } = req.body
    console.log('req.body', req.body);
    if (error) {
        return res.status(400).send(error.details[0].message)
    }
    let article = new Article({
        name: name,
        slug: slug,
        tags: tags,
        description: description
    })
    article = await article.save();
    res.status(201).send(article)
})
// update article by id
router.put('/:id', async (req, res) => {
    const { name, slug, description, tags } = req.body
    const article = await Article.findByIdAndUpdate(req.params.id, {
        name: name,
        slug: slug,
        tags: tags,
        description: description
    }, { new: true })
    if (!article) {
        return res.status(404).send(`Berilgan ID ${req.params.id} ga teng bo'lgan maqola topilmadi.`);
    }
    res.status(200).send(article)
})

// get one article
router.get('/:id', async (req, res) => {
    const article = await Article.findById(req.params.id)
    if (!article) {
        return res.status(400).send(`Berilgan ID ${req.params.id} bo'yicha maqola topilmadi!`)
    }
    res.status(200).send(article)
})

router.delete('/:id', async (req, res) => {
    const article = await Article.findByIdAndRemove(req.params.id)
    if (!article) {
        return res.status(400).send(`Berilgan ID ${req.params.id} bo'yicha maqola topilmadi!`)
    }
    res.status(200).send(`Muvaffaqqiyatli o'chirildi!`)
})
module.exports = router;
