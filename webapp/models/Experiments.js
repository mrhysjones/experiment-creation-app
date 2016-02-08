var mongoose = require('mongoose');

var ExperimentSchema = new mongoose.Schema({
  name: String,
  description: String, 
  createdBy: String, 
  items: [{
  	data: String, 
  	dataType: {type: String, enum: ['Twitter', 'YouTube', 'Webpage']}, 
  	displaySeconds: Number
  }],
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Experiment', ExperimentSchema);