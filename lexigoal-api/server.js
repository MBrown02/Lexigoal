const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 4000;

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/test_lexigoal_db', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
});

mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use(cors()); // Enabling CORS for all routes
app.use(express.json()); // Parsing JSON data

// Your routes will go here
const testRouter = require('./routes/test_route');
app.use(testRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
