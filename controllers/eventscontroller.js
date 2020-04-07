var express = require('express');
var router = express.Router();
var sequelize = require('../db');
var Events = sequelize.import('../models/events')

/*********************** 
* CREATE AN EVENT ITINERARY:
************************/

router.post('/create', function(req,res){
    var owner = req.user.id;
    var itineraryName = req.body.event.itineraryName;
    var eventDetails = req.body.event.eventDetails;

    Events.create({
        owner: owner,
        itineraryName: itineraryName,
        eventDetails: eventDetails

    }).then(
        function createSuccess(event){
            res.json({
                result: event
            })
        },
        function createError(err){
            res.send(500,err)
        }
        );
    });


    /*************************
    *GET ITINERARY FOR USER BY ID:
    **************************/
    
    router.get('/findone/:id', function(req,res){
        var primarykey = req.params.id;
        var userid = req.user.id;

        Events.findOne(
            {
            where: {
                id:primarykey,
                owner:userid}
            }
        ).then(
            function findOneSuccess(data){
                res.json(data)
            }, function findOne(err){
                res.send(500,err.message)
            }
        );
    });


    /*********************** 
    * GET ALL ITINERARIES FOR A USER:
    *************************/
    
    router.get('/getall', function(req,res){
        var userid = req.user.id
        Events.findAll({
            where:{owner:userid} 
        }).then(
            function findAllSuccess(event){
                res.json(event)
            }, function findAll(err){
                res.send(500,err.message)
            }
        );
    });

/**********************
 * update an item for a user
***********************/

router.put("/update/:id", function(req, res) {
    var primaryKey = req.params.id;
    var itineraryName = req.body.event.itineraryName
    var eventDetails = req.body.event.eventDetails

    Events.update({
        itineraryName: itineraryName,
        eventDetails: eventDetails
    },
    {where: {id: primaryKey}
}).then(
        data => {
            return res.json(data)
        }
), err => res.send(500,err.message);
});

/********************************
 * DELETE A USER'S ITINERARY FROM DB
*********************************/

router.delete('/delete/:id', function (req,res){
    var itinerary = req.params.id;
    var userid = req.user.id;

    Events.destroy({
        where: {id: itinerary,
            owner: userid}
    }).then(
        function deleteItinerarySuccess(){
            res.send("you removed an itinerary");
        },
        function deleteItineraryError(err){
            res.send(500,err.message);
        }
    );
});


module.exports = router;