import { useEffect, useState } from "react";
import { getBookById } from "./services/book_services";
import { useParams, useNavigate } from "react-router-dom";
import "./bookdetails.css";

const BookDetails = () => {
  const [book, setBook] = useState(null);
  const { id } = useParams();
  const navigator = useNavigate();

  useEffect(() => {
    fetchBook();
  }, [id]);

  const fetchBook = async () => {
    try {
      const response = await getBookById(id);

      console.log("API RESPONSE:", response);

      const data = response.data?.book || response.data;

      setBook(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="details-container">
      <div className="details-card">
        <h2>Book Details</h2>

        {book ? (
          <>
            <p><strong>Title:</strong> {book.title}</p>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Price:</strong> ₹{book.price}</p>
          </>
        ) : (
          <p>Loading...</p>
        )}

        <button onClick={() => navigator("/book-list")}>
          Back
        </button>
      </div>
    </div>
  );
};

export default BookDetails;