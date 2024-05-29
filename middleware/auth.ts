import { type Request, type Response, type NextFunction } from "express";
import { db } from "../utilities/connections";

export const TokenAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token: string = req.headers.Authorization || req.headers.authorization;

  if (!token)
    return res.status(400).json({
      message: "Missing Authorization Header",
    });

  const { Tokens } = await db();

  try {
    const existingToken = await Tokens.findOne({ token: token });

    if (!existingToken) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    const currentDate = new Date();
    const expiricyDate = existingToken.expiredAt;

    const validToken = currentDate < expiricyDate;
    if (!validToken) {
      return res.status(401).json({
        message: "Token Expired",
      });
    }

    if (validToken) {
      next();
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const SecretAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const secret: string = req.headers.Authorization || req.headers.authorization;

  if (!secret)
    return res.status(400).json({ message: "Missing Authorization Header" });

  if (secret !== process.env.SERVER_SECRET) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  next();
};
