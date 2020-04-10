const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const POST = require("../model/post");

router.get("/list", (req, res) => {
	POST.find({}, (err, data) => {
		res.send(data);
	});
});
