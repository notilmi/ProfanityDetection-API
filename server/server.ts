import express, { type Request, type Response } from "express";
import bodyParser from "body-parser";

const app = express();
const port: number = parseInt(process.env.SERVER_PORT || "80");

// Middlewares
app.use(bodyParser.json());

// Routes
import { detectRouter } from "./routes/detect";
import { tokenRouter } from "./routes/token";
// Health Check
app.get("/healthcheck", (req: Request, res: Response) => {
  res.status(200).json({
    message: "OK",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

app.use("/detect", detectRouter);
app.use("/token", tokenRouter);

app.listen(port, () => {
  console.log("🤘🚀 Your Server Is Ready To Rock On Port", port);
});
