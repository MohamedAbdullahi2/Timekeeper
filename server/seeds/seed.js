const db = require("../config/connection");
const Product = require("../models/Product");
const watches = require("./watchdata.json");

db.once("open", async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(watches);

    console.log("Data has been seeded successfully.");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
});
