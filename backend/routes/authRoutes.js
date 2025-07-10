<<<<<<< HEAD
=======
// routes/authRoutes.js
>>>>>>> 5340ab254efa15c49dbc6ca285cac03b083a478d
import express from 'express';
import { register, login } from '../controllers/authController.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

<<<<<<< HEAD
export default router; 
=======
export default router; // ✅ this replaces module.exports
>>>>>>> 5340ab254efa15c49dbc6ca285cac03b083a478d
