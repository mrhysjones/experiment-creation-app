var express = require('express');
var router = express.Router();

var Experiment = require('../models/Experiments.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
	Experiment.find(function (err, experiments) {
		if (err) return next(err);
		res.json(experiments);
	});
});

/* GET /api/experiments/id */
router.get('/:id', function(req, res, next) {
  Experiment.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


// POST /api/experiments
router.post('/', function(req, res, next) {
  Experiment.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /api/experiments/:id */
router.put('/:id', function(req, res, next) {
  Experiment.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


/* DELETE /experiments/:id */
router.delete('/:id', function(req, res, next) {
  Experiment.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});



module.exports = router;
