// src/lib/secureConfig.js
// Runtime decoder for build-time encoded credentials
// Credentials are XOR-ciphered + Base64-encoded at build time in vite.config.js

/**
 * Decodes a Base64 + XOR-encoded string back to plaintext.
 * @param {string} encoded  – Base64 string produced at build time
 * @param {string} key      – The same key used for encoding (app name)
 * @returns {string} decoded plaintext
 */
function xorDecode(encoded, key) {
  try {
    const raw = atob(encoded);
    let result = '';
    for (let i = 0; i < raw.length; i++) {
      result += String.fromCharCode(
        raw.charCodeAt(i) ^ key.charCodeAt(i % key.length)
      );
    }
    return result;
  } catch {
    console.error('Failed to decode secure config');
    return '';
  }
}

// The key must match vite.config.js – we use the app name
const DECODE_KEY = import.meta.env.VITE_APP_NAME || 'Zazitech';

/**
 * Returns the decoded SMTP configuration object.
 * Fields match what the backend /api/send endpoint expects.
 */
export function getSmtpConfig() {
  /* global __ENCODED_SMTP__ */
  const json = xorDecode(__ENCODED_SMTP__, DECODE_KEY);
  try {
    return JSON.parse(json);
  } catch {
    console.error('Malformed SMTP config');
    return {};
  }
}

/**
 * Returns the decoded Google Maps API key.
 */
export function getMapsKey() {
  /* global __ENCODED_MAPS_KEY__ */
  return xorDecode(__ENCODED_MAPS_KEY__, DECODE_KEY);
}
