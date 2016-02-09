var mongoose = require('mongoose');

var ExperimentSchema = new mongoose.Schema({
  name: {type: String, required: true},
  description: String, 
  createdBy: {type: String, required: true},
  items: [{
  	data: {type: String, required: true},
  	dataType: {type: String, enum: ['Twitter', 'YouTube', 'Webpage'], required: true}, 
  	displaySeconds: {type: Number, default: 30}
  }],
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Experiment', ExperimentSchema);