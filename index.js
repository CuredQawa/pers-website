const express = require("express");
const app = express();

const router = require("./router");
app.use("/", router);

app.use(express.static('public'));

// 只在本地运行时启动服务器
if (require.main === module) {
  const port = process.env.PORT || 4000;
  app.listen(port, () => {
    console.log(`服务器运行在:${port}端口上`);
  });
}

// 👇 必须导出 app，供 Vercel 使用
module.exports = app;