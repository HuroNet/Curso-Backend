
const sqlite3 = require('sqlite3')
const express = require('express');
const app = express();
let db = new sqlite3.Database('proyecto-backend');


db.run('CREATE TABLE task(id int AUTO_INCREMENT,description varchar(244))');
db.close();
app.listen(3002);