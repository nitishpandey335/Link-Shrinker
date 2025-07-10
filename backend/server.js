<<<<<<< HEAD
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
=======
// server.js

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/database.js';
import urlRoutes from './routes/urlRoutes.js';
import authRoutes from './routes/authRoutes.js';
import { redirectUrl } from './controllers/urlController.js';
import { errorHandler, notFound } from './middlewares/errorHandler.js';

dotenv.config(); // Load environment variables
>>>>>>> 5340ab254efa15c49dbc6ca285cac03b083a478d

const app = express();
const PORT = process.env.PORT || 5000;

<<<<<<< HEAD
connectDB();

// Static file serving for password prompt page
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? [process.env.FRONTEND_URL] 
    : ['http://localhost:3000', 'http://localhost:5173'], // Common dev ports
  credentials: true, // If you need to send cookies
  optionsSuccessStatus: 200,
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE']
}));
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api', urlRoutes);
app.use('/', urlRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 
=======
// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api', urlRoutes);
app.use('/api/auth', authRoutes); // Authentication routes

// Short URL redirection route
app.get('/:shortUrl', redirectUrl);

// Health check route
app.get('/', (req, res) => {
  res.send('URL Shortener API with Auth is running!');
});

// Error handling
app.use(notFound);
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
>>>>>>> 5340ab254efa15c49dbc6ca285cac03b083a478d
