const express = require('express');
require('dotenv').config();
const connectDB = require('./config/dbconnect');
const routes = require('./chatgptRoutes');

connectDB();

const app = express();

app.use("/", routes);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server listening on port ${port}`));
