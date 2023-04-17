var mongoose = require("./db.js");
var Schema = mongoose.Schema;

// var ArticleSchema = new Schema({
//     title:{

//         type: String, unique: true

//     },
//     cid : {

//         type: Schema.Types.ObjectId

//     },   /*分类 id*/

//     author_id:{
//         type: Schema.Types.ObjectId
//     },   /*用户的id*/
//     author_name:{
//         type:String
//     },
//     descripton:String,
//     content   : String
// });

//populate()关联表。用到ref
var ArticleSchema = new Schema({
  title: {
    type: String,
    unique: true,
  },
  cid: {
    type: Schema.Types.ObjectId,
    ref: "ArticleCate", //cid和文章分类建立关系，写文章分类表的model
  } /*分类 id*/,

  author_id: {
    type: Schema.Types.ObjectId,
    ref: "User", //author_id和用户表建立关系。写用户表的model
  } /*用户的id*/,
  author_name: {
    type: String,
  },
  descripton: String,
  content: String,
});

module.exports = mongoose.model("Article", ArticleSchema, "article");
