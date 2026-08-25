const express = require('express');
const { getStats, updateOrderStatus } = require('../controllers/adminController');
const { protect } = require('../middleware/auth');
const { admin } = require('../middleware/admin');

const router = express.Router();

// All routes require admin
router.use(protect, admin);

router.get('/stats', getStats);
router.put('/orders/:id/status', updateOrderStatus);

module.exports = router;