import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios
      .get('/api/messages')
      .then((response) => {
        setMessages(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <>
      <h1>DEMO DATA CHECK</h1>

      {messages.map((message) => (
        <div key={message.id}>
          <h3>{message.sender}</h3>
        </div>
      ))}
    </>
  );
}

export default App;
