// Thanks to https://coolcssanimation.com/how-to-trigger-a-css-animation-on-scroll/

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      return;
    }

    entry.target.classList.remove('active');
  });
});

const reveal = document.querySelectorAll('.reveal');
reveal.forEach((element) => observer.observe(element));
