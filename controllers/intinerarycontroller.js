var express = require('express');
var router = express.Router();
var sequelize = require('../db');
var Itinerary = sequelize.import('../models/itineraries')

router.post('/create', function(req,res){
    var itineraryName = req.body.itinerary.itineraryName;
    var owner = req.user.id;
    var eventName = req.body.itinerary.eventName;

    Itinerary.create({
        itineraryName: itineraryName,
        owner: owner,
        eventName: eventName
    }).then(
        function createSuccess(itinerary){
            res.json({
                result: itinerary
            })
        },
        function createError(err){
            res.send(500,err)
        }
    )
}
)
module.exports = router
