const mongoose = require('mongoose');

mongoose.connect( "mongodb+srv://svattt7:H2nnXDgvPwMQS3cU@cluster1.hhb4lcx.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false
  }
);

module.exports = mongoose.connection;