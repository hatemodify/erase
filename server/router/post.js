const fs = require("fs");
const express = require("express");
const router = express.Router();
const { POST } = require("../models");

router.get("/list", (req, res) => {
	POST.find()
		.sort({ createdAt: -1 })
		.limit(10)
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

	processArray(POST_DATA.imageSrc, newImageName, POST_DATA.contents).then(
		(result) => {
			const new_post = new POST({
				title: POST_DATA.title,
				category: POST_DATA.category,
				contents: result,
			});
			new_post.save();
			res.send(result);
		}
	);
});

async function processArray(arr, newArr, data) {
	for (const item of arr) {
		await newArr.push(createImage(item));
	}
	return replaceUrl(newArr, data);
}

function replaceUrl(arr, data) {
	const regex = /(data:image\/[^;]+;base64[^"]+)/;

	arr.forEach((item) => {
		data = data.replace(regex, `http://localhost:9998/${item}`);
	});
	return data;
}

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

module.exports = router;
