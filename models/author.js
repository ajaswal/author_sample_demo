var mongoose = require('mongoose')
  , Schema = mongoose.Schema;


var AuthorSchema = new Schema({
    title      : String
  , description  : String
  , author	: String
  , titleCreated : { type: Boolean, default: true}
  , creationDate      : { type: Date, default: Date.now }
});

module.exports = mongoose.model('AuthorModel', AuthorSchema);
