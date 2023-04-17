//var ArticleModel = require("./model/article.js");

//查询文章信息
// ArticleModel.find({}, function (err, docs) {
//   console.log(docs);
// });

//查询文章信息 并显示文章的分类以及文章的作者信息
//两个表关联查询
// ArticleModel.aggregate(
//   [
//     {
//       $lookup: {
//         from: "articlecate",
//         localField: "cid",
//         foreignField: "_id",
//         as: "cate",
//       },
//     },
//   ],
//   function (err, docs) {
//     //console.log(JSON.stringify(docs));
//     console.log(docs[2].cate); //拿到第二个article的cate信息。
//   }
// );

//用aggregate三个表关联查询。
/*
ArticleModel.aggregate(
  [
    {
      $lookup: {
        from: "articlecate",
        localField: "cid",
        foreignField: "_id",
        as: "cate",
      },
    },
    {
      $lookup: {
        from: "user",
        localField: "author_id", //article里面的author_id要等于user表里的_id相等。
        foreignField: "_id",
        as: "user",
      },
    },
  ],
  function (err, docs) {
    console.log(JSON.stringify(docs));
  }
);
*/

//用populate（）关联文章表和分类表。注意：需要引入用到的model,,不建议用
var ArticleModel = require("./model/article.js");
var ArticleCateModel = require("./model/articlecate.js");
var UserModel = require("./model/user.js");

// ArticleModel.find({})
//   .populate("cid")
//   .exec(function (err, docs) {
//     console.log(docs);
//   });

//用populate（）关联三个表。
ArticleModel.find({})
  .populate("cid")
  .populate("author_id")
  .exec(function (err, docs) {
    console.log(docs);
  });
