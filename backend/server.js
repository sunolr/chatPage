const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

const app = express();
dotenv.config();

// Serve static files from the 'chatPage' directory
app.use(express.static(path.join(__dirname, '../')));  // Move one level up to access 'chatPage' directory

// Handle the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../webPage.html'));  // Serve webPage.html
});


const PORT = process.env.PORT || 5000

// Start the server
app.listen(PORT, () => {
    console.log(`Server started on PORT ${PORT}`);
});