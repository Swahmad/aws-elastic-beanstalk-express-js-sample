const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Bayern Munich, European Champions for the 7th time!'))

app.listen(port);
console.log(`App running on http://localhost:${port}`);
