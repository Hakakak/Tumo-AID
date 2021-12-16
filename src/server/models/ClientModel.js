const Mongoose = require("mongoose");

const Schema = Mongoose.Schema;

const ClientSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  poll: {
      type: Schema.Types.ObjectId,
      ref: "poll"
    }
}, { timestamps: true });

const Client = Mongoose.model("client", ClientSchema);

module.exports = Client;