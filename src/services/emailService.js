// src/services/emailService.js

const BASE_URL = import.meta.env.VITE_EMAIL_API_URL;
const API_KEY = import.meta.env.VITE_EMAIL_API_KEY;
const RECIPIENT = import.meta.env.VITE_EMAIL_RECIPIENT || 'contact@zazitech.co.za';
const SUBJECT_PREFIX = import.meta.env.VITE_EMAIL_SUBJECT_PREFIX || 'Contact Form - Zazitech Solutions';

function createPlainText(formData) {
  const { name, email, phone, category, subject, message } = formData;
  const now = new Date();
  return [
    `${SUBJECT_PREFIX}: ${subject}`,
    `Submitted on ${now.toLocaleDateString()} at ${now.toLocaleTimeString()}`,
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    `Category: ${category}`,
    '',
    'Message:',
    message,
    '',
    'This email was sent from the contact form on your website.',
  ].filter(line => line !== null).join('\n');
}

function createHtml(formData) {
  const { name, email, phone, category, subject, message } = formData;
  const now = new Date();
  return `
    <h2>${SUBJECT_PREFIX}: ${subject}</h2>
    <p><em>Submitted on ${now.toLocaleDateString()} at ${now.toLocaleTimeString()}</em></p>
    <table cellpadding="6">
      <tr><td><strong>Name</strong></td><td>${name}</td></tr>
      <tr><td><strong>Email</strong></td><td>${email}</td></tr>
      ${phone ? `<tr><td><strong>Phone</strong></td><td>${phone}</td></tr>` : ''}
      <tr><td><strong>Category</strong></td><td>${category}</td></tr>
    </table>
    <h3>Message</h3>
    <p>${message.replace(/\n/g, '<br>')}</p>
    <hr>
    <small>Sent from the contact form on zazitech.co.za</small>
  `.trim();
}

export async function sendEmail(formData) {
  try {
    const response = await fetch(`${BASE_URL}/api/send`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        apiKey: API_KEY,
        to: RECIPIENT,
        subject: `${SUBJECT_PREFIX}: ${formData.subject}`,
        message: createPlainText(formData),
        html: createHtml(formData),
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || 'Failed to send email');
    }

    return result;
  } catch (error) {
    console.error('Email error:', error);
    throw error;
  }
}