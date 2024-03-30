var menubutton=document.querySelector('.piyush');
var leftNav=document.querySelector('.left-nav');

menubutton.addEventListener("click",function() {
    leftNav.classList.toggle('dropdown');
})