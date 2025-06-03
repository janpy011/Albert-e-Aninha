let current = 0;
const images = document.querySelectorAll('.carousel-image');

function showNextImage() {
    images[current].classList.remove('active');
    current = (current + 1) % images.length;
    images[current].classList.add('active');
}
setInterval(showNextImage, 2500);

const startDate = new Date('2024-8-11');
const yearsSpan = document.getElementById('years');
const monthsSpan = document.getElementById('months');
const daysSpan = document.getElementById('days');

function updateCounter() {
    const now = new Date();
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();

    if (days < 0) {
        months -= 1;
        days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years -= 1;
        months += 12;
    }

    yearsSpan.textContent = years;
    monthsSpan.textContent = months;
    daysSpan.textContent = days;
}

updateCounter();
setInterval(updateCounter, 86400000);

document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll('.fade-in');

    fadeElements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('visible');
        }, 300 * index);
    });

    const audio = document.getElementById('romantic-audio');
    const overlay = document.getElementById('playButtonOverlay');
    const playButton = document.getElementById('playButton');

    playButton.addEventListener('click', () => {
        audio.play().catch(() => { });
        overlay.style.display = 'none';
    });
});
