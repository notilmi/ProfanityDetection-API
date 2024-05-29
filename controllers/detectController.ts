import { type Request, type Response } from "express";
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey: string = process.env.GEMINI_API_KEY as string;
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction:
    "You are an AI Based Profanity Detector.\n\nYour response must be a JSON object containing following schema:\n\n* profanity_included: respond true if there is a profanity and false if no profanity found\n* censored: return a censored version of the input if theres profanity detected",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_NONE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_NONE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_NONE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_NONE,
  },
];

const detectProfanityController = async (req: Request, res: Response) => {
  const { message } = req.body;

  const chatSession = model.startChat({
    generationConfig,
    safetySettings,
  });

  try {
    const testResult = await chatSession.sendMessage(message);
    const response = JSON.parse(
      testResult.response.candidates[0].content.parts[0].text
    );
    console.log("Detection Success", response);

    res.status(200).json({
      message: "Text Successfully Processed!",
      result: response,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
    console.error(error);
  }
};

export { detectProfanityController };
