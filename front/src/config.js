const BaseURL =
  process.env.NODE_ENV === "production"
    ? "https://api-angedev.onrender.com"
    : "http://localhost:1337";
export default BaseURL;
