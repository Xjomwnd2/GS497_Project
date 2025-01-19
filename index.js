const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});


////////
// Import Express module
const express = require('express');
const path = require('path');

// Initialize Express app


// Set up the port (default is 3000)
const PORT = process.env.PORT || 3000;

// Serve static files (like images, stylesheets, and JS)
app.use(express.static(path.join(__dirname, 'assets')));

// Set up a basic route to serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Set up a route to handle the form submission (for contact form or weekly progress)
app.post('/submit-form', (req, res) => {
  // Here you would handle the form data (e.g., save it to a database)
  console.log(req.body); // Print form data to the console
  res.send('Form submitted successfully!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
////////