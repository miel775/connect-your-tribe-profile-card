document.addEventListener("DOMContentLoaded", () => {
    const happyMeal = document.querySelector('.macbutton');
    happyMeal.addEventListener('click', () => {
        happyMeal.classList.add('activate');
    });
});