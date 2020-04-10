const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const POST_MODEL = {
	title: {
		type: String,
		require: true,
	},
	author: {
		type: String,
		require: true,
	},
	category: {
		type: String,
		require: true,
	},
	contents: {
		type: String,
		require: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},

	updatedAt: {
		type: Date,
		default: Date.now,
	},
};
const postSchema = new Schema(POST_MODEL);
module.exports = mongoose.model("post", postSchema);
