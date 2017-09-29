/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jshopGoods', {
    goodsId: {
      type: DataTypes.STRING(64),
      allowNull: false,
      primaryKey: true,
      field: 'goods_id',
      defaultValue: DataTypes.UUIDV1
    },
    goodsName: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'goods_name'
    },
    gcId: {
      type: DataTypes.STRING(64),
      allowNull: false,
      field: 'gc_id'
    },
    gcName: {
      type: DataTypes.STRING(200),
      allowNull: false,
      field: 'gc_name'
    },
    brandId: {
      type: DataTypes.STRING(64),
      allowNull: false,
      defaultValue: '0',
      field: 'brand_id'
    },
    typeId: {
      type: DataTypes.STRING(64),
      allowNull: false,
      defaultValue: '0',
      field: 'type_id'
    },
    storeId: {
      type: DataTypes.STRING(64),
      allowNull: false,
      field: 'store_id'
    },
    specOpen: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0',
      field: 'spec_open'
    },
    specId: {
      type: DataTypes.STRING(64),
      allowNull: false,
      field: 'spec_id'
    },
    specName: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: '',
      field: 'spec_name'
    },
    goodsImage: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'goods_image'
    },
    goodsImageMore: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'goods_image_more'
    },
    goodsStorePrice: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'goods_store_price'
    },
    goodsStorePriceInterval: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: '',
      field: 'goods_store_price_interval'
    },
    goodsSerial: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: '',
      field: 'goods_serial'
    },
    goodsShow: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      field: 'goods_show'
    },
    goodsClick: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '1',
      field: 'goods_click'
    },
    goodsState: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0',
      field: 'goods_state'
    },
    goodsCommend: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      field: 'goods_commend'
    },
    goodsAddTime: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'goods_add_time'
    },
    goodsKeywords: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: '',
      field: 'goods_keywords'
    },
    goodsDescription: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: '',
      field: 'goods_description'
    },
    goodsBody: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'goods_body'
    },
    goodsAttr: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'goods_attr'
    },
    goodsSpec: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'goods_spec'
    },
    goodsColImg: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'goods_col_img'
    },
    goodsIndate: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '7',
      field: 'goods_indate'
    },
    goodsStarttime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'goods_starttime'
    },
    goodsEndtime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'goods_endtime'
    },
    goodsForm: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1',
      field: 'goods_form'
    },
    transportId: {
      type: DataTypes.INTEGER(8),
      allowNull: true,
      defaultValue: '0',
      field: 'transport_id'
    },
    pyPrice: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.00',
      field: 'py_price'
    },
    kdPrice: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.00',
      field: 'kd_price'
    },
    esPrice: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.00',
      field: 'es_price'
    },
    cityId: {
      type: DataTypes.INTEGER(8),
      allowNull: true,
      defaultValue: '0',
      field: 'city_id'
    },
    provinceId: {
      type: DataTypes.INTEGER(8),
      allowNull: true,
      defaultValue: '0',
      field: 'province_id'
    },
    goodsCloseReason: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'goods_close_reason'
    },
    goodsStoreState: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0',
      field: 'goods_store_state'
    },
    commentnum: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0',
      field: 'commentnum'
    },
    salenum: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0',
      field: 'salenum'
    },
    goodsCollect: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0',
      field: 'goods_collect'
    },
    goodsGoldnum: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0',
      field: 'goods_goldnum'
    },
    goodsIsztc: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0',
      field: 'goods_isztc'
    },
    goodsZtcstate: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1',
      field: 'goods_ztcstate'
    },
    goodsZtcstartdate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'goods_ztcstartdate'
    },
    goodsZtclastdate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'goods_ztclastdate'
    },
    groupFlag: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0',
      field: 'group_flag'
    },
    groupPrice: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00',
      field: 'group_price'
    },
    xianshiFlag: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0',
      field: 'xianshi_flag'
    },
    xianshiDiscount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.00',
      field: 'xianshi_discount'
    },
    goodsTransfeeCharge: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0',
      field: 'goods_transfee_charge'
    }
  }, {
    tableName: 'jshop_goods'
  });
};
