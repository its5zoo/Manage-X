const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const Book = require("../model/book_details");

// Home Route
router.get("/", (req, res) => {
  res.send("Book Page");
});

// Create Book
router.post("/create-book", async (req, res) => {
  try {
    const newBook = new Book(req.body);
    const savedBook = await newBook.save();

    res.status(201).json(savedBook);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

// Get All Books
router.get("/book-list", async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

// Get Book By ID
router.get("/book-by/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

// Update Book
router.put("/update-book-by-id/:id", async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

// Delete Book
router.delete("/delete-book-by-id/:id", async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json(deletedBook);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

module.exports = router;