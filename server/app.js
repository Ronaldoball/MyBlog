var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var bodyParser = require("body-parser");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var jsonRouter = require("./routes/json");
var MsgRouter = require("./routes/msg");
var loginRouter = require("./routes/login");
var signRouter = require("./routes/sign");
var submitMsgRouter = require("./routes/submitMsg");

var app = express();

//设置允许跨域访问该服务.
app.use((req, res, next) => {
  // 设置是否运行客户端设置 withCredentials
  // 即在不同域名下发出的请求也可以携带 cookie
  res.header("Access-Control-Allow-Credentials", true);
  // 第二个参数表示允许跨域的域名，* 代表所有域名
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, OPTIONS"); // 允许的 http 请求的方法
  // 允许前台获得的除 Cache-Control、Content-Language、Content-Type、Expires、Last-Modified、Pragma 这几张基本响应头之外的响应头
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );
  if (req.method == "OPTIONS") {
    res.sendStatus(200);
  } else {
    next();
  }
});

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

// 添加json解析
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/getJson", jsonRouter);
app.use("/users", usersRouter);
app.use("/getMsg", MsgRouter);
app.use("/login", loginRouter);
app.use("/submitInfo", signRouter);
app.use("/submitMsg", submitMsgRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
