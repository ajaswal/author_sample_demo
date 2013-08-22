var mongoose = require('mongoose')
  , Schema = mongoose.Schema;


var AuthorSchema = new Schema({
    title      : String
  , description  : String
  , author	: String
  , creationDate      : { type: Date, default: Date.now }
});

module.exports = mongoose.model('AuthorModel', AuthorSchema);
