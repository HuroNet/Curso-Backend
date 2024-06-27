
const sqlite3 = require('sqlite3')
const express = require('express');
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

// let db = new sqlite3.Database('proyecto-backend');


const sequelize = new Sequelize('proyecto-backend', null, null,{
    dialect:'sqlite',
    Storage:'./Curso-Backend'
});

app.post('/pendientes',function(req,res){
    res.send('Bien hecho, insersion completada');
});


// db.run('CREATE TABLE task(id int AUTO_INCREMENT,description varchar(244))');
// db.close();
app.listen(3002);