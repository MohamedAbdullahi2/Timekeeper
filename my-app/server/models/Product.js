const mongoose = require("mongoose");

// schema for watches, including watch name, which will be showing as the product name, brand and category are for searching purpose, so the user can search by brands and category such as classic, luxury, smartwatch, mechanical, quartz and so on.
const watchSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true
  },
  category: {
    type: [String],
    required: true,
  },
  stock: {
    type: Number,
    required: true,
    default: 0,
  },
});

module.exports = mongoose.model("Watch", watchSchema);
