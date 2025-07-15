import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import connectDB from './config/database.js';
import urlRoutes from './routes/urlRoutes.js';
import authRoutes from './routes/authRoutes.js';
import { errorHandler, notFound } from './middlewares/errorHandler.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Serve static files (optional password prompt page, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// ✅ CORS Configuration (Fixes Deployment Errors)
app.use(cors({
  origin: (origin, callback) => {
    const allowedOrigins = [
      'https://link-shrinker-vp3z.vercel.app', // ✅ Your deployed frontend domain
      'http://localhost:3000',
      'http://localhost:5173'
    ];
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE']
}));

// Parse incoming JSON
app.use(express.json());

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api', urlRoutes);
app.use('/', urlRoutes);

// ✅ Optional root test route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// 404 and Error Handler Middleware
app.use(notFound);
app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
