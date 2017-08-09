const fs = require('fs');
const express = require('express');
const app = express();
// home为接口
app.get('/home', (req, res) => {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "X-Requested-With");
res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
res.header('Content-type', 'application/json');
//    读取文件
fs.readFile("homeData.json", (err, data) => {    
    if (err) {
        console.log(err);
        return;
    }
    res.send(data);
    });
    
});
//监听端口
app.listen(4000, () => {
    console.log("传递数据服务已经启动...");
});