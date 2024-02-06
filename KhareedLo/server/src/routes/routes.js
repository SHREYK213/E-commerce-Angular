const express = require("express");
const userRoutes = require('../routes/user/userRoutes.js');
const formRoutes = require('../routes/utility/formRoutes.js');
const productsRoutes = require('../routes/product/products.js');
const uploadRoutes = require('../routes/utility/uploadRoutes.js');
const router = express.Router();



router.use('/api/users', userRoutes);
router.use('/api/forms', formRoutes);
router.use('/api/products', productsRoutes);
router.use('/api/upload', uploadRoutes);

module.exports = router;
