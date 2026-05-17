const path = require('path');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
const DASHBOARD_FILE = '2026_easl_abstracts_dashboard.html';

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, DASHBOARD_FILE));
});

app.use(express.static(__dirname, { extensions: ['html'] }));

app.listen(PORT, () => {
  console.log(`EASL HCV Dashboard running at http://localhost:${PORT}`);
});
