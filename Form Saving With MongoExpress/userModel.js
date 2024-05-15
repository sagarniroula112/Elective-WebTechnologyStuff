const mongoose = require("mongoose");

const detailsSchema = {
  name: {
    type: String,
    required: [true, "A user must have a name."],
  },
  phone: {
    type: Number,
    required: [true, "A user must have a number."],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "A user must have an email."],
    unique: true,
  },
  address: {
    type: String,
    required: [true, "A user must have an email."],
  },
  interests: {
    type: [String],
    default: [],
  },
  skill: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
};

const UserDetail = mongoose.model("UserDetail", detailsSchema);

module.exports = UserDetail;
