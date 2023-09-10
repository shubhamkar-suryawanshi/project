const express = require('express');
const app = express();
const erorrMiddleware = require('./middleware/error');
const cookieParser = require('cookie-parser');

var cors = require('cors');
app.use(cors());

app.use(express.json());
app.use(cookieParser());
//routes
const product = require('./routes/productRoutes');
const user = require('./routes/userRoutes');
const order = require('./routes/orderRoute');

app.use('/api/v1', product);
app.use('/api/v1', user);
app.use('/api/v1', order);

app.use(erorrMiddleware);

module.exports = app;
