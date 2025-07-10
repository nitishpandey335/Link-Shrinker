import express from 'express';
<<<<<<< HEAD
import { shortenUrl, getAllUrls, redirectUrl, verifyPassword, toggleUrlStatus, resetPasswordAttempts } from '../controllers/urlController.js';
import { authenticate } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/shorten', authenticate, shortenUrl);
router.get('/urls', authenticate, getAllUrls);
router.post('/verify-password', verifyPassword);
router.put('/toggle/:urlId', authenticate, toggleUrlStatus);
router.put('/reset-attempts/:urlId', authenticate, resetPasswordAttempts);
router.get('/:shortUrl', redirectUrl);

export default router; 
=======
import { shortenUrl, getAllUrls, redirectUrl } from '../controllers/urlController.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('URL Shortener API is running!');
});

router.post('/shorten', shortenUrl);
router.get('/urls', getAllUrls);

// Keep this last to avoid conflicting with above routes
router.get('/:shortUrl', redirectUrl);

export default router;
>>>>>>> 5340ab254efa15c49dbc6ca285cac03b083a478d
