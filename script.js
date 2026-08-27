document.getElementById('bookingForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const message = document.getElementById('formMessage');
  message.textContent = 'Thank you! Your appointment request has been received.';
  this.reset();
});

// Keep every client-supplied photo fully visible. Never crop the original images.
const galleryFix = document.createElement('style');
galleryFix.textContent = `
  .hero-photo-wrap,
  .about-photo,
  .main-gallery,
  .offer-image,
  .map-card {
    background:#f1e9e3;
    display:flex;
    align-items:center;
    justify-content:center;
  }

  .hero-photo-wrap img,
  .about-photo img,
  .main-gallery img,
  .gallery-grid>img,
  .offer-image img,
  .map-card>img {
    object-fit:contain!important;
    object-position:center!important;
    background:#f1e9e3;
  }

  /* Do not place text directly over important parts of the real storefront photo. */
  .main-gallery:after { display:none!important; }
  .main-gallery figcaption {
    left:16px;
    bottom:16px;
    background:rgba(36,27,28,.9);
    padding:10px 14px;
    border-radius:5px;
  }

  /* Give portrait photos enough vertical space instead of squeezing/cropping them. */
  .hero-photo-wrap { height:650px; }
  .about-photo { height:590px; }
  .main-gallery { min-height:534px; }
  .gallery-grid>img { background:#f1e9e3; }
  .offer-image { min-height:190px; }

  @media(max-width:900px){
    .hero-photo-wrap { height:560px; }
    .about-photo { height:480px; }
    .main-gallery { min-height:520px; }
    .gallery-grid>img { min-height:280px; }
  }

  @media(max-width:560px){
    .hero-photo-wrap { height:430px; }
    .about-photo { height:390px; }
    .main-gallery { height:520px; min-height:520px; }
    .gallery-grid>img { min-height:300px; }
    .offer-image { min-height:230px; }
    .map-card { min-height:300px; }
  }
`;
document.head.appendChild(galleryFix);

// Use the uploaded files that are present in the deployed images directory.
const uploadedPhotos = [
  'images/exterior%201.jpg',
  'images/unnamed.webp',
  'images/exterior%201.jpg',
  'images/face%202.jpg',
  'images/face%201.jpg',
  'images/hair%202.jpg',
  'images/face%201.jpg',
  'images/exterior%201.jpg'
];

document.querySelectorAll('main img').forEach((image, index) => {
  if (uploadedPhotos[index]) image.src = uploadedPhotos[index];
});
