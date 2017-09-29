/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jshopGoodsClass', {
    gcId: {
      type: DataTypes.STRING(64),
      allowNull: false,
      primaryKey: true,
      field: 'gc_id',
      defaultValue: DataTypes.UUIDV1
    },
    gcName: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'gc_name'
    },
    typeId: {
      type: DataTypes.STRING(64),
      allowNull: false,
      field: 'type_id'
    },
    typeName: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'type_name'
    },
    storeId: {
      type: DataTypes.STRING(64),
      allowNull: false,
      defaultValue: '0',
      field: 'store_id'
    },
    gcParentId: {
      type: DataTypes.STRING(64),
      allowNull: false,
      defaultValue: '0',
      field: 'gc_parent_id'
    },
    gcSort: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0',
      field: 'gc_sort'
    },
    gcShow: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1',
      field: 'gc_show'
    },
    gcIndexShow: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1',
      field: 'gc_index_show'
    },
    gcKeywords: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'gc_keywords'
    },
    gcDescription: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'gc_description'
    }
  }, {
    tableName: 'jshop_goods_class'
  });
};
