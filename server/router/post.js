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
	const newImageName = [];

	// POST_DATA.imageSrc.forEach((item, idx) => {
	// 	newImageName.push(createImage(idx, item));

	// 	if (idx === POST_DATA.imageSrc.length - 1) {
	// 	}
	// });
	processArray(POST_DATA.imageSrc, newImageName, POST_DATA.contents);

	const new_post = new POST({
		title: POST_DATA.title,
		category: POST_DATA.category,
		contents: POST_DATA.contents,
	});
	new_post.save();
	res.send("success");
});

function createImage(base64Image) {
	const imageName = Math.random() * (100 - 5) + 6;
	const name = `images/${imageName}.png`;
	fs.writeFile(
		name,
		base64Image,
		{ encoding: "base64" },
		(err, success) => name
	);
	return name;
}


async function processArray(array, arr, data) {
	for (const item of array) {
		await arr.push(createImage(item));
	}
	replaceUrl(arr, data);
}

function replaceUrl(arr, data) {
	const regex = /(data:image\/[^;]+;base64[^"]+)/;

	arr.forEach((item, idx) => {
		data = data.replace(regex, `http://localhost:9998/${item}`);
	});
}

module.exports = router;
