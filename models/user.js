module.exports = function(sequelize,DataTypes){
    return sequelize.define('user',{

        username:DataTypes.STRING,
        passwordhash:DataTypes.STRING,
        first_name:DataTypes.STRING,
        last_name:DataTypes.STRING,
        email:DataTypes.STRING,
        role:DataTypes.STRING
    })
}
