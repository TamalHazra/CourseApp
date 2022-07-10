var express = require('express');
var bodyParser= require('body-parser');
var multer = require('multer');
var cookieParser = require('cookie-parser');

var upload = multer();
var app = express();

app.use(cookieParser());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(upload.array());

import courses from "./routes/api";

app.use("/courses", courses);
app.use("/", function (_req, res) {
  res.send("this will not call API");
});
app.listen(5000);
