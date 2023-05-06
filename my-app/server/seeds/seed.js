const db = require("../config/connection");
const Watch = require("../models/Product");
const seedData = require("./watchdata.json");

db.once("open", async () => {
  try {
    await Watch.deleteMany({});
    await Watch.insertMany(seedData.watches);

    console.log("Data has been seeded successfully.");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
});
