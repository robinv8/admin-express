/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('jshopType', {
    typeId: {
      type: DataTypes.STRING(64),
      allowNull: false,
      primaryKey: true,
      field: 'type_id',
      defaultValue: DataTypes.UUIDV1
    },
    typeName: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'type_name'
    },
    typeSort: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      field: 'type_sort'
    }
  }, {
    tableName: 'jshop_type'
  });
};
