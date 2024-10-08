// server.js
const express = require("express");
const app = express();

const timeout = require('connect-timeout');

// 设置请求超时时间为30秒
app.use(timeout('30s'));

app.get("/", (req, res) => {
    res.json({ message: "Hello World!" });
});

app.get("/api/hello", (req, res) => {
    res.json({ message: "Hello from Express!" });
});

// 设置端口，默认使用 3999
const PORT = 3999;

// 启动服务器，监听指定的端口
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
