import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  savedSets: [{ type: mongoose.Schema.Types.ObjectId, ref: "cardSets" }],
  createdSets: [{ type: mongoose.Schema.Types.ObjectId, ref: "cardSets" }],
});

export const UserModel = mongoose.model("users", UserSchema);
