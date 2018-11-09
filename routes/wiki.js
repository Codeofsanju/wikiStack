const router = require('express').Router();
const { addPage, main } = require("../views");
const { Page } = require('../models/index')
// const { main } = require("../views");

// /wiki + anything here



router.get("/", async (req, res, next) => {
    res.send(main());
});


router.post("/", async (req, res, next) =>{
    // const title = req.body.title
    // const content = req.body.content
    const randomSlug = req.body.title.replace(/\s+/g, '_').replace(/\W/g, '')
    const page = new Page({
        title : req.body.title,
        slug : randomSlug,
        content : req.body.content
    })
    try {
        await page.save()
        res.redirect('/')
    } catch (error) {
        next(error)
    }
});    



router.get("/add", async (req, res, next) => {
    res.send(addPage());
});





module.exports = router;
