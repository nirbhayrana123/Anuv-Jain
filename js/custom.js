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