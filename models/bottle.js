const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bottleSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    year: {
      type: Number,
      default: new Date().getFullYear()
    },
    country: String,
    type: String,
    color: String,
    winery: String,
    bestTemperature: Number,
    slot: Number
  },
  { timestamps: true }
);

module.exports = mongoose.model("Bottle", bottleSchema);
