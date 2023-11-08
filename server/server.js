// Import npm dependencies
const express = require('express');
const http = require('http');
const cors = require('cors');
// Allow env file
require('dotenv').config()
// Import files
const connectDB = require('./utils/db/connectionDB')
const socket = require('./sockets/socket');
// Import Routes
const authenticationRoute = require('./routes/authenticationRoute');
const messageRoute = require('./routes/messageRoute');
// Define variables
const port = 3000;
const app = express();
const server = http.createServer(app);

// App configurations
app.use(cors());
app.use(express.json());

// Database connection
connectDB.connectDB()

// Socket Methods
socket.initSocketOnServer(server)
// HTTP Methods Routes
app.use('/authentication', authenticationRoute)
app.use('/messages', messageRoute);

// Start the server
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});