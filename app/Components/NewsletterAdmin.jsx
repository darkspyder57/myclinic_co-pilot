"use client";

import { getDocs, collection } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../Firebase";

const NewsletterAdmin = () => {
  const [newsletters, setNewsletters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getNewsletters = async () => {
      try {
        console.log("Fetching data from Firestore...");
        const newsletterData = await getDocs(collection(db, "newsletters"));
        const fetchedNewsletters = newsletterData.docs.map((doc) => ({ ...doc.data(), id: doc.id, }));
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Newsletter Admin</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          {newsletters.map((newsletter, index) => (
            <tr key={newsletter.id}>
              <th scope="row">{index + 1}</th>
              <td>{newsletter.email}</td>
              <td>{newsletter.date ? date:'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NewsletterAdmin;
