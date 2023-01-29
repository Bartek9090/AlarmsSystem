const menu = document.querySelector(".hamburger-menu")
menu.addEventListener('click', ()=>{
	document.querySelector(".topbar").classList.toggle('change')
})

// slider

const images = ["img/dvbtsat.jpg", "IMG/tvprze.jpg", "IMG/videodomofon.jpg"];
const carousel = document.querySelector('.carousel')
const interval = setInterval(function() {
	startCarousel()
}, 4000);

let index = 1;

startCarousel =  () =>{ 
	carousel.style.backgroundImage = `url(${images[index++]})`;

	carousel.classList.remove('fade');
	void carousel.offsetWidth;
	if(index > images.length -1  ) index = 0;
	carousel.classList.add('fade')
}
