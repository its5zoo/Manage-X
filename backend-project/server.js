require('dotenv').config();
const cors = require('cors');
const express = require('express');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Import Database Connection
require('./dbconnection/dbcon');

// Import Route File
const webRoutes = require('./routes/web');
const webRoutes1 = require('./routes/web1');

// Use Routes
app.use('/', webRoutes);
app.use('/book/', webRoutes1);

// Server Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});