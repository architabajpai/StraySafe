const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors'); // ✅ Import CORS
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const reportRoutes = require('./routes/reports');

dotenv.config();
connectDB();



const app = express();

// ✅ Enable CORS (allow frontend to access backend)
app.use(cors({
  origin: '*', // 🔁 In production, replace * with your frontend URL like 'https://your-site.netlify.app'
  credentials: true
}));

// Middleware to parse JSON requests
app.use(express.json());

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/reports', reportRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
