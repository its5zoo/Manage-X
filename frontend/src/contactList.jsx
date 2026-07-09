import { useEffect, useState } from "react";
import {
  getAllContacts,
  deleteContact
} from "./services/contact_services";
import "./contactlist.css";
import { useNavigate } from "react-router-dom";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [showList, setShowList] = useState(false);
  const [search, setSearch] = useState("");
  const navigator = useNavigate();

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await getAllContacts();
      setContacts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addContact = () => {
    navigator("/contact");
  };

  const viewContact = (id) => {
    navigator(`/contact-by-id/${id}`);
  };

  const updateContactPage = (id) => {
    navigator(`/update-contact/${id}`);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete?"
    );

    if (!confirmDelete) return;

    try {
      await deleteContact(id);

      setContacts(
        contacts.filter(
          (contact) => contact._id !== id
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {!showList && (
        <div className="dashboard-container">
          <h1 className="dashboard-title">
            Contact Dashboard
          </h1>

          <div className="dashboard-cards">
            <div
              className="glass-card"
              onClick={addContact}
            >
              <h2>Add Contact</h2>
              <p>+</p>
            </div>

            <div className="glass-card">
              <h2>Total Contacts</h2>
              <p>{contacts.length}</p>
            </div>

            <div
              className="glass-card"
              onClick={() => setShowList(true)}
            >
              <h2>View Contact List</h2>
              <p>📋</p>
            </div>
          </div>
        </div>
      )}

      {showList && (
        <div className="container">
          <h2>Contact List</h2>

          <input
            type="text"
            className="search-bar"
            placeholder="🔍 Search contacts..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

          <table className="contact-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {contacts
                .filter((contact) =>
                  contact.name
                    .toLowerCase()
                    .includes(search.toLowerCase())
                )
                .map((contact, index) => (
                  <tr key={contact._id}>
                    <td>{index + 1}</td>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>

                    <td>
                      <div className="action-buttons">
                        <button
                          className="view-btn"
                          onClick={() =>
                            viewContact(contact._id)
                          }
                        >
                          View
                        </button>

                        <button
                          className="update-btn"
                          onClick={() =>
                            updateContactPage(
                              contact._id
                            )
                          }
                        >
                          Update
                        </button>

                        <button
                          className="delete-btn"
                          onClick={() =>
                            handleDelete(contact._id)
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

export default ContactList;