/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jshopAdminHasJshopRole', {
    jshopAdminAdminId: {
      type: DataTypes.STRING(64),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'jshop_admin',
        key: 'admin_id'
      },
      field: 'jshop_admin_admin_id',
      defaultValue: DataTypes.UUIDV1
    },
    jshopRoleRId: {
      type: DataTypes.STRING(64),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'jshop_role',
        key: 'role_id'
      },
      field: 'jshop_role_r_id'
    }
  }, {
    tableName: 'jshop_admin_has_jshop_role'
  });
};
