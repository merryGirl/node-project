#### node学习 

[网址](http://nodejs.cn/api/)


##### fs

> fs模块提供一个API， 用于模仿标准 POSIX 函数的方式与文件系统进行交互

###### 同步异步

> 文件系统的操作都具有同步和异步的形式

> 异步
>> 异步的形式总是将完成回调作为其最后一个参数。 传给完成回调的参数取决于具体方法，但第一个参数始终预留用于异常。 如果操作成功完成，则第一个参数将为 null 或 undefined。
  
```
fs.unlink('/tmp/hello', (err) => {
  if (err) throw err;
  console.log('已成功删除 /tmp/hello');
});
```

> 同步
>> 同步如果有异常会立即抛出，解决方法如下

```
try {
  fs.unlinkSync('/tmp/hello');
  console.log('已成功删除 /tmp/hello');
} catch (err) {
  // 处理错误
}
```

**注意：同步会阻塞进程，异步虽然就算并列操作，也无法保证前面的代码执行顺序在前，此种情况需要嵌套解决**

```
fs.rename('/tmp/hello', '/tmp/world', (err) => {
  if (err) throw err;
  fs.stat('/tmp/world', (err, stats) => {
    if (err) throw err;
    console.log(`文件属性: ${JSON.stringify(stats)}`);
  });
});
```

###### 文件路径

> 形式：字符串、Buffer、或使用 file: 协议的 URL 对象

```
协议的url对象

const fileUrl = new URL('file:///tmp/hello');
fs.readFileSync(fileUrl);
```


***

**番外点**

> IEEE (Institute of Electrical and Electronic Engineers)
> >为美国电子电机工程师学会 是一个国际性的电子技术与信息科学工程师的协会

**API**

> fs.unlink(path, callback)

[链接](http://nodejs.cn/api/fs/fs_unlink_path_callback.html)

```
<!-- 异步删除文件或这符号链接 -->

fs.unlink('path/file.txt', (err) => {
  if (err) throw err;
  console.log('文件已删除');
});
```

> fs.accessSync(path[, mode])
>> 用户对path指定的文件或者目录的权限

> fs.appendFile(path, data[, options], callback)
>> 异步地将数据追加到文件，如果文件不存在就会创建该文件

> fs.appendFileSync(path, data[, options])
>> 同步追加内容

> fs.copyFile(src, dest[, flags], callback)
>> 异步地将src拷贝到dest

> fs.mkdir(path[, options], callback)
>>  异步创建目录

> fs.readFile(path[, options], callback)
>> 异步读取文件内容

> fs.rename(oldPath, newPath, callback)
>> 重命名该文件