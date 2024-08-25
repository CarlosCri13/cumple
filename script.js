function showMessage() {
    alert('¡Feliz cumpleaños! Que todos tus deseos se hagan realidad 🎉');
}
document.querySelectorAll('.gallery img').forEach(image => {
    image.addEventListener('click', () => {
        const src = image.getAttribute('src');
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `<img src="${src}" alt="Imagen ampliada">`;
        document.body.appendChild(modal);
        modal.addEventListener('click', () => modal.remove());
    });
});
function showMessage(imageAlt, message) {
    const messageBox = document.getElementById('messageBox');
    const messageImage = document.getElementById('messageImage');
    const messageText = document.getElementById('messageText');

    messageImage.src = `imagenes/${imageAlt.toLowerCase().replace(/\s/g, '')}.jpg`; // Ruta de la imagen nueva
    messageText.textContent = message;

    messageBox.style.display = 'block';
}

function closeMessage() {
    const messageBox = document.getElementById('messageBox');
    messageBox.style.display = 'none';
}
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 100;
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Inicializa el carrusel
showSlide(currentSlide);
document.addEventListener('DOMContentLoaded', () => {
    createFireworks(50); // Número de partículas de brillo

    setTimeout(() => {
        document.getElementById('fireworks').style.display = 'none';
    }, 3000); // Duración de la animación
});

function createFireworks(num) {
    const fireworksContainer = document.getElementById('fireworks');
    for (let i = 0; i < num; i++) {
        const firework = document.createElement('div');
        firework.className = 'firework';
        const size = Math.random() * 20 + 10;
        firework.style.width = `${size}px`;
        firework.style.height = `${size}px`;
        firework.style.top = `${Math.random() * 100}vh`;
        firework.style.left = `${Math.random() * 100}vw`;
        firework.style.animationDelay = `${Math.random() * 1.5}s`;
        fireworksContainer.appendChild(firework);
    }
}

function playSong() {
    const song = document.getElementById('birthdaySong');
    song.play();
}

