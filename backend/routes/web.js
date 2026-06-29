const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Contact = require('../models/contact_details');


const authMiddleware =require('../middleware/authMiddleware');

// Home Route
router.get('/', (req, res) => {
    res.send('Home Page');
});

// About Route
router.get('/about', (req, res) => {
    res.send('About Page');
});

// Create Contact API
router.post('/create',authMiddleware, async (req, res) => {
    try {
        const newContact = new Contact(req.body);
        const savedData = await newContact.save();

        res.status(201).json(savedData);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

//GET ALL CONTACTS
router.get('/contact-list',authMiddleware,async (req,res) => {
    try{
        const contacts = await Contact.find();
        res.status(200).json(contacts);

    }catch(error){
        res.status(500).json({
            message: error.message
        });
    }
});


//N  E W 
// Get contact by ID
router.get('/find-by/:id',authMiddleware, async (req, res) => {
  try {

    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({
        message: 'Contact not found'
      });
    }

    res.status(200).json(contact);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
});

//Validate correct ID 

router.get('/find-by-valid-id/:id',authMiddleware, async (req, res) => {
  try {

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: 'Invalid contact ID'
      });
    }

    const contact = await Contact.findById(id);

    if (!contact) {
      return res.status(404).json({
        message: 'Contact not found'
      });
    }

    res.status(200).json(contact);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
});

// Update Contact ID
router.put('/update-contact-by-id/:id',authMiddleware, async (req, res) => {
  try {

    const { id } = req.params;

    // Check if id is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: 'Invalid contact ID'
      });
    }

    const updatedContact = await Contact.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,          // return updated document
        runValidators: true // run schema validations
      }
    );

    if (!updatedContact) {
      return res.status(404).json({
        message: 'Contact not found'
      });
    }

    res.status(200).json({
      message: 'Contact updated successfully',
      data: updatedContact
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
});

 
// Delete Contact by ID
router.delete('/delete-contact-by-id/:id', authMiddleware,async (req, res) => {
  try {

    const { id } = req.params;

    // Check if id is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: 'Invalid contact ID'
      });
    }

    const deletedContact = await Contact.findByIdAndDelete(id);

    if (!deletedContact) {
      return res.status(404).json({
        message: 'Contact not found'
      });
    }

    res.status(200).json({
      message: 'Contact deleted successfully',
      data: deletedContact
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
});




module.exports = router;
