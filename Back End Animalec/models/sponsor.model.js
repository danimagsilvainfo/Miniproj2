const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sponsorSchema = new Schema({}, { strict: false });

module.exports = global.mongoConnection.model('sponsors', sponsorSchema);
