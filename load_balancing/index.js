const express = require('express');

const app = new express();

app.listen(3000);

app.get('/' , (req, res) => res.send('ello'))