const navSlide = () => {
    const menuIcon = document.querySelector('#menu-icon');
    const nav = document.querySelector('.navbar');
    const navbar = document.querySelectorAll('.navbar li');
   
 
  
 
    menuIcon.addEventListener('click', () => {
       nav.classList.toggle('nav-active');
 
       navbar.forEach((link, index) => {
 
          if (link.style.animation) {
             link.style.animation = '';
          } else {
             link.style.animation = `navLinkFade 0.5 ease forwards ${index / 7 + 0.3}s`;
          }
       });
    });
 
 
 
 
 }
 
 navSlide();


 const activePage = window.location.pathname;
 const navLinks = document.querySelectorAll('nav a').forEach(link => {
     if (link.href.includes(`${contact}`)) {
      link.classList.add('active');
     }
 })