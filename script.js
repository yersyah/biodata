// Typing Effect untuk Nama
const typingEffect = document.querySelector('.typing-effect');
const words = [" Yersyah", "Web Developer", "Programmer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentWord = words[wordIndex];
  const currentChar = currentWord.substring(0, charIndex);
  typingEffect.textContent = currentChar;

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(type, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(type, 50);
  } else {
    isDeleting = !isDeleting;
    wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
    setTimeout(type, 1000);
  }
}

// Jalankan efek ketik saat halaman dimuat
document.addEventListener('DOMContentLoaded', type);

// Form Submit Handler
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('maaf!! silahkan kirim pesan yang spesifik ke email kami ( akunpesreyynob@gmail.com ) Terima Kasih');
  e.target.reset();
});