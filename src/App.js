import React, { useState, useEffect } from 'react';
import './style.css';
import axios from 'axios';

export default function App() {
  const apiURL = 'https://jsonplaceholder.typicode.com/posts/';

  const [listUsers, setlistUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      await axios
        .get(apiURL)
        .then((response) => {
          setlistUsers(response.data);
        })
        .catch((error) => {
          console.log('Error Occured');
          console.log(error);
        });
    }
    getUsers();
  }, []);

  return (
    <div>
      <h1>List of Users</h1>
      {listUsers.map((user) => (
        <p key={user.id}>{user.title}</p>
      ))}
    </div>
  );
}
