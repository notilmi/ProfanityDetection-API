import { type Request, type Response } from "express";
import { generateRandomString } from "../utilities/utils";
import { db } from "../utilities/connections";

export const createTokenController = async (req: Request, res: Response) => {
  const { expiresInDays }: { expiresInDays: number } = req.body;
  const token = await generateRandomString(32);
  const { Tokens } = await db();

  if (!expiresInDays) return res.status(400).json({ message: "Invalid input" });

  const expiredAt: Date = new Date(
    Date.now() + expiresInDays * 24 * 60 * 60 * 1000
  );
  try {
    await Tokens.create({ token, expiredAt });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
