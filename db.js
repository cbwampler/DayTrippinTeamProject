const Sequelize = require('sequelize');

const sequelize = new Sequelize('daytrippin','postgres','password',{
    host:'localhost',
    dialect: 'postgres'
})
    sequelize.authenticate().then(
        function() {
            console.log("Connected to daytrippin postgres datbase");
        },
        function(err){
            console.log(err);
        }
    );
    
    module.exports = sequelize
