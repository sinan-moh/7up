let MobilemenuIcone = document.querySelector('nav .fi-rr-menu-burger')
let menu = document.querySelector('nav .nav-list')

MobilemenuIcone.addEventListener('click',function(){
    menu.classList.toggle("open");
})