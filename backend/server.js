const express = require("express");
const path = require("path");

const app = express();

// Serve static files from the 'chatPage' directory
app.use(express.static(path.join(__dirname, '../')));  // Move one level up to access 'chatPage' directory

// Handle the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../webPage.html'));  // Serve webPage.html
});

app.get('/', (req, res) => {
    res.send("Api is running");
});

// Start the server
app.listen(443, () => {
    console.log("Server started on port 443");
});
