const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conct = await mongoose.connect("mongodb+srv://Shiroma:Shiroma01!@auth-mern.rl5jf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    });

    console.log(`MongoDB Connected: ${conct.connection.host}`);
  } catch (err) {
    console.log(`Error: ${err.message}`);
    process.exit(1);
  }
}

module.exports = connectDB;