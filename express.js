const express = require('express');
let app = express();    // express实例

// 静态资源
app.use(express.static('public'))

// basic route
app.get('/', function (req, res) {
  res.send('hello world');
})

app.get('/about', function (req, res) {
  res.send('love story');
})

// 返回指定文件内容
app.get('/getFile', function (req, res) {
  res.sendFile(__dirname + '/public/base.less', err => {
    if (err) {
      console.log(err);
    } else {
      console.log('you find me');
    }
  })
})

app.listen(3000, function () {
  console.log('listening on port 3000');
})

