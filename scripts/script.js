reveal();

// Thanks to https://www.codingsnow.com/2021/01/reveal-webpage-elements-on-scroll-on.html
window.addEventListener('scroll', reveal);

function reveal() {
  var reveals = document.querySelectorAll('.reveal');
  for(var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 50;
    if(revealtop < windowheight - revealpoint) {
      reveals[i].classList.add('active');
    } else if (revealtop >= windowheight - revealpoint) {
      reveals[i].classList.remove('active')
    }
  }
}