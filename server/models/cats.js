var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Cat = new Schema(
  {
    name: String,
    superPower: String,
    archNemesis: String
  }
);

mongoose.connect(process.env.DB_HOST);

module.exports = mongoose.model('cats', Cat);