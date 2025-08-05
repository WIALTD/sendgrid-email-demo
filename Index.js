/**
 * index.js - SendGrid Email Demo
 *
 * Purpose:
 *   Demonstrates how to send an email using SendGrid API
 *   for Global Guide Group (GGG) contact and guide requests.
 *   You could use this to allow your users to contact individual
 *   team members through your Wix Studio site, without sending
 *   all mails to a central email address, or exposing a written
 *   email address to bots on the live site. 
 *
 * Why this matters:
 *   - Reliable email delivery (avoids spam filters)
 *   - Keeps guide emails private (relay through GGG domain)
 *   - Scales for multiple guides and automated replies
 *
 * How to run:
 *   1. Copy .env.example to .env and fill in your API key & emails
 *   2. Run `npm install` to ensure @sendgrid/mail is installed
 *   3. Run `node index.js` and check the console
 */

require('dotenv').config();           // Load environment variables from .env
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY); // Authenticate with SendGrid

// Example: This could be populated dynamically from a CMS in production
const guideEmail = process.env.TO_EMAIL;  // Replace with CMS query in real use

// Build the email message
const msg = {
  to: guideEmail,                        // Recipient (guide)
  from: process.env.FROM_EMAIL,          // Verified sender from your domain
  replyTo: 'user@example.com',           // Could use form input in production
  subject: 'SendGrid Email Demo',        // Email subject
  text: 'Hello! This is a test email from the SendGrid Email Demo project.', // Plain text body
};

// Send the email
sgMail
  .send(msg)
  .then(() => console.log('✅ Email sent successfully!'))
  .catch((error) => console.error('❌ Error sending email:', error));