module.exports = function (sequelize, DataTypes) {
  return sequelize.define('jcnodetopics', {
    id:{
      type: DataTypes.STRING(64),
      allowNull: false,
      primaryKey: true,
      field: 'id',
      defaultValue: DataTypes.UUIDV1
    },
    content:{
      type: DataTypes.TEXT,
      field: 'content'
    },
    authorId:{
      type:DataTypes.STRING(64),
      field: 'author_id',
    },
    createAt:{
      type:DataTypes.DATE,
      field: 'create_at',
    },
    lastReplyAt:{
      type:DataTypes.DATE,
      field:'last_reply_at'
    },
    replyCount:{
      type:DataTypes.INTEGER,
      field:'reply_count'
    },
    tab:{
      type:DataTypes.STRING(20),
      field:'tab'
    },
    title:{
      type:DataTypes.TEXT,
      field:'title'
    },
    top:{
      type:DataTypes.INTEGER(20),
      field:'top'
    },
    visitCount:{
      type:DataTypes.INTEGER,
      field:'visit_count'
    }
  }, {
    tableName: 'jcnode_topics',
    timestamps: false
  })
}