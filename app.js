const express = require('express');         // for express
const morgan  = require('morgan');          // to see our requests
const bodyparser = require('body-parser');  
const html = require('html-template-tag');  // something something add cool
const postList = require('./views/main');   // temp linking for navigating to main
const app = express();  // for running express
const { db }  = require('./models/index');   // importing db
const models = require('./models')



app.use(morgan('dev'));
app.use(express.static(__dirname + './stylesheets'));
app.use(bodyparser.urlencoded({extended: true}));

db.authenticate().then(() => {
    console.log('connected to the database');
});



app.get('/', async (req, res, next) =>{
    try {
    res.send(postList());
    } catch (error) {
        next(error);
    }
});

const PORT = 3000;

const init = async () => {
    await models.User.sync()
    await models.Page.sync()
    // await db.sync()
    app.listen(PORT, () =>{
        console.log(`App listening in ${PORT}`);
    });
}
init();

