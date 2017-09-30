/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('jshopPermission', {
        permissionId: {
            type: DataTypes.STRING(64),
            allowNull: false,
            primaryKey: true,
            field: 'permission_id',
            defaultValue: DataTypes.UUIDV1
        },
        permissionName: {
            type: DataTypes.STRING(200),
            allowNull: false,
            field: 'permission_name'
        },
        permissionType: {
            type: DataTypes.INTEGER(1),
            field: 'permission_type'
        },
        permissionParentId: {
            type: DataTypes.STRING(64),
            allowNull: true,
            field: 'permission_parent_id'
        }
    }, {
        tableName: 'jshop_permission',
        timestamps: false
    });
};
