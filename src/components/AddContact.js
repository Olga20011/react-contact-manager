import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
// import toast from 'react-hot-toast'
import toast,{ Toaster } from "react-hot-toast";


const AddContact = () => {
  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    role_id:2

  });

  const navigate = useNavigate();

  const add = (e) => {
    e.preventDefault();
    if (state.first_name === "" || state.last_name === "" || state.email === "") {
      toast.error("All fields are mandatory");
    }
    else{

       axios.post('http://localhost/ARAKNERDLIB/contact/create', state)
      .then(response =>{
        console.log(response);
        setState({ first_name: "", last_name: "", email: "" });
        toast.success(response.data.message);

        
        
        navigate('/');

      }).catch(error =>{
        console.log(error)
      })
    }
  
   
    // addContactHandler([
    //   {
    //   first: state.first,
    //   last: state.last,
    //   email: state.email}
    // ]);
  
  };

 


  return (
    <div className="ui main">
      <br />   
      <h2>Add Contact</h2>
      <form className="ui form" onSubmit={add}>
        <div className="field">
       
          <label>First name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={state.first_name}
            onChange={(e) => setState({ ...state, first_name: e.target.value })}
          />
        </div>

        <div className="field">
          <label>Last name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={state.last_name}
            onChange={(e) => setState({ ...state, last_name: e.target.value })}
          />
        </div>

        <div className="field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={state.email}
            onChange={(e) => setState({ ...state, email: e.target.value })}
          />
        </div>
        <br />
        <button type="submit" className="ui button blue">
          Add
        </button>
      </form>
      <Toaster/>  
    </div>
  );
};


export default AddContact;
