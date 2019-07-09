const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cellarSchema = new Schema(
  {
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
    bottles: [
      {
        type: Schema.Types.ObjectId,
        ref: "Bottle"
      }
    ]
  },
  { timestamps: true }
);

cellarSchema.virtual("capacity").get(function() {
  return this.width * this.height;
});

module.exports = mongoose.model("Cellar", cellarSchema);
