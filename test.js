var http = require('http');
var fs = require('fs');
var url = require('url');
var Hello = require('./hello');

const hostname = '192.168.1.167'
const port = 8088

// createServer -> 创建服务，返回对象，有一个listen的方法，指定该服务监听的端口号
const apiServer = http.createServer(function(req, res) {
	res.setHeader('Content-Type', 'text/plain;charset=UTF-8')
	res.setHeader('Access-Control-Allow-Origin', '*')
	res.setHeader('Access-Control-Allow-Credentials', 'true')
	res.setHeader("Access-Control-Allow-Headers", "Content-Type,Access-Token")

	// 模块引入
	let hello = new Hello();
	hello.log();

	// __表示当前目录
	console.log("打印当前目录", __dirname);

		// 解析 url 参数
		var params = url.parse(req.url, true).query;
		res.write("网站名：" + params.name);
		res.write("\n");
		res.write("网站 URL：" + params.url);
		res.write("\n");

	// 阻塞写法
	// let data = fs.readFileSync('text.txt');
	// res.end(data);

	// 非阻塞
	// fs.readFile('text.txt', function(err, data) {
	//     if (err) return console.error(err); 

	//     res.end(data);
	// })

	// 异步
	fs.unlink('111.text', (err) => {
		if (err) throw err;
		
		console.log('巴啦啦了');
	})
});

// log in terminal
apiServer.listen(port, hostname, function() {
	console.log(`this serve is running at ${hostname}:${port}`);
})

