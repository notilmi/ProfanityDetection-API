import express from "express";
const tokenRouter = express.Router();
import { createTokenController } from "../controllers/tokenController";
import { SecretAuth } from "../middleware/auth";

tokenRouter.post("/", SecretAuth, createTokenController);

export { tokenRouter };
