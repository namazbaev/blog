const { Article, validate } = require('../models/Article');
const express = require('express');
const router = express.Router();

// get all article
router.get('/', async (req, res) => {
    const pageSize = 3;
    const page = Number(req.query.pageNumber) || 1;
    const count = await Article.countDocuments();
    const articles = await Article.find().limit(pageSize).skip(pageSize * (page - 1)).sort({ created_at: -1 });
    res.json({
        result: {
            list: articles,
            pagination: { page, count, pageSize, pages: Math.ceil(count / pageSize) }
        }
    });
})

// router.get('/', (req, res, next) => {
//     const searchField = req.query.name;
//     Article.find({ name: { $regex: searchField, $options: `$i` } }).then((data) => res.send(data))
// })
// cretae article
router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    const { name, slug, description, tags } = req.body
    console.log('req.body', req.body);
    if (error) {
        return res.status(422).json({
            message: error.details[0].message,
            success: false
        })
    }
    let article = new Article({
        name: name,
        slug: slug,
        tags: tags,
        description: description
    })
    article = await article.save();
    res.status(201).json({
        data: article,
        success: true,
        message: "Successfully saved!",
    })
})
// update article by id
router.put('/:id', async (req, res) => {
    const { name, slug, description, tags } = req.body;
    const article = await Article.findByIdAndUpdate(req.params.id, {
        name: name,
        slug: slug,
        tags: tags,
        description: description
    }, { new: true })
    if (!article) {
        return res.status(404).send(`No suitable article found for sent ID ${req.params.id}!`);
    }
    res.status(200).json({
        data: article,
        success: true,
        message: 'Successfully updated!'
    })
})

// get one article
router.get('/:id', async (req, res) => {
    const article = await Article.findById(req.params.id);
    if (!article) {
        return res.status(404).send(`No suitable article found for sent ID ${req.params.id}!`);
    }
    res.status(200).json({
        data: article,
        success: true,
    })
})

router.delete('/:id', async (req, res) => {
    const article = await Article.findByIdAndRemove(req.params.id);
    if (!article) {
        return res.status(404).send(`No suitable article found for sent ID ${req.params.id}!`);
    }
    res.status(200).send(`Successfully deleted!`)
})
module.exports = router;
