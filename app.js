var ArticleModel = require("./model/article.js");

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

//三个表关联查询
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
