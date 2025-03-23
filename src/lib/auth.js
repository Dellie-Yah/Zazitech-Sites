// lib/auth.js
let authToken = null;
let tokenExpiry = null;

export async function getAuthToken() {
  // Check if we have a valid token
  if (authToken && tokenExpiry && Date.now() < tokenExpiry) {
    return authToken;
  }

  // Get new token
  try {
    const response = await fetch("http://localhost:7580/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: process.env.API_USERNAME,
        password: process.env.API_PASSWORD,
        domain: process.env.DOMAIN,
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
