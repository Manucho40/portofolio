const BaseURL =
  process.env.NODE_ENV === "production"
    ? "https://api-angedev.onrender.com"
    : "https://api-angedev.onrender.com";
export default BaseURL;
