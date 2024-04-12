const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    actionItems: [{ text: String, completed: Boolean }],
    created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Note', noteSchema);
