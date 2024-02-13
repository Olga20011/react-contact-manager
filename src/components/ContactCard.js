import React from 'react';
import user from '../images/user.jpg';
import { Link } from 'react-router-dom';
import deleteContactHandler from "./useDeleteContactHandler"
const ContactCard = (props) => {
  const { id, first_name, last_name, email } = props.contact;

  
  console.log('Rendering ContactCard for id:', id);

  return (
    <div className='item'  style={{ marginBottom: '20px',  width: '600px' }}>
      <img className='ui avatar image' src={user} alt='user' />
      <div className='content'>

        <Link to={{pathname:`/delete/${id}`, state:{contact:props.contact}}} >
        <div className='header'>{first_name}</div>
        <div className='header'>{last_name}</div>
        <div className='meta'>{email}</div>
        </Link>

        
        
        <i
        className='trash alternate outline icon'
        style={{ color: 'red', marginTop: '20px' }}
        onClick={() => deleteContactHandler(id)}
      ></i>
        <Link to={{ pathname: `/edit/${id}`, state: { contact: props.contact } }}>
          <i className="edit alternate outline icon" style={{ color: 'blue', marginLeft: '10px' }}></i>
        </Link>

        </div>

       

    

     


</div>

      
    
  );
};

export default ContactCard;
