import express from 'express';
import donationsController from '../controllers/donations';

const router = express.Router();

router.get('/donations/:tag', donationsController.calculateDonations);

export = router;