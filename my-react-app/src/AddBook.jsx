import { useState } from "react";
import { createBook } from "./services/book_services";
import { useNavigate } from "react-router-dom";
import "./AddBook.css";

const AddBook = () => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    price: ""
  });

  const navigate = useNavigate();

  // Handle input change
  const changeHandler = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submit
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await createBook(book);
      alert("Book added successfully!");
      navigate("/book-list");
    } catch (error) {
      console.log("Error adding book:", error);
    }
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <h2>Add New Book</h2>

        <form onSubmit={submitHandler}>
          <input
            type="text"
            name="title"
            placeholder="Enter book title"
            value={book.title}
            onChange={changeHandler}
            required
          />

          <input
            type="text"
            name="author"
            placeholder="Enter author name"
            value={book.author}
            onChange={changeHandler}
            required
          />

          <input
            type="number"
            name="price"
            placeholder="Enter book price"
            value={book.price}
            onChange={changeHandler}
            required
          />

          <button type="submit">Add Book</button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;