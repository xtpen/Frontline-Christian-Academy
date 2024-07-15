const dropdowns = document.querySelectorAll("h4");

dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", () => {
        dropdown.nextElementSibling.classList.toggle("open");
        dropdown.querySelector("i").classList.toggle("open");
    });
});