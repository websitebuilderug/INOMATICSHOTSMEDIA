const thumbs = Array.from(document.querySelectorAll('#gallery img'));
const lightbox = document.getElementById('lightbox');
const lbImage = document.getElementById('lbImage');
const lbCounter = document.getElementById('lbCounter');
let currentIndex = 0;

function showImage(index) {
  currentIndex = (index + thumbs.length) % thumbs.length;
  lbImage.src = thumbs[currentIndex].dataset.full;
  lbCounter.textContent = `${currentIndex + 1} / ${thumbs.length}`;
}

function openLightbox(index) {
  showImage(index);
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

thumbs.forEach((img, i) => {
  img.addEventListener('click', () => openLightbox(i));
});

document.getElementById('lbClose').addEventListener('click', closeLightbox);
document.getElementById('lbPrev').addEventListener('click', () => showImage(currentIndex - 1));
document.getElementById('lbNext').addEventListener('click', () => showImage(currentIndex + 1));

// Click outside image closes it
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('active')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
  if (e.key === 'ArrowRight') showImage(currentIndex + 1);
});
