/*import axios from "axios";
const API_URL= "http://localhost:5000";
const API_POST_URL="http://localhost:5000/create";
const API_GET_ALL_CONTACT_URL="http://localhost:5000/contact-list";
const API_GET_BY_ID_URL="http://localhost:5000/find-by";
const API_UPDATE_URL="http://localhost:5000/update-contact-by-id";
const API_DELETE_URL="http://localhost:5000/delete-contact-by-id";
export const createContact = (contactData) => axios.post(API_POST_URL,contactData);
export const getAllContacts = () => axios.get(API_GET_ALL_CONTACT_URL)
export const getContactById = (id) => axios.get(API_GET_BY_ID_URL+ '/'+ id);
export const deleteContact =  (id) => axios.delete(API_DELETE_URL + '/'+ id);
export const updateContact = (id, contact) =>axios.put(API_UPDATE_URL + '/' + id, contact);
*/


/*import axios from "axios"; */
const API_URL= "http://localhost:5000";
const API_POST_URL=API_URL+"/create";
const API_GET_ALL_CONTACT_URL=API_URL+"/contact-list";
const API_GET_BY_ID_URL=API_URL+"/find-by";
const API_UPDATE_URL=API_URL+"/update-contact-by-id";
const API_DELETE_URL=API_URL+"/delete-contact-by-id";
/*
export const createContact = (contactData) => axios.post(API_POST_URL,contactData);
export const getAllContacts = () => axios.get(API_GET_ALL_CONTACT_URL)
export const getContactById = (id) => axios.get(API_GET_BY_ID_URL+ '/'+ id);
export const deleteContact =  (id) => axios.delete(API_DELETE_URL + '/'+ id);
export const updateContact = (id, contact) =>axios.put(API_UPDATE_URL + '/' + id, contact);
*/
/***********************************************/
/* import authApi from "./authApi";
/***********************************************/

import authApi from "./authApi";

export const createContact = (contactData) =>
    authApi.post(API_POST_URL, contactData);

export const getAllContacts = () =>
    authApi.get(API_GET_ALL_CONTACT_URL);

export const getContactById = (id) =>
    authApi.get(`${API_GET_BY_ID_URL}/${id}`);

export const deleteContact = (id) =>
    authApi.delete(`${API_DELETE_URL}/${id}`);

export const updateContact = (id, contact) =>
    authApi.put(`${API_UPDATE_URL}/${id}`, contact);