const Logo = require('../../models/images/image'); // Assuming your model is in a 'models' directory
const mongoose = require('mongoose');

// Controller function to handle file upload
const uploadLogo = async (req, res) => {
  try {
    // Check if file exists in the request
    if (!req.file) {
      return res.status(400).send('Please upload an image file.');
    }
    console.log('EntityId from request:', req.body.entityId);

    // Create a new Image document in the database
    const newLogo = new Logo({
      entityId: req.body.entityId,  // Convert entityId to ObjectId
      entityType: req.body.entityType, // Assuming entityType is sent in the request body
      logo: req.file.buffer,
      // You can handle the 'logo' field similarly if needed
    });

    // Save the new image document
    await newLogo.save();

    res.status(201).send('Image uploaded successfully.');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = uploadLogo;
