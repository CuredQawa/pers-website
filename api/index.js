// api/index.js
const app = require('../index'); // 引入你的 Express 应用

// Vercel 的 Serverless Function 入口
module.exports = (req, res) => {
  app(req, res);
};