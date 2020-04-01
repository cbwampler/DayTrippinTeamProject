module.exports = function(sequelize,DataTypes){
    return sequelize.define('events',{
        
        eventID:DataTypes.INTEGER,
        owner:DataTypes.INTEGER,
        eventName:DataTypes.STRING,
        eventAddress:DataTypes.STRING
    })
}