document.getElementById('bookingForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const message = document.getElementById('formMessage');
  message.textContent = 'Thank you! Your appointment request has been received.';
  this.reset();
});

// Preserve the complete real storefront photo in the gallery.
// The original photo is portrait-oriented, so it must not be cropped into the wide tile.
const galleryFix = document.createElement('style');
galleryFix.textContent = `
  .gallery-grid{grid-template-columns:minmax(320px,.95fr) minmax(220px,.68fr) minmax(220px,.68fr)}
  .main-gallery{background:#241b1c;display:flex;align-items:center;justify-content:center}
  .main-gallery img{object-fit:contain!important;object-position:center!important;background:#241b1c}
  .main-gallery:after{background:linear-gradient(transparent 55%,#1e1010b0)}
  @media(max-width:900px){.gallery-grid{grid-template-columns:1fr 1fr}.main-gallery img{object-fit:contain!important}}
  @media(max-width:560px){.gallery-grid{grid-template-columns:1fr}.main-gallery{height:520px}.main-gallery img{object-fit:contain!important}}
`;
document.head.appendChild(galleryFix);
