"use client"


import { useState } from 'react';

const ContactAdmin = () => {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'Mohnish Kumar', email: 'mohnishkumar57@gmail.com', subject: 'Inquiry', message: 'Hello, I have a question.' },
    { id: 2, name: 'Peter Parker', email: 'peterspiderman@gmail.com', subject: 'Support', message: 'I need help with my account, i cannot access web.' },
    { id: 3, name: 'Peter Parker', email: 'peterspiderman@gmail.com', subject: 'Support', message: 'I need help with my account, i cannot access web.' }
  ]);

  const handleUpdate = (id) => {
    // Handle update logic
  };

  const handleDelete = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

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
                <button className="btn btn-primary me-2" onClick={() => handleUpdate(contact.id)}>Update</button>
                <button className="btn btn-danger" onClick={() => handleDelete(contact.id)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactAdmin;
