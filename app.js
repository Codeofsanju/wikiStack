const express = require('express');
const morgan  = require('morgan');
const bodyparser = require('body-parser');
const html = require('html-template-tag')
const postList = require('./views/main')
const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + './stylesheets'));
app.use(bodyparser.urlencoded({extended: true}));


app.get('/', async (req, res, next) =>{
    try {
    res.send(postList());
    } catch (error) {
        next(error)
    }
})


const PORT = 3000;





app.listen(PORT, () =>{
    console.log(`App listening in ${PORT}`);
});