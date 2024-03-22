const scrollBtn = document.createElement("div");
scrollBtn.id = "scrollToTop";
scrollBtn.classList = "fixed bottom-6 right-6 h-9 w-9 rounded-full bg-blue/20 text-blue border border-blue/50 \
                       backdrop-blur-sm text-center leading-8 translate-x-[100px] duration-500 hover:cursor-pointer \
                       hover:-translate-y-2 hover:shadow-md hover:shadow-white/20"
scrollBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
scrollBtn.addEventListener('click', function() { window.scrollTo(0, 0); });
document.body.appendChild(scrollBtn);

window.onscroll = function() {
  if (document.body.scrollTop > window.innerHeight || document.documentElement.scrollTop > window.innerHeight) {
    scrollBtn.classList.remove("translate-x-[100px]")
  } else {
    scrollBtn.classList.add("translate-x-[100px]");
  }
};