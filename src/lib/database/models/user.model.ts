import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  clerkId: { type: String, unique: true },
  email: { type: String, unique: true },
  username: { type: String, unique: true },
  firstName: { type: String },
  lastName: { type: String },
  imageUrl: { type: String },
});

const User = models.User || model("User", UserSchema);

export default User;
