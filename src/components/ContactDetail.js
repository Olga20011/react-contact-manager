import React, { useState, useEffect } from 'react';
import user from '../images/user.jpg';
import axios from "axios";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ContactDetail = ({ contacts, setContact }) => {
    const { id } = useParams();
    const [contact, setFetchedContact] = useState(null);

    useEffect(() => {
        getContactDetails();
    },);

    const getContactDetails = () => {
        axios.get(`http://localhost/ARAKNERDLIB/contact/update/${id}`)
            .then(response => {
                console.log(response.data);
                setFetchedContact(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    if (!contact) {
        return <div>Loading...</div>;
    }

    const { first_name, last_name, email } = contact;

    return (
        <div className="main" style={{ margin: '80px' }}>
            <div className='ui card centered'>
                <div className='image'>
                    <img src={user} alt='user' />
                </div>
                <div className='content'>
                    <div className='header'>{first_name}</div>
                    <div className='header'>{last_name}</div>
                    <div className='description'>{email}</div>
                </div>
            </div>
            <div className='center-div'>
                <Link to="/">
                    <button className='ui button blue center' style={{ marginTop: '30px', marginLeft: '200px' }}>Back to Contact List</button>
                </Link>
            </div>
        </div>
    );
};

export default ContactDetail;
