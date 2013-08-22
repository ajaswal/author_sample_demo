var mongoose = require('mongoose')
  , task = require('../models/author.js');


module.exports = AuthorTasks;


function AuthorTasks(connection) {
  mongoose.connect(connection);
}

AuthorTasks.prototype = {
  showAll: function(req, res) {
    task.find({titleCreated: true}, function foundTasks(err, items) {
      res.render('index',{title: 'Please fill the form ', tasks: items})
    });
  },

  addTask: function(req,res) {
    var item = req.body.item;
    newTask = new task();
    newTask.title = item.titl;
    newTask.description = item.desc;
    newTask.author = item.authr;
    newTask.save(function savedTask(err){
      if(err) {
        throw err;
      }
    });
    res.redirect('/');
  },

 view: function(req,res) {
   task.find({titleCreated: true}, function foundTasks(err, items) {
     res.render('view',{title: 'All the items ', tasks: items})
    });
    }
}
    
