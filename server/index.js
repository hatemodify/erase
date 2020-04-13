const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const http = require("http");
const methodOverride = require("method-override");
const router = express.Router();
const app = express();
const POST = require("./models/post");
const test = require("./models/test");

const Router = require("./router");

mongoose.connect(
	"mongodb+srv://admin:asdasd!12@cluster0-gbqgc.mongodb.net/delete",
	{
		useNewUrlParser: true,
		useCreateIndex: true,
		// useFindAndModify: false,
		autoIndex: true,
	}
);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error"));

db.once("open", (callbak) => {
	console.log("db connection success");
});

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.use(morgan("combined"));
app.use(
	bodyParser.json({
		limit: "50mb",
	})
);
app.use(cors());

// app.use('/showoff', require('./router/showoff'))
// app.use('/item', require('./router/item'))
// app.use('/user', require('./router/user'))

app.use("/post", Router.POST);

http.createServer(app).listen(9998, function () {
	console.log("Https server listening on port " + 9998);
});
