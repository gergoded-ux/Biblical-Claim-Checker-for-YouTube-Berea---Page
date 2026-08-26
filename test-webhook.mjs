const url = "https://script.google.com/macros/s/AKfycbwBZEnCJHi1_eazypm91AhnFDjWUnVIl9dHlKESh0KUrOmjhZBlLhMtFzYqQ_XL_P6A/exec";
const payload = {
  email: "test@berea.com",
  position: "#514",
  timestamp: new Date().toISOString(),
  source: "Berea Landing Page Waitlist - NODEJS TEST",
};

fetch(url, {
  method: "POST",
  headers: { "Content-Type": "text/plain" },
  body: JSON.stringify(payload),
})
  .then((res) => res.text())
  .then((text) => console.log("Response:", text))
  .catch((err) => console.error("Error:", err));
