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

cellarSchema.pre("save", function(next) {
  this.bottles.splice((this.width * this.height));
  for (let i = 0; i < (this.width * this.height); i += 1) {
    if (!this.bottles[i]) this.bottles.set(i, null);
  }

  next();
});

module.exports = mongoose.model("Cellar", cellarSchema);
