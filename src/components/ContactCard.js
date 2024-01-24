import React from 'react';
import user from '../images/user.jpg';

const ContactCard = (props) => {
  const { id, name, email } = props.contact;

  
  console.log('Rendering ContactCard for id:', id);

  const deleteContact = () => {
    console.log('Deleting contact with id:', id);
    props.clickHandler(id);
  };

  return (
    <div className='item'>
      <img className='ui avatar image' src={user} alt='user' />
      <div className='content'>
        <div className='header'>{name}</div>
        <div>{email}</div>
      </div>
      <i
        className='trash alternate outline icon'
        style={{ color: 'red', marginTop: '7px' }}
        onClick={deleteContact}
      ></i>
    </div>
  );
};

export default ContactCard;
