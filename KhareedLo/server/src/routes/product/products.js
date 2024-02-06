const express = require("express");
const router = express.Router();
const  { addBrands, getBrands }  = require("../../controllers/product/brandController.js");

router.post('/addBrands',addBrands)
router.get('/getBrands',getBrands)

module.exports = router;
