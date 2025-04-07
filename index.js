const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Backend testing 🎉');
});

app.listen(5000, () => {
  console.log('Backend running on port 5000');
});