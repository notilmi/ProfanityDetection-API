import mongoose from "mongoose";
import { Tokens } from "../models/mongoSchema";

interface MongoModels {
  Tokens: typeof Tokens;
}

const db = async (): Promise<MongoModels> => {
  const mongoUri = process.env.MONGODB_URI;
  if (!mongoUri) {
    throw new Error("MONGODB_URI is not defined.");
  }

  try {
    await mongoose.connect(mongoUri);
    console.log("✅ Connected to MongoDB");
    return { Tokens };
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error; // Propagate the error
  }
};

export { db };
