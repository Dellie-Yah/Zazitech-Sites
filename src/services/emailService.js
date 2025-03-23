// src/services/emailService.js
const BASE_URL = import.meta.env.VITE_API_URL;
const AUTH_CREDENTIALS = {
  username: import.meta.env.VITE_API_USERNAME,
  password: import.meta.env.VITE_API_PASSWORD,
  domain: import.meta.env.VITE_API_DOMAIN
};

let authToken = null;
let tokenExpiry = null;

async function getAuthToken() {
  // Check if we have a valid token
  if (authToken && tokenExpiry && Date.now() < tokenExpiry) {
    return authToken;
  }

  // Get new token
  try {
    const response = await fetch(`${BASE_URL}/auth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: AUTH_CREDENTIALS.username,
        password: AUTH_CREDENTIALS.password,
        domain: AUTH_CREDENTIALS.domain,
      }),
    });

    if (!response.ok) {
      throw new Error("Authentication failed");
    }

    const data = await response.json();
    authToken = data.token;
    tokenExpiry = Date.now() + 55 * 60 * 1000; // Set expiry to 55 minutes
    return authToken;
  } catch (error) {
    console.error("Auth error:", error);
    throw new Error("Authentication failed");
  }
}

export async function sendEmail(formData) {
  try {
    // Get auth token
    const token = await getAuthToken();

    // Send email
    const response = await fetch(`${BASE_URL}/send-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to send email");
    }

    return data;
  } catch (error) {
    console.error("Email error:", error);
    throw error;
  }
}
