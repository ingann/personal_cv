const footer = document.getElementById('footer');

let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  
  if (currentScroll > lastScrollTop) {
    // Scrolling down, show the footer
    footer.style.bottom = '0';
  } else {
    // Scrolling up, hide the footer
    footer.style.bottom = '-100px'; // Adjust the value to hide completely
  }
  
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});