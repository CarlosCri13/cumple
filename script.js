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

document.getElementById('videoOverlay').addEventListener('click', function() {
    var video = document.getElementById('birthdayVideo');
    video.play(); // Intentar reproducir el video primero
    video.setAttribute("controls", "controls"); // Asegurarse de que los controles se muestren
    this.style.opacity = '0'; // Iniciar la transición de opacidad
    setTimeout(() => {
        this.style.display = 'none'; // Ocultar la superposición después de la transición
    }, 300); // Tiempo de espera igual al de la transición en CSS
});

// Obtener los elementos de audio y el botón
const birthdaySong = document.getElementById('birthdaySong');
const playSongButton = document.getElementById('playSongButton');

// Agregar un evento de clic al botón
playSongButton.addEventListener('click', () => {
    if (birthdaySong.paused) {
        birthdaySong.play();
        playSongButton.textContent = 'Te la dedico :3'; // Cambiar el texto del botón
    } else {
        birthdaySong.pause();
        playSongButton.textContent = 'Te la dedico :3'; // Cambiar el texto del botón
    }
});


document.getElementById('videoOverlay').addEventListener('click', function() {
    var video = document.getElementById('birthdayVideo');
    video.play(); // Intentar reproducir el video
    video.setAttribute("controls", "controls"); // Asegurarse de que los controles se muestren
    this.classList.add('hidden'); // Ocultar la superposición suavemente
});
