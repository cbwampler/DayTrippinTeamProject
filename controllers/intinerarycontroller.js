var express = require('express');
var router = express.Router();
var sequelize = require('../db');
var Itinerary = sequelize.import('../models/itineraries')

/*********************** 
* CREATE ITINERARY:
************************/

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
})
/*********************** 
* GET ALL ITINERARIES FOR A USER:
*************************/

router.get('/getAll', function(req,res){
    Itinerary.findAll({
        where: {owner:userid}
    }).then(
        function findAllSuccess(itinerary){
            res.json(itinerary)
        },
        function findAll(err){
            res.send(500,err)
        }
    )
})
/*************************
*GET ITINERARY FOR USER BY ID:
**************************/

router.get('/:id', function(req,res){
    var primarykey = req.params.id;
    var userid =req.user.id

    Itinerary.findOne(
        {
        where: {id:primarykey,
        owner:userid}
        }
    ).then(
        function findOneSuccess(itinerary){
            res.json(itinerary)
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
    var description = req.body.log.description
    var definition = req.body.log.definition
    var result = req.body.log.result
    
    Log.update({
            description: description,
            definition: definition,
            result: result
    },
    {where: {id: primaryKey, owner: userid}
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

    Itinerary
    .destroy({
        where: {id: itinerary, owner: userid}
    }).then(
        function deleteItinerarySuccess(itinerary){
            res.send("you removed an itinerary");
        },
        function deleteItineraryError(err){
            res.send(500,err.message);
        }
    );
});


module.exports = router
