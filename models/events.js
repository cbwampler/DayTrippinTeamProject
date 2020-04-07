module.exports = function(sequelize,DataTypes){
    return sequelize.define('event',{
        owner:DataTypes.INTEGER,
        itineraryName:DataTypes.STRING,
        eventDetails:DataTypes.TEXT
    })
}