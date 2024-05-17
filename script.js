function imgSlider(anything){
    document.querySelector('.coffee').src = anything;
}

// SLIDER SCRIPT
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let slider = document.querySelector('.slider');

next.addEventListener('click', function(){
    let slides = document.querySelectorAll('.slides');
    slider.appendChild(slides[0]);
})
prev.addEventListener('click', function(){
    let slides = document.querySelectorAll('.slides');
    slider.prepend(slides[slides.length - 1]);
})


window.addEventListener("scroll",function(){
    const header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 0)
});

window.addEventListener('load', function() {
	// Add 'loaded' class to body when content is loaded
	document.body.classList.add('loaded');
});