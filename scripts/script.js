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
    }
    else {
      reveals[i].classList.remove('active');
    }
  }
}

// Events for desktop and touch
// Thanks to https://dev.to/shantanu_jana/custom-right-click-context-menu-in-javascript-4112
let events = ["contextmenu"];
let contextMenu = document.getElementById("context-menu");

events.forEach((eventType) => {
  document.addEventListener(
    eventType,
    (e) => {
      e.preventDefault();
      let mouseX = e.clientX || e.touches[0].clientX;
      let mouseY = e.clientY || e.touches[0].clientY;
      let menuHeight = contextMenu.getBoundingClientRect().height;
      let menuWidth = contextMenu.getBoundingClientRect().width;
      let width = window.innerWidth;
      let height = window.innerHeight;
      if (width - mouseX <= 192) {
        contextMenu.style.left = width - menuWidth + "px";
        contextMenu.style.top = mouseY + "px";
        if (height - mouseY <= 192) {
          contextMenu.style.top = mouseY - menuHeight + "px";
        }
      }
      else {
        contextMenu.style.left = mouseX + "px";
        contextMenu.style.top = mouseY + "px";
        if (height - mouseY <= 192) {
          contextMenu.style.top = mouseY - menuHeight + "px";
        }
      }
      contextMenu.style.visibility = "visible";
    },
    { passive: false }
  );
});


document.addEventListener("click", function (e) {
  if (!contextMenu.contains(e.target)) {
    contextMenu.style.visibility = "hidden";
  }
});