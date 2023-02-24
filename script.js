// menu open close

const menu = document.querySelector(".hamburger-menu")
menu.addEventListener('click', ()=>{
	document.querySelector(".topbar").classList.toggle('change')
})

let navigationLinks = document.querySelectorAll(".topbar .menu li a");

navigationLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      document.querySelector(".topbar").classList.remove('change')
      document.querySelector("DOM").classList.remove('change')
    })
})

// slider carousel

function SlideShow(n) {
  let i;
  const slidesCarousel = document.getElementsByClassName("Containers");
  if (n > slidesCarousel.length) {slidePosition = 1}
  if (n < 1) {slidePosition = slidesCarousel.length}
  for (i = 0; i < slidesCarousel.length; i++) {
    slidesCarousel[i].style.display = "none";
  }
  
  slidesCarousel[slidePosition-1].style.display = "block";
} 

let slidePosition = 0;
SlideShow();

function SlideShow() {
  let i;
  const slidesCarousel = document.getElementsByClassName("Containers");
  for (i = 0; i < slidesCarousel.length; i++) {
    slidesCarousel[i].style.display = "none";
  }
  slidePosition++;
  if (slidePosition > slidesCarousel.length) {slidePosition = 1}
  slidesCarousel[slidePosition-1].style.display = "block";
  setTimeout(SlideShow, 8000); // Change image every 4 seconds
} 


