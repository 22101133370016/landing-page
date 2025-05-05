const express = require('express');
const nodemailer = require('nodemailer');
const fetch = require('node-fetch');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));

app.use(express.json({ limit: '10mb' }));

app.post('/send-email', async (req, res) => {
  const { name, email, phone, location, message, imageUrl } = req.body;

  if (!name || !email || !phone || !location) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    let attachments = [];
    if (imageUrl) {
      // Fetch image as buffer
      const response = await fetch(imageUrl);
      const buffer = await response.buffer();
      const filename = imageUrl.split('/').pop() || 'image.jpg';

      attachments.push({
        filename: filename,
        content: buffer,
      });
    }

    // Configure your SMTP transporter here
    const transporter = nodemailer.createTransport({
      host: 'smtp.example.com', // Replace with your SMTP host
      port: 587,
      secure: false,
      auth: {
        user: 'your_email@example.com', // Replace with your SMTP username
        pass: 'your_email_password', // Replace with your SMTP password
      },
    });

    const mailOptions = {
      from: '"Pambakali Outfit Store" <your_email@example.com>', // sender address
      to: 'recipient@example.com', // list of receivers, replace with your email
      subject: 'New Contact Message with Product Image',
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Location: ${location}
        Message: ${message || 'No message provided'}
      `,
      attachments: attachments,
    };

    await transporter.sendMail(mailOptions);

    res.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.listen(port, () => {
  console.log('Email server listening at http://localhost:' + port);
});
