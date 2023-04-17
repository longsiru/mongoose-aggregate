var ArticleCateModel = require("./model/articlecate.js");

var UserModel = require("./model/user.js");

var ArticleModel = require("./model/article.js");

//npm install -g npm@latest
//npm install
//1.分类的增加;
// var cate = new ArticleCateModel({
//   title: "国内新闻",
//   description: "国内新闻",
// });
// cate.save();

// var cate = new ArticleCateModel({
//   title: "国际新闻",
//   description: "国际新闻",
// });
// cate.save();

//2.增加用户
// var user = new UserModel({
//   username: "siru",
//   password: "13214l",
//   name: "siru",
//   age: 20,
//   sex: "女",
//   tel: 124212142156,
// });
// user.save();

//3.add article
var article = new ArticleModel();
article.title = "这是一个国内新闻";
article.cid = "643cda226f67076a6026193d"; /*国内新闻，国际新闻*/
article.author_id = "643cdc392429dcf0c1a85909";
article.author_name = "siru";
article.descripton = "这是一个国内新闻11111111 此处省略300字";
article.content = "这是一个国内新闻11111111";

article.save();
