import axios from 'axios';

export default async function handler(req, res) {
  try {
    const r = await axios.get(
      'https://api.sheetbest.com/sheets/25622ce8-9596-482b-beb3-d22a3646b13e'
    );
    res.status(200).json(r.data);
  } catch (err) {
    console.error('Proxy error', err);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}
