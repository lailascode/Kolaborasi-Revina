// Tambahan interaksi JS jika diperlukan

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      alert("Pesan kamu sudah terkirim! Terima kasih.");
      form.reset();
    });
  });