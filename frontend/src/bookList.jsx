import { useEffect, useState } from "react";
import {
  getAllBooks,
  deleteBook,
} from "./services/book_services";
import "./booklist.css";
import { useNavigate } from "react-router-dom";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [showList, setShowList] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await getAllBooks();
      setBooks(response.data);
    } catch (error) {
      console.log("Error fetching books:", error);
    }
  };

  const addBook = () => {
    navigate("/book");
  };

  const viewBook = (id) => {
    navigate(`/book-by/${id}`);
  };

  const updateBookPage = (id) => {
    navigate(`/update-book/${id}`);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this book?"
    );

    if (!confirmDelete) return;

    try {
      await deleteBook(id);

      setBooks(
        books.filter((book) => book._id !== id)
      );
    } catch (error) {
      console.log("Error deleting book:", error);
    }
  };

  return (
    <>
      {!showList && (
        <div className="dashboard-container">
          <h1 className="dashboard-title">
            Book Dashboard
          </h1>

          <div className="dashboard-cards">
            <div
              className="glass-card"
              onClick={addBook}
            >
              <h2>Add Book</h2>
              <p>📚</p>
            </div>

            <div className="glass-card">
              <h2>Total Books</h2>
              <p>{books.length}</p>
            </div>

            <div
              className="glass-card"
              onClick={() => setShowList(true)}
            >
              <h2>View Book List</h2>
              <p>📖</p>
            </div>
          </div>
        </div>
      )}

      {showList && (
        <div className="container">
          <h2>Book List</h2>

          <input
            type="text"
            className="search-bar"
            placeholder="🔍 Search books..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

          <table className="book-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Author</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {books
                .filter((book) =>
                  book.title
                    .toLowerCase()
                    .includes(search.toLowerCase())
                )
                .map((book, index) => (
                  <tr key={book._id}>
                    <td>{index + 1}</td>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>₹{book.price}</td>

                    <td>
                      <div className="action-buttons">
                        <button
                          className="view-btn"
                          onClick={() =>
                            viewBook(book._id)
                          }
                        >
                          View
                        </button>

                        <button
                          className="update-btn"
                          onClick={() =>
                            updateBookPage(book._id)
                          }
                        >
                          Update
                        </button>

                        <button
                          className="delete-btn"
                          onClick={() =>
                            handleDelete(book._id)
                          }
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>

          <div style={{ textAlign: "center" }}>
            <button
              className="back-btn"
              onClick={() => setShowList(false)}
            >
              Back To Dashboard
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default BookList;