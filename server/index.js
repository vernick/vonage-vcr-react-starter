require("dotenv").config();

const express = require("express");
const path = require("path");
const cors = require("cors");
const fs = require("fs");


const app = express();
const port = process.env.VCR_PORT ?? 3345;

// Enable CORS if needed
app.use(cors());

// Serve all static files EXCEPT index.html
// This is so the environment variables can be injected into the index.html which
// is the root of the react app
app.use(
  express.static(path.join(__dirname, "../client/dist"), {
    index: false, // prevent auto-serving index.html
  })
);

// Helper to extract REACT_ env vars from both the vcr.yml and .env files
//
function getAppEnvVars() {
  const envVars = {};
  for (const [key, value] of Object.entries(process.env)) {
    if (key.startsWith("REACT_")) {
      envVars[key] = value;
    }
  }
  return envVars;
}

// Serve index.html with injected APP_ env vars
app.get("*", (req, res) => {
  console.log('updating client index.html');
  const indexPath = path.join(__dirname, "../client/dist/index.html");

  fs.readFile(indexPath, "utf8", (err, html) => {
    if (err) {
      console.error("Failed to read index.html:", err);
      return res.status(500).send("Server error");
    }

    const appEnvVars = getAppEnvVars();
    const envScript = `
    <script>
      window.env = ${JSON.stringify(appEnvVars, null, 2)};
    </script>
    `;
    

    // Inject before closing </head> tag
    const updatedHtml = html.replace("</head>", `${envScript}</head>`);

    res.send(updatedHtml);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`V1.0 Server is running on PORT ${port}`);
});
