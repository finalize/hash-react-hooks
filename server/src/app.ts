import * as express from "express";
import * as path from "path";
import * as cookieParser from "cookie-parser";
import * as logger from "morgan";

var indexRouter = require("../routes/index");
var usersRouter = require("../routes/users");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "/../public")));

app.use("*", (req: any, res: any) => {
  res.sendFile(path.join(__dirname + "/../public/index.html"));
});

export = app;
