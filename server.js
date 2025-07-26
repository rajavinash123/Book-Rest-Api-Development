require('dotenv').config();
const express = require('express');
const connectToDB = require('./database/db');
const bookRoutes=require('./routes/book-routes')

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());


//create routes
app.use('/api/books', bookRoutes);

// Connect database and start server
connectToDB()

app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });