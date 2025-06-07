const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the "public" folder
app.use(express.static('public'));

// To parse form data (HTML POST form submissions)
app.use(express.urlencoded({ extended: true }));

// Handle form submission
app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;
    console.log('Form submission received:', req.body);

    res.send(`<h1>Thank you, ${name}! Your message has been received.</h1>`);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
