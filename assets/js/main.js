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
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)
