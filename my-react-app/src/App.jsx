import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import MyHeader from "./MyHeader";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import Aboutus from "./Aboutus";
import Contactus from "./Contactus";
import ContactList from "./contactList";
import ContactDetails from "./ContactDetails";
import UpdateContact from "./UpdateContact";
import Login from "./Login";
import BookList from "./bookList";
import BookDetails from "./BookDetails";
import UpdateBook from "./UpdateBook";
import AddBook from "./AddBook";
import Courses from "./Courses";
import Services from "./Services";

import Ticketcounter from "./Ticketcounter";
import SignUp from "./signup";

function App() {
  return (
         <>

      <BrowserRouter>
 
        <MyHeader />
        <Navbar />

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/services" element={<Services />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/MyHeader" element={<MyHeader/>}/>
          {/* Contact Routes */}
          <Route path="/contact-list" element={<ContactList />} />
          <Route path="/contact-by-id/:id" element={<ContactDetails />} />
          <Route path="/update-contact/:id" element={<UpdateContact />} />

          {/* Book Routes */}
          <Route path="/book-list" element={<BookList />} />
          <Route path="/book-by/:id" element={<BookDetails />} />
          <Route path="/update-book/:id" element={<UpdateBook />} />
          <Route path="/book" element={<AddBook />} />
          {/* Other Routes */}
          
          <Route path="/ticketcounter" element={<Ticketcounter />} />
          {/* new  */}
          <Route path="/signup" element={<SignUp />} />
          
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App;