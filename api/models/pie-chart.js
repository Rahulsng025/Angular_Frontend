const mongoose = require('mongoose');
const chartSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    expenses: String,
    amount: Number
})

module.exports = mongoose.model('Chart', chartSchema);