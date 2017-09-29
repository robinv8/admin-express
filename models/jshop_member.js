/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jshopMember', {
    memberId: {
      type: DataTypes.STRING(64),
      allowNull: false,
      primaryKey: true,
      field: 'member_id',
      defaultValue: DataTypes.UUIDV1
    },
    memberName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'member_name'
    },
    memberTruename: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'member_truename'
    },
    storeId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'store_id'
    },
    memberAvator: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'member_avator'
    },
    memberSex: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      field: 'member_sex'
    },
    memberBirthday: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'member_birthday'
    },
    memberPasswd: {
      type: DataTypes.STRING(32),
      allowNull: false,
      field: 'member_passwd'
    },
    memberEmail: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'member_email'
    },
    memberQq: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'member_qq'
    },
    memberMsn: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'member_msn'
    },
    memberWw: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'member_ww'
    },
    memberLoginNum: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'member_login_num'
    },
    memberTime: {
      type: DataTypes.STRING(10),
      allowNull: false,
      field: 'member_time'
    },
    memberLoginTime: {
      type: DataTypes.STRING(10),
      allowNull: false,
      field: 'member_login_time'
    },
    memberOldLoginTime: {
      type: DataTypes.STRING(10),
      allowNull: false,
      field: 'member_old_login_time'
    },
    memberLoginIp: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: 'member_login_ip'
    },
    memberOldLoginIp: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: 'member_old_login_ip'
    },
    memberGoldnum: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      field: 'member_goldnum'
    },
    memberGoldnumcount: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      field: 'member_goldnumcount'
    },
    memberGoldnumminus: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      field: 'member_goldnumminus'
    },
    memberQqopenid: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'member_qqopenid'
    },
    memberQqinfo: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'member_qqinfo'
    },
    memberSinaopenid: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'member_sinaopenid'
    },
    memberSinainfo: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'member_sinainfo'
    },
    memberPoints: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      field: 'member_points'
    },
    availablePredeposit: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0',
      field: 'available_predeposit'
    },
    freezePredeposit: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0',
      field: 'freeze_predeposit'
    },
    informAllow: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1',
      field: 'inform_allow'
    },
    isBuy: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1',
      field: 'is_buy'
    },
    isAllowtalk: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1',
      field: 'is_allowtalk'
    },
    memberState: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1',
      field: 'member_state'
    },
    memberCredit: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      field: 'member_credit'
    },
    memberSnsvisitnum: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      field: 'member_snsvisitnum'
    },
    memberAreaid: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'member_areaid'
    },
    memberCityid: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'member_cityid'
    },
    memberProvinceid: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'member_provinceid'
    },
    memberAreainfo: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'member_areainfo'
    }
  }, {
    tableName: 'jshop_member'
  });
};
