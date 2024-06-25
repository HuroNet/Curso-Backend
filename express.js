const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:true}))

app.get('/', function(request,response){
    response.send('Hola Mundo desde  casa');
});


app.post('/', function(request,response){
    response.send(`Hola ${request.body.name}`)
});

app.listen(3002);  