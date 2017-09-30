/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('jshopAdmin', {
        adminId: {
            type: DataTypes.STRING(64),
            allowNull: false,
            primaryKey: true,
            field: 'admin_id',
            defaultValue: DataTypes.UUIDV1
        },
        adminName: {
            type: DataTypes.STRING(20),
            allowNull: false,
            unique: true,
            field: 'admin_name'
        },
        adminPassword: {
            type: DataTypes.STRING(32),
            allowNull: false,
            defaultValue: '',
            field: 'admin_password'
        },
        adminLoginTime: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            defaultValue: '0',
            field: 'admin_login_time',
        },
        adminLoginNum: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            defaultValue: '0',
            field: 'admin_login_num'
        },
        adminIsSuper: {
            type: DataTypes.INTEGER(1),
            allowNull: false,
            defaultValue: '0',
            field: 'admin_is_super'
        },
        roleId: {
            type: DataTypes.STRING(64),
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'jshop_role',
                key: 'role_id'
            },
            field: 'jshop_role_role_id'
        }
    }, {
        tableName: 'jshop_admin',
        timestamps: false
    });
};
