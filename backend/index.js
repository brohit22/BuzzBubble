import express from 'express';
const PORT = process.env.PORT || 3000;

const app = express();
app.get('/', (req, res) => {
  res.send(`<div>
  Hello World!
  </div>`);
});

app.get('/api/messages', (req, res) => {
  const messages = [
    {
      id: 1,
      sender: 'Alice',
      recipient: 'Bob',
      message: 'Hey Bob, how are you doing?',
      timestamp: '2024-03-17T12:00:00Z',
    },
    {
      id: 2,
      sender: 'Bob',
      recipient: 'Alice',
      message: "Hi Alice! I'm doing well, thanks for asking. How about you?",
      timestamp: '2024-03-17T12:05:00Z',
    },
    {
      id: 3,
      sender: 'Alice',
      recipient: 'Bob',
      message: "I'm good too, just busy with work lately.",
      timestamp: '2024-03-17T12:10:00Z',
    },
    {
      id: 4,
      sender: 'Bob',
      recipient: 'Alice',
      message: "Understandable. Hope it's not too overwhelming!",
      timestamp: '2024-03-17T12:15:00Z',
    },
    {
      id: 5,
      sender: 'Alice',
      recipient: 'Bob',
      message:
        "Not too bad, just keeping up with deadlines. How's your project going?",
      timestamp: '2024-03-17T12:20:00Z',
    },
  ];
  res.send(messages);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
