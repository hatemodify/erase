const express = require("express");
const router = express.Router();
const { POST } = require("../models");

router.get("/list", (req, res) => {
	POST.find({}, (err, data) => {
		res.send(data);
	});
});

module.exports = router;
