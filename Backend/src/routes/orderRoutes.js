const express = require('express');
const { placeOrder, getMyOrders, getAllOrders } = require('../controllers/orderController');
const { protect } = require('../middleware/auth');
const { admin } = require('../middleware/admin');

const router = express.Router();

// Protected routes for logged-in users
router.use(protect);

router.post('/', placeOrder);
router.get('/my-orders', getMyOrders);

// Admin only
router.get('/all', admin, getAllOrders);

module.exports = router;