const mongoose = require('mongoose');

mongoose.connect( "mongodb+srv://svattt7:H2nnXDgvPwMQS3cU@cluster1.hhb4lcx.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false
  }
);


const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB Atlas');
});



module.exports = mongoose.connection;


