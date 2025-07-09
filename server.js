const express = require('express');
const path = require('path'); // Import the 'path' module from Node.js

const app = express();
const PORT = process.env.PORT || 3000;

// Deliverable 2: Add a GET endpoint to handle GET requests.
// The endpoint is /api/products as specified.
app.get('/api/products', (req, res) => {
    
    // Deliverable 3: Use res.sendFile() to serve an HTML file.
    // We use path.join() to create a reliable, cross-platform path to our file.
    // __dirname gives the absolute path of the directory where server.js is located.
    const filePath = path.join(__dirname, 'VIEW', 'products.html');
    
    console.log(`Serving the file from: ${filePath}`);
    
    res.sendFile(filePath);
});

// A simple root route to make sure the server is working
app.get('/', (req, res) => {
    res.send('Welcome to the server! Try navigating to /api/products');
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});