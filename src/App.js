import React, { useState, useEffect } from 'react';
import './style.css';
import axios from 'axios';

export default function App() {
  const apiURL = 'https://jsonplaceholder.typicode.com/posts/';

  const [listUsers, setlistUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const response = await axios.get(apiURL);

      try {
        setlistUsers(response.data);
        // console.log(response.data);
      } catch (error) {
        // if (reponse.error) {
        console.log('Error Occured');
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        // }
      }
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
