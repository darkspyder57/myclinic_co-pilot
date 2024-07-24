"use client";

import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { db } from '../Firebase';

const ContactAdmin = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const contactRef = collection(db, "contacts");

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactData = await getDocs(contactRef);
        setContacts(contactData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching contacts:", error);
        setError(error.message);
        setLoading(false);
      }
    };
    getContacts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const handleDelete = async (id) => {
    try {
      const docRef = doc(db, "contacts", id); // Correctly reference the document
      await deleteDoc(docRef);
      setContacts(contacts.filter(contact => contact.id !== id));
    } catch (error) {
      console.error("Error deleting contact:", error);
      setError("Error deleting contact");
    }
  };

  return (
    <div>
      <h2>Contact Admin</h2>
      {contacts.length === 0 ? (
        <div className="text-center">Database is empty</div>
      ) : (
        <div className="row">
          {contacts.map(contact => (
            <div className="col-md-6 mb-4" key={contact.id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{contact.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{contact.email}</h6>
                  <p className="card-text"><strong>Subject:</strong> {contact.subject}</p>
                  <p className="card-text"><strong>Message:</strong> {contact.message}</p>
                  <button className="btn btn-danger" onClick={() => handleDelete(contact.id)}>Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContactAdmin;
