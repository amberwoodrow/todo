var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Cat = require('../models/cats');

// GET all
router.get('/cats', function(req, res, next) {
  Cat.find(function(err, data){
    if(err){
      res.json({'message' : err});
    }
    else {
      // retrieve all casts
      //render cats loop through
      res.render('cats', {cats : data});
    }
  });
});

// GET one
router.get('/cat/:id', function(req, res, next){
  Cat.findById(req.params.id, function(err, data) {
    if(err){
      res.json({'message' : err});
    }
    else {
      res.render('cat', {cat : data});
    }
  });
});

// POST all
router.post('/cats', function(req, res, next) {
  newCat = new Cat({
    name: req.body.name,
    superPower: req.body.superPower,
    archNemesis: req.body.archNemesis
  });
  newCat.save(function(err, data) {
    if(err) {
      res.json({'message' : err});
    }
    else {
      res.json(newCat);
    }
  });
});

// PUT one
router.put('/cat/:id', function(req, res, next) {
  
  var update = {
    name: req.body.name,
    superPower: req.body.superPower,
    archNemesis: req.body.archNemesis
  };
  Cat.findByIdAndUpdate(req.params.id, update, function(err, data){
    if(err){
      res.json({'message' : err});
    }
    else {
      res.redirect('/cats');
    }
  });
});

// delete single
router.delete('/cat/:id', function(req, res, next) {
  Cat.findByIdAndRemove(req.params.id, function(err, data){
    if(err){
      res.json({'message' : err});
    }
    else {
      res.redirect('/cats');
    }
  });
});

// // http -f POST localhost:3000/cats name=jackJohnson superPower= archNemesis=water
// // http -f PUT localhost:3000/cats name=jack zoo=False nemesis=heat
// // http -f DELETE localhost:3000/cats name=jack zoo=True nemesis=heat
// // http GET localhost:3000/cats

module.exports = router;
