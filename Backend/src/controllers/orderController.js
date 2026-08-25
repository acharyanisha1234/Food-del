const Order = require('../models/Order');
const MenuItem = require('../models/MenuItem');

// @desc    Place a new order
// @route   POST /api/orders
// @access  Private
const placeOrder = async (req, res) => {
  const { items, address, phone } = req.body;
  const userId = req.user._id;

  // Validate items exist and fetch prices from DB
  try {
    let total = 0;
    const orderItems = [];

    for (const item of items) {
      const menuItem = await MenuItem.findById(item.menuItemId);
      if (!menuItem) {
        return res.status(404).json({ message: `Item ${item.menuItemId} not found` });
      }
      if (!menuItem.available) {
        return res.status(400).json({ message: `${menuItem.name} is not available` });
      }
      const price = menuItem.price;
      total += price * item.quantity;
      orderItems.push({
        menuItemId: item.menuItemId,
        name: menuItem.name,
        price,
        quantity: item.quantity,
      });
    }

    const order = await Order.create({
      userId,
      items: orderItems,
      total,
      address,
      phone,
      status: 'Pending',
    });

    // Populate user info for response
    await order.populate('userId', 'name email phone');
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get orders for logged-in user
// @route   GET /api/orders/my-orders
// @access  Private
const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user._id })
      .sort({ createdAt: -1 })
      .populate('userId', 'name email');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all orders (admin only)
// @route   GET /api/orders/all
// @access  Private/Admin
const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .sort({ createdAt: -1 })
      .populate('userId', 'name email phone');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { placeOrder, getMyOrders, getAllOrders };