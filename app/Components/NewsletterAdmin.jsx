"use client"


import { useState } from 'react';

const NewsletterAdmin = () => {
  const [newsletters, setNewsletters] = useState([
    { id: 1, title: 'Newsletter 1', date: '2024-07-01' },
    { id: 2, title: 'Newsletter 2', date: '2024-07-10' },
  ]);

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
              <td>{newsletter.title}</td>
              <td>{newsletter.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NewsletterAdmin;
