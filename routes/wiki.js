const router = require('express').Router();
const { addPage } = require("../views");
// /wiki + anything here



router.get("/", async (req, res, next) => {
    res.send('got to GET /wiki/');
});


router.post("/", async (req, res, next) =>{
    
});    



router.get("/add", async (req, res, next) => {
    res.send(addPage());
});





module.exports = router;
