
const currentPath = window.location.pathname.split('/').pop();  //get currrent path
const navLinks = document.querySelectorAll(".nav-links li");   //get li items

navLinks.forEach(link => {
  const anchor = link.querySelector("a");  //get a in li
  if (anchor && anchor.getAttribute("href") === currentPath) {  //if href in a matches current path
    link.classList.add("active");                                 //then made it active
  }


});


// (for nav buttons functionality) -->
document.querySelector('.mw-prev').addEventListener('click', () => {
  document.querySelector('.mw-carousel').scrollBy({ left: -300, behavior: 'smooth' });
});
document.querySelector('.mw-next').addEventListener('click', () => {
  document.querySelector('.mw-carousel').scrollBy({ left: 300, behavior: 'smooth' });
});

document.querySelector('.latest-audio-prev').addEventListener('click', () => {
  document.querySelector('.latest-audio-carousel').scrollBy({ left: -300, behavior: 'smooth' });
});

document.querySelector('.latest-audio-next').addEventListener('click', () => {
  document.querySelector('.latest-audio-carousel').scrollBy({ left: 300, behavior: 'smooth' });
});

// footer
 function toggleDropdown() {
      const dropdown = document.getElementById('langDropdown');
      dropdown.classList.toggle('show');
    }