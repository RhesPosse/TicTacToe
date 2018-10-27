//app.js
const express = require("express");
const app = express();
const api = require("./server/api");

app.use("/api", api);

module.exports = app;