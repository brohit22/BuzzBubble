import { useEffect, useState } from 'react';
import './App.css';
import { Button } from '@chakra-ui/react';
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
      <Button colorScheme='blue'>Click</Button>
      {messages.map((message) => (
        <div key={message.id}>
          <h2>
            {message.sender}: {message.message}
          </h2>
        </div>
      ))}
    </>
  );
}

export default App;
