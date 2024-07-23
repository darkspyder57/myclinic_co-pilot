"use client"


import { collection, getDocs} from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { db } from '../Firebase';

const ContactAdmin = () => {
  const [contacts, setContacts] = useState([]);
  const contactRef = collection(db, "contacts");

  useEffect(()=>{
    const getContacts = async ()=>{
      const contactData = await getDocs(contactRef);
      setContacts(contactData.docs.map((doc) => ({...doc.data(), id: doc.id })));
    };
    getContacts();
  });

  // const handleDelete = async(id) => {
  //   // setContacts(contacts.filter(contact => contact.id !== id));
  // };

  return (
    <div>
      <h2>Contact Admin</h2>
      <div className="row">
        {contacts.map(contact => (
          <div className="col-md-6 mb-4" key={contact.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{contact.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{contact.email}</h6>
                <p className="card-text"><strong>Subject:</strong> {contact.subject}</p>
                <p className="card-text"><strong>Message:</strong> {contact.message}</p>
                <button className="btn btn-danger">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactAdmin;
