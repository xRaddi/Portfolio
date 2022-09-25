const icon = document.querySelector('.bars');
const links = document.querySelector('.menu-responsive');

icon.addEventListener("click", () => {
    links.classList.toggle("active");
});