//navbar fixed
window.onscroll = function () {
    const header =document.querySelector('header')
    const fixednav = header.offsetTop;

    if(window.pageYOffset> fixednav ){
        header.classList.add('navbar-fixed')
    } else {
       header.classList.remove('navbar-fixed')  
    }
};




//hamburger 
const hamburger = document.querySelector('#hamburger')
const navMenu = document.querySelector('#nav-menu')

hamburger.addEventListener('click', function (){
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden')
});

//Darkmode toggle 
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector ('html');

darkToggle.addEventListener('click',function (){
if (darkToggle.checked){
    html.classList.add ('dark'); 
} else {
    html.classList.remove ('dark');

}
});



