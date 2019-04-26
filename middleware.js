const express = require('express');
let app = express();

let myLogger = function (req, res, next) {
  console.log('this is myLogger');

  req.wareName = 'myLogger';
  next();
};

/**
 * app.user(xxx) 调用指定的中间件函数
 * 中间件装入顺序  中间件函数 =>  app.user(xxx) =>  路由
 * next() 函数 将请求传递到堆栈中的下一个中间件函数
 */
app.use(myLogger);

app.get('/', function (req, res) {
  let resText = '使用了中间件' + req.wareName;
  res.send(resText)
});

app.listen(3000, function () {
  console.log('listening on port 3000');
})
