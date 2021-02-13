const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Routes = require('./routes/routes');
require('dotenv').config();
require('./database');

app.use(bodyParser.json());
app.use(Routes);

app.listen(8080);