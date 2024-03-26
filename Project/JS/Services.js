document.getElementById("mybutton").addEventListener("click", function() {
  window.location.href = "../HTML/home.html";
});


const images = [
    '../IMAGES/8.jpg',
    '../IMAGES/6.jpg',
    '../IMAGES/7.jpg',
    '../IMAGES/5.jpg',
    '../IMAGES/10.jpg',
    '../IMAGES/4.webp',
    '../IMAGES/9.jfif' 
  ];
  let currentImgIndex = 0;
  const imgElement = document.getElementById('image');
  function updateImage() {
    imgElement.src = images[currentImgIndex];
  }
  
  function nextImage() {
    currentImgIndex = (currentImgIndex + 1) % images.length;
    updateImage();
  }

  function prevImage() {
    currentImgIndex = (currentImgIndex - 1 + images.length) % images.length;
    updateImage();
  }

  setInterval(nextImage, 3000);
  document.getElementById('next').addEventListener('click', nextImage);
  document.getElementById('prev').addEventListener('click', prevImage);
  updateImage();


  let mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}