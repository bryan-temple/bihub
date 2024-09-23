const express = require('express');
   const nodemailer = require('nodemailer');
   const bodyParser = require('body-parser');
   const cors = require('cors');
   require('dotenv').config();

   const app = express();
   const port = process.env.PORT || 5000;

   app.use(bodyParser.json());
   app.use(cors());

   app.post('/send-email', async (req, res) => {
     const { name, email, message } = req.body;

     // Create a transporter object using the default SMTP transport
     let transporter = nodemailer.createTransport({
       service: 'gmail',
       auth: {
         user: process.env.EMAIL_USER, // use environment variable
         pass: process.env.EMAIL_PASS, // use environment variable
       },
     });

     // Set up email data
     let mailOptions = {
       from: email,
       to: process.env.EMAIL_USER, // use environment variable
       subject: 'New Contact Form Submission',
       text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
     };

     try {
       await transporter.sendMail(mailOptions);
       res.status(200).send('Email sent successfully');
     } catch (error) {
       console.error('Error sending email:', error);
       res.status(500).send('Error sending email');
     }
   });

   app.listen(port, () => {
     console.log(`Server is running on port ${port}`);
   });