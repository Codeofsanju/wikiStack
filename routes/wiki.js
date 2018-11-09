const router = require('express').Router();
const { addPage, main } = require("../views");
// const { main } = require("../views");

// /wiki + anything here



router.get("/", async (req, res, next) => {
    res.send(main());
});


router.post("/", async (req, res, next) =>{
    
});    



router.get("/add", async (req, res, next) => {
    res.send(addPage());
});





module.exports = router;
