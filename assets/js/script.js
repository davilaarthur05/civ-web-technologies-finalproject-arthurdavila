const menuTrigger = document.getElementById("menu-icon")
const menu = document.getElementById("nav-menu");
const items = document.querySelectorAll(".carousel-image");
let currentIndex = 0;

menuTrigger.addEventListener('click', ()=>{
    menu.classList.toggle("top-[70px]");
});

function showSlide(index) {
    items.forEach((item, i) => {
        if (i === index) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
    document.querySelector(".carousel").style.transform = `translateX(-${index * 100}%)`;
}

function prevImage() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
    showSlide(currentIndex);
}

function nextImage() {
    currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
    showSlide(currentIndex);
}

showSlide(currentIndex);