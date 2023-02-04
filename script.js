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
  const slides = document.getElementsByClassName("Containers");
  if (n > slides.length) {slidePosition = 1}
  if (n < 1) {slidePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  
  slides[slidePosition-1].style.display = "block";
} 

let slidePosition = 0;
SlideShow();

function SlideShow() {
  let i;
  const slides = document.getElementsByClassName("Containers");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slidePosition++;
  if (slidePosition > slides.length) {slidePosition = 1}
  slides[slidePosition-1].style.display = "block";
  setTimeout(SlideShow, 104000); // Change image every 4 seconds
} 