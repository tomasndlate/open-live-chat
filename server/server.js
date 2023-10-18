// Import npm dependencies
const express = require('express');
const http = require('http');
const cors = require('cors');
// Allow env file
require('dotenv').config()
// Import files
const connectDB = require('./utils/db/connectionDB')
const socket = require('./sockets/socket');
const messageRoutes = require('./routes/messageRoutes.js');
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
app.use('/messages', messageRoutes);

// Start the server
server.listen(port, () => {
  console.log(`Server is running on http://192.168.1.8:${port}`);
});