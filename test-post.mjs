const url = "https://script.google.com/macros/s/AKfycbwBZEnCJHi1_eazypm91AhnFDjWUnVIl9dHlKESh0KUrOmjhZBlLhMtFzYqQ_XL_P6A/exec";

fetch(url, {
  method: "POST",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  body: "email=test2@berea.com&position=%23515&source=Test",
})
  .then((res) => res.text())
  .then((text) => console.log("POST Form Response:", text.substring(0, 500)))
  .catch((err) => console.error("Error:", err));
