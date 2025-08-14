const express = require("express");
const app = express();
// const path = require('path');
// const fs = require('fs');

const router = require("./router")
//访问router对象

app.use("/",router);
//引用router对象

app.use(express.static('public'));
//设置静态资源目录





//配置服务器访问地址（即路由）
// app.get("/list",function(req,res){
//     res.send(__dirname + "/index.html")
// })

const port = 4000

app.listen(port,function(){
    console.log(`服务器运行在:${port}端口上`);
})