import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    }, 
    email: {
      type: String,
    },
    firstname: {
      type: String,
    },
    lastname: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    }, isVerified: {
      type: Boolean,
      default: false,
    },
   profilePicture: String,
    about: String,
    livesIn: String,
    worksAt: String,
    country: String,
    followers: [],
    following: [],
  },
  { timestamps: true }
);

const UserModel = mongoose.model("Users", UserSchema);
export default UserModel;
