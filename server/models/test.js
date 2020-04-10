const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const POST_MODEL = {
	plot: String,

};
const postSchema = new Schema(POST_MODEL);
module.exports = mongoose.model("listingsAndReviews", postSchema);
