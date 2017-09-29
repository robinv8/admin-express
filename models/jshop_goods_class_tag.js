/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jshopGoodsClassTag', {
    gcTagId: {
      type: DataTypes.STRING(64),
      allowNull: false,
      primaryKey: true,
      field: 'gc_tag_id',
      defaultValue: DataTypes.UUIDV1
    },
    gcId1: {
      type: DataTypes.STRING(64),
      allowNull: false,
      field: 'gc_id_1'
    },
    gcId2: {
      type: DataTypes.STRING(64),
      allowNull: false,
      field: 'gc_id_2'
    },
    gcId3: {
      type: DataTypes.STRING(64),
      allowNull: false,
      field: 'gc_id_3'
    },
    gcTagName: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'gc_tag_name'
    },
    gcTagValue: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'gc_tag_value'
    },
    gcId: {
      type: DataTypes.STRING(64),
      allowNull: false,
      field: 'gc_id'
    },
    typeId: {
      type: DataTypes.STRING(64),
      allowNull: false,
      field: 'type_id'
    }
  }, {
    tableName: 'jshop_goods_class_tag'
  });
};
