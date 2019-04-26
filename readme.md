
### 项目描述

> express学习demo

[node网址](http://nodejs.cn/api/)
[express网址](https://expressjs.com/zh-cn/)

### 文件描述

> public 
* 静态资源文件目录
  
> express.js 
* 使用 express.static 来提供静态资源文件服务  (eg: http://localhost:3000/logo.png )
* express基础路由
* 返回指定文件内容

```
<!-- res.sendFile报错解决 -->
res.sendFile(__dirname + '/index.html');
res.sendFile('index.html', { root: __dirname });
```

> middleware.js
> express中间件


**修改node文件，需要重启后才能看见效果**