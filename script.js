const lightbox = document.getElementById('lightbox-modal');
const lightboxImg = document.querySelector('.lightbox-content');
const lightboxCaption = document.querySelector('.lightbox-caption');
const closeBtn = document.querySelector('.close');

// Open lightbox when image is clicked
document.querySelectorAll('.grid-container figure').forEach(figure => {
  const link = figure.querySelector('a');
  const img = figure.querySelector('img');
  const caption = figure.querySelector('figcaption');
  
  link.addEventListener('click', (e) => {
    e.preventDefault();
    lightboxImg.src = img.src;
    lightboxCaption.textContent = caption.textContent;
    lightbox.classList.add('show');
  });
});

// Close lightbox
closeBtn.addEventListener('click', () => {
  lightbox.classList.remove('show');
});

// Close when clicking outside the image
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove('show');
  }
});

// Close with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    lightbox.classList.remove('show');
  }
});
