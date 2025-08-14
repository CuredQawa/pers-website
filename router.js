const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
// const marked = require('marked');



// 首页路由：返回主页 HTML 文件
router.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, 'public', 'html', 'home.html'));
    res.redirect(301,'/html/home.html');
});




module.exports = router;