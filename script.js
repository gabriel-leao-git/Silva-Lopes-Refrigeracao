document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '1'; // Torna visível ao carregar
});

document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const toggleButtons = document.querySelectorAll('.toggle-info');
toggleButtons.forEach(button => {
    button.addEventListener('click', function () {
        const info = this.nextElementSibling;
        info.style.display = info.style.display === 'none' ? 'block' : 'none';
    });
});

let currentIndex = 0;
const slides = document.querySelectorAll('.slider');

document.getElementById('next').addEventListener('click', () => {
    slides[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].style.display = 'block';
});

document.getElementById('prev').addEventListener('click', () => {
    slides[currentIndex].style.display = 'none';
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    slides[currentIndex].style.display = 'block';
});

const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});