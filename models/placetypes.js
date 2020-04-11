module.exports = function(sequelize,DataTypes){
    return sequelize.define('placetypes',{
        type:DataTypes.STRING,
    })
}