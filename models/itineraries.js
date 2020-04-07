module.exports = function(sequelize,DataTypes){
    return sequelize.define('itineraries',{
        eventID:DataTypes.INTEGER,
        itineraryName:DataTypes.STRING,
        owner:DataTypes.INTEGER,
    })
}