import React, { useEffect, useState } from 'react';
import ContactCard from './ContactCard';
import { Link } from 'react-router-dom';
import axios from 'axios';
import useDeleteContactHandler from './useDeleteContactHandler'; // Import the custom hook

const ContactList = (props) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    axios.get(`http://localhost/ARAKNERDLIB/contact/info`)
      .then(response => {
        console.log(response.data);
        setContacts(response.data.details);
      }).catch(error => {
        console.log(error);
      });
  };

  const deleteContactHandler = (id) => {
    
  return axios.post(`http://localhost/ARAKNERDLIB/contact/delete`, {id:id})
    .then(response => {
      console.log(response.data);
      return response.data;
    })
    .catch(error => {
      console.log(error);
    });
};


  const renderContactList = Array.isArray(contacts) ?
    contacts.map((contact) => (
      <ContactCard
        key={contact.id}
        contact={contact}
        clickHandler={() => deleteContactHandler(contact.id)} // Pass id to deleteContactHandler
        to={`/contact/${contact.id}`}
      />
    )) : null;

  return (
    <div>
      <h2>
        Contact List
        <Link to="/add">
          <button className='ui button blue floated right' style={{ margin: '60px' }}>Add Contact</button>
        </Link>
      </h2>

      <div className="ui celled list">
        {renderContactList}
      </div>
    </div>
  );
};

export default ContactList;
