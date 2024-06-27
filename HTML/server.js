
const express = require('express');
const app = express();

app.set('view engine', 'ejs'); // view engine (motor de plantillas)


//middleware
app.use('/assets',express.static('assets',{
        atag:false,
        maxAge:'5h'
})); 


app.get('/', function(req,res){
        res.render('index');
});

app.listen(3002)