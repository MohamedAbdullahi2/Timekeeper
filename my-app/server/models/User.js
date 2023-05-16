// const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// validator package to check email and password validility
const validator = require("validator");

// user schema with name, email and password for login
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validator.isEmail, "Please enter an valid email address"],
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    validate: [
      validator.isStrongPassword,
      "Password must be at least 8 characters, and contains at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 symbol.",
    ],
  },
});

// password hashing before goes into database
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// generate JWT token
userSchema.methods.generateAuthToken = function () {
  const user = this;
  const token = jwt.sign({ _id: user._id }, "my_secret_key");

  return token;
};

// compare password
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model("User", userSchema);
