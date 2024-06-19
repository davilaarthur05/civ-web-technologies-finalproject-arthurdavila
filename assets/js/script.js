const menuTrigger = document.getElementById("menu-icon")
const menu = document.getElementById("nav-menu");

menuTrigger.addEventListener('click', ()=>{
    menu.classList.toggle("top-[70px]");
});
