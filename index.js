require('dotenv').config();
var express = require('express');
const cors = require('cors'); 
var app = express();
app.use(cors());

var sequelize = require('./db')
var bodyParser = require("body-parser");
var user = require('./controllers/usercontroller')
var events = require ('./controllers/eventscontroller')
var itineraries = require ('./controllers/intinerarycontroller')

sequelize.sync()
app.use(bodyParser.json());
app.use(require('./middleware/headers'))  

app.use('/api/user', user )

app.use(require('./middleware/validate-session'))

app.use('/itineraries', itineraries)
app.use('/events', events);

app.listen(3000, function(){
    console.group("app is listening on port 3000")
})