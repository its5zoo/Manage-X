import { useEffect, useState } from "react";
import {
  getBookById,
  updateBook
} from "./services/book_services";
import { useParams, useNavigate } from "react-router-dom";
import "./updatebook.css";

const UpdateBook = () => {
  const { id } = useParams();
  const navigator = useNavigate();

  const [book, setBook] = useState({
    title: "",
    author: "",
    price: ""
  });

  useEffect(() => {
    fetchBook();
  }, []);

  const fetchBook = async () => {
    try {
      const response = await getBookById(id);
      setBook(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setBook({
      ...book,
      [name]: value
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await updateBook(id, book);
      alert("Book Updated Successfully");
      navigator("/book-list");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="update-container">
      <form className="update-form" onSubmit={submitHandler}>
        <h2>Update Book</h2>

        <input
          type="text"
          name="title"
          value={book.title}
          onChange={changeHandler}
          placeholder="Book Title"
        />

        <input
          type="text"
          name="author"
          value={book.author}
          onChange={changeHandler}
          placeholder="Author Name"
        />

        <input
          type="number"
          name="price"
          value={book.price}
          onChange={changeHandler}
          placeholder="Book Price"
        />

        <button type="submit">
          Update Book
        </button>
      </form>
    </div>
  );
};

export default UpdateBook;