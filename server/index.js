const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const port = process.env.VCR_PORT ?? 3345;

// Enable CORS if needed
app.use(cors());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "../client/dist")));

// Handle all other routes by serving index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

// Start the server
app.listen(port, () => {
  console.log(`V1 Server is running on PORT ${port}`);
});
