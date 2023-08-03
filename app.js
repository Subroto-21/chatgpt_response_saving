const express = require("express");
const url = require("url");

const app = express();
const port = 3000;

// Middleware to parse incoming request URLs
app.use((req, res, next) => {
  req.parsedUrl = url.parse(req.url, true);
  next();
});

// Route to handle parsed URL and extract "question"
app.get("/user-input/:question", (req, res) => {
  const { question } = req.params;

  // Using the "question" variable to send it to ChatGPT or perform any other action.
  // For demonstration purposes, I'll just send it back in the response.
  res.json({ question });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
