const express = require("express");
const app = express();
const urlRouter = require("./routes/url.router");

app.use(express.json());
app.use("/api/url", urlRouter);
module.exports = app;
