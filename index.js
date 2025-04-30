const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

app.get('/products', async (req, res) => {
  try {
    const response = await axios.get('https://api.sheetbest.com/sheets/25622ce8-9596-482b-beb3-d22a3646b13e');
    res.json(response.data);
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ error: 'Proxy failed' });
  }
});

app.listen(port, () => {
  console.log(`✅ Proxy server running at http://localhost:${port}`);
});
