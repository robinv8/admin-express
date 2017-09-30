/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('jshopRole', {
        roleId: {
            type: DataTypes.STRING(64),
            allowNull: false,
            primaryKey: true,
            field: 'role_id',
            defaultValue: DataTypes.UUIDV1
        },
        roleName: {
            type: DataTypes.STRING(200),
            allowNull: false,
            field: 'role_name'
        }
    }, {
        tableName: 'jshop_role',
        timestamps: false
    });
};
