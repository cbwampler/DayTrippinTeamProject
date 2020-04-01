module.exports = function(sequelize,DataTypes){
    return sequelize.define('itineraries',{
        
        itineraryID: DataTypes.INTEGER,
        eventID:DataTypes.INTEGER,
        itineraryName:DataTypes.STRING,
        owner:DataTypes.INTEGER,
        eventName:DataTypes.STRING
    })
}