const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bottleSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    default: new Date().getFullYear();
  },
  country: String,
  type: String,
  color: String,
  winery: String,
  bestTemperature: Number
}, {timestamps: true});

const cellarSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  width: {
    type: Number,
    required: true
  },
  height: {
    type: Number,
    required: true
  },
  temperature: {
    type: Number,
    default: 62
  },
  bottles: [bottleSchema]
}, {timestamps: true});

cellarSchema.virtual('capacity').get(function() {
  return this.width * this.height;
});

module.exports = mongoose.model('Cellar', cellarSchema);