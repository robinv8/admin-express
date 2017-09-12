/* jshint indent: 2 */

module.exports = (function () {
  var spider = function (DataTypes) {
    return {
      id: {
        type: DataTypes.STRING(64),
        allowNull: false,
        primaryKey: true,
        defaultValue:DataTypes.UUIDV1
      },
      url: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      urltext: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      parenturl: {
        type: DataTypes.STRING(100),
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
  return spider;
})();
