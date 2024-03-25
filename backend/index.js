// backend/index.js

import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/index.js';
import cors from 'cors'; // Import cors package

const app = express();

dotenv.config({
  path: './.env',
});

const PORT = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`⚙️ Server is running at port : ${PORT}`);
    });
  })
  .catch((err) => {
    console.log('MONGO db connection failed !!! ', err);
  });

// Use CORS middleware
app.use(cors());

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
    // Other messages...
  ];
  res.send(messages);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

export default app;
