<p><a target="_blank" href="https://app.eraser.io/workspace/LBCMTjK68vVjM48M9oYI" id="edit-in-eraser-github-link"><img alt="Edit in Eraser" src="https://firebasestorage.googleapis.com/v0/b/second-petal-295822.appspot.com/o/images%2Fgithub%2FOpen%20in%20Eraser.svg?alt=media&amp;token=968381c8-a7e7-472a-8ed6-4a6626da5501"></a></p>

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


<!-- eraser-additional-content -->
## Diagrams
<!-- eraser-additional-files -->
<a href="/Profanity Detection API 😡💢-Profanity Detection API Flow-1.eraserdiagram" data-element-id="--p4hSen57aXOSGtNKc7x"><img src="/.eraser/LBCMTjK68vVjM48M9oYI___4qwUttg4opT9xfV6c6XXTFE8Kij2___---diagram----f249d2cb95e5185e1094e3c278ef4711-Profanity-Detection-API-Flow.png" alt="" data-element-id="--p4hSen57aXOSGtNKc7x" /></a>
<!-- end-eraser-additional-files -->
<!-- end-eraser-additional-content -->
<!--- Eraser file: https://app.eraser.io/workspace/LBCMTjK68vVjM48M9oYI --->