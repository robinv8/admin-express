/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jshopBrand', {
    brandId: {
      type: DataTypes.STRING(64),
      allowNull: false,
      primaryKey: true,
      field: 'brand_id',
      defaultValue: DataTypes.UUIDV1
    },
    brandName: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'brand_name'
    },
    brandClass: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'brand_class'
    },
    brandPic: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'brand_pic'
    },
    brandSort: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      defaultValue: '0',
      field: 'brand_sort'
    },
    brandRecommend: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      field: 'brand_recommend'
    },
    storeId: {
      type: DataTypes.STRING(64),
      allowNull: true,
      defaultValue: '',
      field: 'store_id'
    },
    brandApply: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1',
      field: 'brand_apply'
    }
  }, {
    tableName: 'jshop_brand'
  });
};
