const express = require('express');
let app = express();    // express实例

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send('hello world');
})

app.listen(3000, function () {
  console.log('listening on port 3000');
})

