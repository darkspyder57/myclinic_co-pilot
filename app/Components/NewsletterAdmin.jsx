"use client";

import { getDocs, collection, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../Firebase";


const NewsletterAdmin = () => {
  const [newsletters, setNewsletters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editEmail, setEditEmail] = useState('');
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    const getNewsletters = async () => {
      try {
        console.log("Fetching data from Firestore...");
        const newsletterData = await getDocs(collection(db, "newsletters"));
        const fetchedNewsletters = newsletterData.docs.map((doc) => {
          const data = doc.data();
          return {
            ...data,
            id: doc.id,
            date: data.date ? data.date.toDate() : null // Convert Firestore Timestamp to Date
          };
        });
        console.log("Fetched Newsletters:", fetchedNewsletters);
        setNewsletters(fetchedNewsletters);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching newsletters:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    getNewsletters();
  }, []);

  const handleDelete = async (id) => {
    try {
      const docRef = doc(db, "newsletters", id); // Correctly reference the document
      await deleteDoc(docRef);
      setNewsletters(newsletters.filter(newsletter => newsletter.id !== id));
    } catch (error) {
      console.error("Error deleting newsletter:", error);
      setError("Error deleting newsletter");
    }
  };

  const handleUpdate = async (id) => {
    try {
      const docRef = doc(db, "newsletters", id);
      await updateDoc(docRef, { email: editEmail }); // Update the email
      setNewsletters(newsletters.map(newsletter => 
        newsletter.id === id ? { ...newsletter, email: editEmail } : newsletter
      ));
      setEditingId(null); // Close the editing mode
      setEditEmail('');
    } catch (error) {
      console.error("Error updating newsletter:", error);
      setError("Error updating newsletter");
    }
  };

  const handleEditClick = (id, email) => {
    setEditingId(id);
    setEditEmail(email);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Newsletter Admin</h2>
      {newsletters.length === 0 ? (
        <div className="text-center">Database is empty</div>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped newsletter">
            <thead>
              <tr>
                <th scope="col"> </th>
                <th scope="col">Email</th>
                <th scope="col">Date</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {newsletters.map((newsletter) => (
                <tr key={newsletter.id}>
                  <th scope="row"></th>
                  <td>
                    {editingId === newsletter.id ? (
                      <input 
                        type="text" 
                        value={editEmail} 
                        onChange={(e) => setEditEmail(e.target.value)} 
                        placeholder="New email"
                      />
                    ) : (
                      newsletter.email
                    )}
                  </td>
                  <td>{newsletter.date ? newsletter.date.toLocaleDateString() : 'N/A'}</td>
                  <td>
                    {editingId === newsletter.id ? (
                      <>
                        <button 
                          onClick={() => handleUpdate(newsletter.id)} 
                          className="btn btn-outline-success btn-sm"
                        >
                          Save
                        </button>
                        <button 
                          onClick={() => setEditingId(null)} 
                          className="btn btn-outline-secondary btn-sm ms-2"
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <button 
                          onClick={() => handleEditClick(newsletter.id, newsletter.email)} 
                          className="newsletter-update btn btn-outline-secondary btn-sm"
                        >
                          &#128396;
                        </button>
                        <button 
                          onClick={() => handleDelete(newsletter.id)} 
                          className="newsletter-delete btn btn-outline-danger btn-sm"
                        >
                          &#128465;
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default NewsletterAdmin;
