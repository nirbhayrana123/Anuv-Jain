  const links = document.querySelectorAll('.link');

  links.forEach(link => {
    const navbox = link.closest('.navbox');

    link.addEventListener('mouseenter', () => {
      navbox.style.inset = '0px 0% auto';
    });

    link.addEventListener('mouseleave', () => {
      navbox.style.inset = '-34px 0% auto';
    });
  });



 
window.addEventListener("scroll", function() {
  const bottomImg = document.querySelector("img.bottom-img");  // ✅ correct syntax
  if (window.scrollY > 50) {
    bottomImg.classList.add("active");  // ✅ correct
  } else {
    bottomImg.classList.remove("active");
  }
});
 






