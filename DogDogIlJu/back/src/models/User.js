const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxLength: 50,
    require:true
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    require:true
  },
  password: {
    type: String,
    minLength: 4,
    require:true
  },
  nickName: {
    type: String,    
    maxLength: 50,
    unique: true,
    require:true
  },
  role: {
    type: Number,
    default: 0,
     require:true
  },
  isHavePet:{
    type: Boolean,
    default : false
  },
  howManyPet:{
    type: Number,
    default: 0
  },
  mainPet:{
    type: Number,
    unique: 0
  },
  coordinates: {
    type: GeolocationCoordinates,
    require:true
  },
  createdAt: Date,
});
const User = mongoose.model("user", userSchema);
module.exports = User;
