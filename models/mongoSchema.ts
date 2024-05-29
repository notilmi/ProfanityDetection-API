import mongoose from "mongoose";

const TokenSchema = new mongoose.Schema({
  token: String,
  expiredAt: Date,
});

const Tokens = mongoose.model("Tokens", TokenSchema);

export { TokenSchema, Tokens };
