const express = require("express");
const router = express.Router();
const { POST } = require("../models");

router.get("/list", (req, res) => {
	POST.find({}, (err, data) => {
		res.send(data);
	});
});
router.get("/detail/:title", (req, res) => {
	const { title } = req.params;
	POST.find({ title }, (err, data) => {
		res.send(data[0]);
	});
});

module.exports = router;
