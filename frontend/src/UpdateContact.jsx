import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getContactById,
  updateContact
} from "./services/contact_services";
import "./Updatecontact.css"
const UpdateContact = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phoneno: "",
    city: "",
    address: ""
  });

  useEffect(() => {
    fetchContact();
  }, []);

  const fetchContact = async () => {
    try {
      const response = await getContactById(id);
      setContact(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setContact({
      ...contact,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateContact(id, contact);
      alert("Contact Updated Successfully");
      navigate("/contact-list");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h2>Update Contact</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={contact.name}
          onChange={handleChange}
          placeholder="Enter Name"
        />

        <input
          type="email"
          name="email"
          value={contact.email}
          onChange={handleChange}
          placeholder="Enter Email"
        />

        <input
          type="text"
          name="phoneno"
          value={contact.phoneno}
          onChange={handleChange}
          placeholder="Enter Phone"
        />

        <input
          type="text"
          name="city"
          value={contact.city}
          onChange={handleChange}
          placeholder="Enter City"
        />

        <textarea
          name="address"
          value={contact.address}
          onChange={handleChange}
          placeholder="Enter Address"
        />

        <button type="submit">
          Update Contact
        </button>
      </form>
    </div>
  );
};

export default UpdateContact;