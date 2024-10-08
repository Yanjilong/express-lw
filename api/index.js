// api/index.js
const app = require("../server"); // 引入 express 应用
const serverless = require("serverless-http");

module.exports = serverless(app);
