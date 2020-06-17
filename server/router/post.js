const express = require("express");
const router = express.Router();
const { POST } = require("../models");

router.get("/list", (req, res) => {
	POST.find()
		.sort({ createdAt: -1 })
		.then((data) => {
			res.send(data);
		});
});
router.get("/detail/:title", (req, res) => {
	const { title } = req.params;
	POST.find({ title }, (err, data) => {
		res.send(data[0]);
	});
});

router.post("/write", (req, res) => {
	const POST_DATA = req.body;

	const new_post = new POST({
		title: POST_DATA.title,
		category: POST_DATA.category,
		contents: POST_DATA.contents,
	});
	new_post.save();

	res.send("success");
});

module.exports = router;
