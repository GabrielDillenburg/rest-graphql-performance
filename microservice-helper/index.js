const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.json({ message: 'GET: Hello from Helper Service API!' });
});

app.post('/', (req, res) => {
  res.json({ message: 'POST: Hello from Helper Service API!' });
});

app.put('/', (req, res) => {
  res.json({ message: 'PUT: Hello from Helper Service API!' });
});

app.delete('/', (req, res) => {
  res.json({ message: 'DELETE: Hello from Helper Service API!' });
});

app.listen(port, () => {
  console.log(`Service helper listening at http://localhost:${port}`);
});
