/* jshint indent: 2 */

module.exports = (function () {
  var user = function (DataTypes) {
    return {
      id: {
        type: DataTypes.STRING(64),
        allowNull: false,
        primaryKey: true,

      },
      username: {
        type: DataTypes.STRING(16),
        allowNull: false
      },
      password: {
        type: DataTypes.STRING(32),
        allowNull: true
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
      }
    }
  }
  return user;
})();
