module.exports = function (sequelize, DataTypes) {
    var item = sequelize.define('Item', {
        name: DataTypes.STRING,
        price: DataTypes.DECIMAL,
        catagory: DataTypes.STRING
    });
    return item;
};