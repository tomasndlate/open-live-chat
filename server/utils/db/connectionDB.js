const mongoose = require('mongoose');

const connectDB = () => {
    // Connect to MongoDB
    const url_db = 'mongodb+srv://'+process.env.DB_USER+':'+process.env.DB_PASSWORD+'@open-live-chat-cluster0.ixnd78u.mongodb.net/?retryWrites=true&w=majority'
    mongoose.connect(url_db, { useNewUrlParser: true, useUnifiedTopology: true });

    // Check the connection
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    db.once('open', () => {
    console.log('Connected to MongoDB');
    });
}

module.exports = {
  connectDB
};