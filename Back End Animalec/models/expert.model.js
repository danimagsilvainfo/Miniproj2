const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const expertSchema = new Schema({}, { strict: false });

module.exports = global.mongoConnection.model('experts', expertSchema);
