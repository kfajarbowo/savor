// Show Menu
const showMenu = (toggleId, navID)=>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navID)

    //Validasi variable ada / enggak
    if(toggle && nav){
        //add show-menu class ke div tag sama class nav_menu
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu');
        })
    }
}
showMenu('nav-toggle','nav-menu');

//Remove menu
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu= document.getElementById('nav-menu')
    //ketika click nav__link , maka akan ngremove class show menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// Scroll Active Link
const sections = document.querySelectorAll('section[id]')


function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')
        
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// Change Background Header

function scrollHeader(){
    const nav = document.getElementById('header')

    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// Show ScrollTop
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top')
    //ketika scroll lebih tinggi dari 560 , add a class show-scroll
    if(this.scrollY >= 560) scrollTop.classList.add('scroll-top'); else scroll.classList.remove('scroll-top')
}
window.addEventListener('scroll', scrollTop)


// Dark Light Theme
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

//validasi jika user sebelumnya memilih topic
if(selectedTheme){
    //jika validasi terpenuhi, untuk mengetahui apakah sudah active atau deactive
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () =>{
    //add or remove dark / light thene
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme)
    //menyimpan theme dan ikon saat ini ketika user memilih
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// scroll reveal animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.home__data, .home__img,
            .about__data, .about__img,
            .services__content, .menu__content,
            .app__data, .app__img,
            .contact__data, .contact__button,
            .footer__content`, {
    interval: 200
})
