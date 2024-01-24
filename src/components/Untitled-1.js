import React, { useState } from "react";
import ContactCard from "./ContactCard";

function ContactList  (props)  {
    const [contacts,setContacts] =useState(props.contacts);
    console.log(contacts);

    const renderContactList = props.contacts.map((contact) => {
        return(
            
            <div className="item">
            <div className="content">
                <div className="header">{contacts.name}</div>
                <div>{contacts.email}</div>
        
            </div>
            <i className="trash alternate outline icon"></i>
            <div style = {{color:"red", marginTop: "7px"}} ></div>
        </div>
        );

    }) ;
    // reference variable in JSX
    return <div className="ui called list">{renderContactList}</div>
};

export default ContactList;