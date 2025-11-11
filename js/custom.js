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
 


 


const slidesContainer = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
let index = 1;

// Clone first and last slide
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);
slidesContainer.appendChild(firstClone);
slidesContainer.insertBefore(lastClone, slidesContainer.firstChild);

const allSlides = document.querySelectorAll('.slide');
slidesContainer.style.transform = `translateX(${-index * 100}%)`;

document.querySelector('.next').addEventListener('click', ()=> {
  if(index >= allSlides.length - 1) return;
  index++;
  slidesContainer.style.transition = 'transform 3s ease';   // 👈 3s set here
  slidesContainer.style.transform = `translateX(${-index * 100}%)`;
});

document.querySelector('.prev').addEventListener('click', ()=> {
  if(index <= 0) return;
  index--;
  slidesContainer.style.transition = 'transform 3s ease';   // 👈 3s set here
  slidesContainer.style.transform = `translateX(${-index * 100}%)`;
});

slidesContainer.addEventListener('transitionend', ()=>{
  if(allSlides[index].isEqualNode(firstClone)){
    slidesContainer.style.transition = 'none';
    index = 1;
    slidesContainer.style.transform = `translateX(${-index * 100}%)`;
  }
  if(allSlides[index].isEqualNode(lastClone)){
    slidesContainer.style.transition = 'none';
    index = allSlides.length - 2;
    slidesContainer.style.transform = `translateX(${-index * 100}%)`;
  }
});


 
 


 