const fs = require("fs");
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

	POST_DATA.imageSrc.forEach((item, idx) => {
		const name = createImage(idx, item);
		POST_DATA.contents.replace(
			/<img[^>]*src=[\"']?([^>\"']*(?:base64)+[^>\"']+)[\"']?[^>]*>/g,
			`<img src="${name}"/>`
		);
	});

	setTimeout(() => {
		console.log(POST_DATA.contents);

		const new_post = new POST({
			title: POST_DATA.title,
			category: POST_DATA.category,
			contents: POST_DATA.contents,
		});
		new_post.save();
		res.send("success");
	}, 5000);
});

function createImage(idx, base64Image, data) {
	const imageName = Math.random() * (100 - 5) + 6;
	const name = `images/${imageName}${idx}.png`;
	fs.writeFile(
		name,
		base64Image,
		{ encoding: "base64" },
		(err, success) => name
	);
	return name;
}

module.exports = router;
