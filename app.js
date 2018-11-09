const express = require('express');
const morgan  = require('morgan');
const bodyparser = require('body-parser');
const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(bodyparser.urlencoded({extended: true}));


app.get('/', async (req, res, next) =>{
    res.send('<h1> Hello World! </h1>');
})


const PORT = 3000;





app.listen(PORT, () =>{
    console.log(`App listening in ${PORT}`);
});