const url = "https://script.google.com/macros/s/AKfycbwBZEnCJHi1_eazypm91AhnFDjWUnVIl9dHlKESh0KUrOmjhZBlLhMtFzYqQ_XL_P6A/exec";

fetch(url, { method: "GET" })
  .then((res) => res.text())
  .then((text) => console.log("GET Response:", text.substring(0, 500)))
  .catch((err) => console.error("Error:", err));
