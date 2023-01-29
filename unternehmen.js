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




const jsPara = document.getElementById("js-para")


function purchase() {
 
    console.log("button clicked")
  jsPara.textContent = "BFL ist eine im Minderheitsbesitz befindliche Civil Engineering Limited Liability Company; im Besitz und betrieben von Frank Loehr. Er ist in Dortmund, NRW registriert. Frank ist seit 1999 im Bereich der Baulandentwicklung tätig. 2006 beschloss er, sein eigenes Unternehmen zu gründen, um anderen Hausbesitzern und Bauträgern bei der Verwirklichung ihrer Bauziele zu helfen"
}
function purchase2() {
    console.log("button clicked")
  jsPara.textContent = "BFL Engineering ist ein Bauberatungsunternehmen, das für seine Kreativität, Professionalität und Arbeitsqualität bekannt ist. Egal, ob Sie Ingenieur, Architekt, Bauträger, staatliche Behörde oder Institution sind, Sie können sich darauf verlassen, dass JAS die Expertenleistungen erbringt, die Sie benötigen."
}
function purchase3() {
    console.log("button clicked")
  jsPara.textContent = "Wir sind stolz darauf, unseren Kunden hochwertiges technisches Design zu unterdurchschnittlichen Kosten anbieten zu können. Wir gehen jedes Projekt an, indem wir sehr auf Ihre spezifischen Bedürfnisse eingehen, äußerst flexibel in unseren Ansichten sind und das gesamte Spektrum unserer Kreativität einsetzen – und das alles innerhalb der praktischen Grenzen Ihres Projekts und Budgets."
}

const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a').forEach(link => {
    if (link.href.includes(`${unternehmen}`)) {
     link.classList.add('active');
    }
})