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

cellarSchema.pre("save", function(next) {
  const size = this.capacity;
  console.log(size);
  for (let i = 0; i < size; i += 1) {
    if (!this.bottles[i]) this.bottles[i] = null;
  }
  next();
});

module.exports = mongoose.model('Cellar', cellarSchema);