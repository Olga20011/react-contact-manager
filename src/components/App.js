import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import axios from 'axios'; // Import Axios
// import { v4 as uuidv4 } from "uuid";
import "./App.css";
// import api from '../api/contact.js';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import addContactHandler from "./AddContact"
import deleteContactHandler from "./ContactList"
import ContactDetail from "./ContactDetail";
import EditContact from "./EditContact";


function App() {
  const [contacts, setContacts] = useState([]);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <ContactList
                contacts={contacts}
                getContactId={deleteContactHandler}
              />
            }
          />
          <Route
            path="/add"
            element={<AddContact addContactHandler={addContactHandler} />}
          />

          <Route
            path="/contact/:id"
            element={<ContactDetail contacts={contacts} />}
          />
          <Route
            path="/edit/:id"
            element={<EditContact/>}
          />
           <Route
            path="/delete/:id"
            element={<useDeleteContactHandler/>}
          />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
    