// src/config.js
const API_URL = process.env.REACT_APP_API_URL || '/api/';

console.log('🌍 Environment:', process.env.NODE_ENV);
console.log('📡 API URL:', API_URL);

export default API_URL;