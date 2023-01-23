const mongoose = require('mongoose');

const presetSchema = new mongoose.Schema({
    key: {
        type: String,
        required: true
    },
    scale: {
        type: String,
        required: true
    }
});

const Collection = mongoose.model('Collection', collectionSchema)
module.exports = Collection