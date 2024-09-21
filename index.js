const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
// Initialize Express app
const app = express();

app.use(cors());
// Connect to MongoDB
connectDB();

// Middleware for JSON
app.use(express.json());

// Routes
app.use('/api/home', require('./routes/homeRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
