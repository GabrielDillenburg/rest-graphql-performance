const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Hello from REST API!' });
});

app.listen(port, () => {
  console.log(`REST API listening at http://localhost:${port}`);
});
