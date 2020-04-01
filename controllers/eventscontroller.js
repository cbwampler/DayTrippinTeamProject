var express = require('express');
var router = express.Router();
var sequelize = require('../db');
var Events = sequelize.import('../models/events')

router.post('/create', function(req,res){
    var eventName = req.body.event.eventName;
    var owner = req.user.id;
    var itineraryId = req.body.event.itineraryId;
    var eventAddress = req.body.event.eventAddress

    Events.create({
        eventName: eventName,
        owner: owner,
        itineraryId: itineraryId,
        eventAddress: eventAddress

    }).then(
        function createSuccess(event){
            res.json({
                result: event
            })
        },
        function createError(err){
            res.send(500,err)
        }
    )
}
)

module.exports = router;