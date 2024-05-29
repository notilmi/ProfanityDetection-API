import express from "express";
const detectRouter = express.Router();
import { detectProfanityController } from "../controllers/detectController";
import { TokenAuth } from "../middleware/auth";

detectRouter.post("/", TokenAuth, detectProfanityController);

export { detectRouter };
