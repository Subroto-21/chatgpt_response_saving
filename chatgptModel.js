const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    content: String
}, {
    timestamps: true
});

module.exports = mongoose.model("Article", articleSchema);
