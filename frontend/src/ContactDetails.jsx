import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getContactById } from "./services/contact_services";
import "./Contactdetails.css"
const ContactDetails = () => {
  const { id } = useParams();

  const [contact, setContact] = useState(null);

  useEffect(() => {
    fetchContact();
  }, [id]);

  const fetchContact = async () => {
    try {
      const response = await getContactById(id);
      console.log(response.data);
      setContact(response.data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  if (!contact) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="container">
      <h1>Contact Details</h1>

      <p>
        <strong>ID:</strong> {contact._id}
      </p>

      <p>
        <strong>Name:</strong> {contact.name}
      </p>

      <p>
        <strong>Email:</strong> {contact.email}
      </p>

      <p>
        <strong>Phone:</strong> {contact.phoneno}
      </p>

      <p>
        <strong>City:</strong> {contact.city}
      </p>

      <p>
        <strong>Address:</strong> {contact.address}
      </p>
      <button className="back-btn" onClick={() => window.history.back()}>
        ← Back
      </button>
      
    </div>
  );
};

export default ContactDetails;