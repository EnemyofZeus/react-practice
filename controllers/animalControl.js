//Control them animals
var AnimalModel = require("./../models/AnimalModel.js");

module.exports = {
  create: function(req, res, next){
  var animal = new AnimalModel(req.body);
  animal.save(function(err, result){
    if(err){
      res.send(err);
    } else {
      res.send(result);
    }
  });
  },
  read: function(req, res, next){
    AnimalModel
    .find()
    .exec(function(err, result){
      if(err){
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },
  update: function(req, res, next){
    AnimalModel.
    findByIdAndUpdate(req.params.id, req.body,function(err, result){
      if(err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },
  delete:function(req,res,next){
    AnimalModel.findByIdAndRemove(req.params.id, req.body, function(err, result){
      if(err){
        res.send(err);
      } else {
        res.send(result);
      }
    })
  }
};
