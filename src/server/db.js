const mongoose = require("mongoose");

const MONGO_URI = "mongodb+srv://hakak:janaxperjan@cluster0.qej0e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
if (!MONGO_URI) {
  throw new Error("You must provide a MongoDB URI");
}

function connect() {
  mongoose.connect(MONGO_URI, { useNewUrlParser: true});
  const db = mongoose.connection;
  db.once("open", () => console.log("Connected to MongoDB instance."));
  db.on("error", (error) => console.log("Error connecting to MongoDB:", error));

  return db;
}

module.exports = { connect };