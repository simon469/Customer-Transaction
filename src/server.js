const express = require('express');
const app = express();
const port = 5000;
const data = require('./data.json');

app.get('/api/data', (req, res) => {
    res.json(data);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
