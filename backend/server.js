const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// 👇 Add this GET route here 👇
app.get('/', (req, res) => {
  res.send('Lead Generation API is running!');
});

// Existing POST route for handling form submissions
app.post('/submit', async (req, res) => {
  const { name, email, company, message } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  const n8nWebhookUrl = 'https://your-n8n-webhook-url/webhook-test'; // Replace with your real n8n URL

  try {
    await axios.post(n8nWebhookUrl, { name, email, company, message });
    res.status(200).json({ message: 'Lead submitted successfully' });
  } catch (error) {
    console.error('Error sending data to n8n:', error);
    res.status(500).json({ error: 'Failed to send data to n8n' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
