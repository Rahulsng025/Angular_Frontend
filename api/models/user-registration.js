const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	name: String,
	email: String,
	dob: String,
	gender: String,
	contact: Number,
	country: String
});

module.exports = mongoose.model('User', userSchema);
