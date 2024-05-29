## Profanity Detection API 👿💢

Profanity is such a problem in an App where user can submits their own message or text. So thats basically why this API exist 😁

## How It Works? 🤔

How this API works is quiet simple, the API snatch the message users are trying to send and send it to Google's Gemini to filter if theres any profanity included in the text😁. So modern tech on the roll😄

![image.png](/.eraser/LBCMTjK68vVjM48M9oYI___4qwUttg4opT9xfV6c6XXTFE8Kij2___hH-HE8y8ohcSYHhcdhtIj.png "image.png")

## How I Made It Work? 🤔

No complex set up!😂. All you need is Google Gemini API Key And A MongoDB URI and just slap it into your .env file👍

```
# Server Set Up
SERVER_PORT=3000
SERVER_SECRET="Your App Secret (Just Put A Random Word Then You'll Fine)"

# Gemini Key

GEMINI_API_KEY="Your Gemini API Key"

# MONGODB

MONGODB_URI="Your MongoDB URI"
```

And fires it up with all new bun runtime 🔥

```
bun --watch server.ts
```

And All Done! The API Is Ready To Roll🔥🔥🔥
