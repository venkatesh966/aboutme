/* eslint-disable allow */
/**
 * third party libraries
 */
const bodyParser = require('body-parser');
const express = require('express');
const helmet = require('helmet');
const http = require('http');
const cors = require('cors');
const path = require('path');

/**
 * server configuration
 */
const environment = process.env.NODE_ENV || 'production'; // Use environment variable or default to 'production'

/**
 * express application
 */
const app = express();
const server = http.Server(app);

// Configure CORS
app.use(cors({
    origin: 'http://example.com', // Replace with your allowed origin(s)
}));

// Secure express app with Helmet
app.use(helmet());

// Parsing the request bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, 'build')));

// Handle all GET requests by serving the React app's index.html
app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

// Start the server
server.listen(4200, '0.0.0.0', (err) => { // Bind to all network interfaces
    if (err) {
        console.error('Error starting server:', err);
        return;
    }
    console.log('Server is running on http://0.0.0.0:4200');
    if (environment !== 'production' && environment !== 'development' && environment !== 'local') {
        console.error(`NODE_ENV is set to ${environment}, but only production, development, and local are valid.`);
        process.exit(1);
    }
});
