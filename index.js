const express = require('express');

let app = express();

// tell the app to look for static files in these directories
app.use(express.static('./client/build/'));

// start the server
app.listen(3000, function() {
  console.log('Server is running on http://localhost:3000 or http://127.0.0.1:3000');
});
