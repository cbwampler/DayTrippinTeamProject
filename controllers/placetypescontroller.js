var express = require('express');
var router = express.Router();
var sequelize = require('../db');
var Type = sequelize.import('../models/placetypes')

/*********************** 
* CREATE PLACE TYPE:
************************/

router.post('/create', function(req,res){
    var type = req.body.placetypes.type;
 
    Type.create({
        type:type
    }).then(
        function createSuccess(type){
            res.json({
                result: type
            })
        },
        function createError(err){
            res.send(500,err)
        }
    )
})
/*********************** 
* GET ALL PLACE TYPES
*************************/

router.get('/getAll', function(req,res){
    Type.findAll({
    }).then(
        function findAllSuccess(type){
            res.json(type)
        },
        function findAll(err){
            res.send(500,err)
        }
    )
})


module.exports = router
