import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditContact = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [contact, setContact] = useState({
    first_name: '',
    last_name: '',
    email: '',
    id: ''
  });

  useEffect(() => {  
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Include getUser in the dependency array to remove the warning


  const [firstName,setFirstName] = useState('') 
  const [lastName,setLastName] = useState('') 
  const [email,setEmail] = useState('') 


  const getUser = () => {
    axios.post(`http://localhost/ARAKNERDLIB/contact/user`,{id:id}
    ) 
      .then(response => {
        console.log(response.data)
        // response.headers('Access-Control-Allow-Origin','*')
        setFirstName(response.data.details.first_name)
        setLastName(response.data.details.last_name)
        setEmail(response.data.details.email)
      })
      .catch(error => {
        console.log(error);
      });
  };

  const update = (e) => {
    e.preventDefault();
      axios.post(`http://localhost/ARAKNERDLIB/contact/update`, {

        first_name:firstName,
        last_name:lastName,
        email:email,
        id:id

      }
      // ,{
      //   headers:{
      //     'Content-Type':'application/json',
      //     'Access-Control-Allow-Origin':'*'
      //   }
      )
        .then(response => {
          console.log(response.data);
          navigate('/');
        })
        .catch(error => {
          console.log(error);
        });
  };

  return (
    <div className="ui main">
      {contact.first_name}
      <br />
      <h2>Edit Contact</h2>
      <form className="ui form" onSubmit={update}>
        <div className="field">
          <label>First name</label>
          <input
            type="text"
            name="first_name"
            placeholder="First name"
            value={firstName}
            onChange={(e)=>setFirstName(e.target.value)}
          />
        </div>

        <div className="field">
          <label>Last name</label>
          <input
            type="text"
            name="last_name"
            placeholder="Last name"
            value={lastName}
            onChange={(e)=>setLastName(e.target.value)}
          />
        </div>

        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <br />

        <button type="submit" className="ui button blue">
          Update
        </button>
      </form>
    </div>
  );
};

export default EditContact;
