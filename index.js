require('dotenv').config();
var express = require('express');
var app = express();
var sequelize = require('./db')
var bodyParser = require("body-parser");
var user = require('./controllers/usercontroller')

sequelize.sync()
app.use(bodyParser.json());
app.use(require('./middleware/headers'))  

app.use('/api/user', user )

app.use(require('./middleware/validate-session'))

app.listen(3000, function(){
    console.group("app is listening on port 3000")
})