import authApi from "./authApi";
const API_URL= "http://localhost:5000";
const API_POST_URL = API_URL+ "/book/create-book";
const API_GET_ALL_BOOK_URL = API_URL+"/book/book-list";
const API_GET_BY_ID_URL = API_URL+"/book/book-by";
const API_UPDATE_URL = API_URL+"/book/update-book-by-id";
const API_DELETE_URL = API_URL+"/book/delete-book-by-id";

export const createBook = (bookData) =>
  authApi.post(API_POST_URL, bookData);

export const getAllBooks = () =>
  authApi.get(API_GET_ALL_BOOK_URL);

export const getBookById = (id) =>
  authApi.get(`${API_GET_BY_ID_URL}/${id}`);

export const deleteBook = (id) =>
  authApi.delete(`${API_DELETE_URL}/${id}`);

export const updateBook = (id, book) =>
  authApi.put(`${API_UPDATE_URL}/${id}`, book);