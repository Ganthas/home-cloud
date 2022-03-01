const express = require('express');
const fileUpload = require('express-fileupload');

const app = express();
const port = process.env.port || 5000;
app.use(fileUpload());

app.get('/', (req, res) => res.send('Hello world'));
app.listen(port, () =>`Server on running on ${port}`);