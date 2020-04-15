const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();


app.use(cors());
app.use(routes);

app.listen(3333, () => console.log('Server Started on port 3333'));