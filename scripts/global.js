/*--------------toggle icon navbar----------- */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

/*--------------seletor do navbar link----------- */

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < (offset+height)){
      navLinks.forEach(links=>{
        links.classList.remove('active');
        document.querySelector('header nav a[href*='+id+']').classList.add('active'); 
      })
    }
  });
  /*--------------strick navbar ----------- */

  let header = document.querySelector('header');

  header.classList.toggle('strick', window.scrollY > 100);

  /*--------------remove toggle icon navbar when click navbar----------- */
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
}

  /*--------------Barra de rolagem  ----------- */
  ScrollReveal({ 
    //reset: true,
    distance:'80px',
    duration: 2000, 
    delay:200, 
  });

  ScrollReveal().reveal('.home-content, .heading', { origin:'top' });
  ScrollReveal().reveal('.home-img, .servicos-container, .portifolio-box, .Contato form ', { origin:'bottom' });
  ScrollReveal().reveal('.home-content h1, .sobre-mim img', { origin:'left' });
  ScrollReveal().reveal('.home-content p, .sobre-content ', { origin:'right' });


    /*--------------Digitando Js  ----------- */

 const typed = new Typed('.multiple-text',{
    strings:['Desenvolvedor Front-End', 'Freelancer'],
    typeSpeed:100,
    backSpeed:100, 
    backDelay:1000,
    loop:true

 })


 