// api/sheetbest.js
export default async function handler(req, res) {
    const response = await fetch("https://api.sheetbest.com/sheets/25622ce8-9596-482b-beb3-d22a3646b13e");
    const data = await response.json();
    res.status(200).json(data);
  }
  