// Create web server with express
const express = require('express');
const app = express();
const port = 3000;

// Set view engine to EJS
app.set('view engine', 'ejs');

// Import the comments controller
const comments = require('./controllers/comments');

// Set up the comments controller
comments(app);

// Start the server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});

// Now, let’s create a new file called comments.js in the controllers folder and add the following code:
// controllers/comments.js
function comments(app) {
  const getComments = require('../models/comments');

  app.get('/comments', (req, res) => {
    const comments = getComments();
    res.render('comments', { comments });
  });
}

module.exports = comments;