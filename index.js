require('dotenv').config();
const express = require('express');


const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

// CORS options
const corsOptions = {
  origin: 'https://faizfolio.onrender.com', 
  methods: 'POST',
};

// Middleware to enable CORS for POST requests
app.use(cors(corsOptions));

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));

// Home route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Starting the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
