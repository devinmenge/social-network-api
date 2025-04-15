const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

// Add a root route
app.get('/', (req, res) => {
  res.send('Welcome to the Social Network API! Use /api/users or /api/thoughts to access the API.');
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});