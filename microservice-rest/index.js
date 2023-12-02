const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  try {
    const helperResponse = await axios.get('http://helper-api:5000');
    res.json({ message: 'I am the REST API getting Data from Helper Service:', data: helperResponse.data });
  } catch (error) {
    res.status(500).json({ message: 'Error calling Helper Service', error: error.message });
  }
});

app.post('/', async (req, res) => {
  try {
    const helperResponse = await axios.post('http://helper-api:5000');
    res.json({ message: ' POST: I am the REST API getting Data from Helper Service:', data: helperResponse.data });
  } catch (error) {
    res.status(500).json({ message: 'Error calling Helper Service', error: error.message });
  }
});

app.put('/', async (req, res) => {
  try {
    const helperResponse = await axios.put('http://helper-api:5000');
    res.json({ message: ' PUT: I am the REST API getting Data from Helper Service:', data: helperResponse.data });
  } catch (error) {
    res.status(500).json({ message: 'Error calling Helper Service', error: error.message });
  }
});

app.delete('/', async (req, res) => {
  try {
    const helperResponse = await axios.delete('http://helper-api:5000');
    res.json({ message: ' DELETE: I am the REST API getting Data from Helper Service:', data: helperResponse.data });
  } catch (error) {
    res.status(500).json({ message: 'Error calling Helper Service', error: error.message });
  }
});

app.listen(port, () => {
  console.log(`REST API listening at http://localhost:${port}`);
});
