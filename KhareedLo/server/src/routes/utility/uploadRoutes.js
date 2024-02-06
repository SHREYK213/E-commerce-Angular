const express = require('express');
const uploadMiddleware = require('../../middleware/utility/multer');
const uploadImageController = require('../../controllers/utility/imageUpload');

const router = express.Router();

// POST endpoint for file upload
router.post('/upload-logo', uploadMiddleware, uploadImageController);

module.exports = router;
