document.getElementById("playBtn").addEventListener("click", () => {
    audio.play();
    startConfetti();
});

// Konfeti sederhana
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];

function randomColor() {
    const colors = ["#ff6f91", "#ffc0cb", "#fddb92", "#f8a5c2"];
    return colors[Math.floor(Math.random() * colors.length)];
}

function createParticles() {
    for (let i = 0; i < 100; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            size: Math.random() * 6 + 2,
            speedY: Math.random() * 2 + 1,
            color: randomColor()
        });
    }
}

function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        p.y += p.speedY;

        if (p.y > canvas.height) {
            p.y = 0;
            p.x = Math.random() * canvas.width;
        }
    });
}

function startConfetti() {
    if (particles.length === 0) createParticles();
    setInterval(drawParticles, 30);
}

document.getElementById('greetingCard').addEventListener('click', function() {
    const music = document.getElementById('birthdayMusic');
    music.play();
});

// Musik autoplay (untuk iOS/Android kadang perlu interaksi user, sudah diatur autoplay+loop)
window.addEventListener('DOMContentLoaded', function() {
    const music = document.getElementById('birthdayMusic');
    setTimeout(function() {
        if (music && music.paused) {
            music.play().catch(() => {});
        }
    }, 500);
});

// Slide logic
function nextSlide(num) {
    for (let i = 1; i <= 3; i++) {
        const slide = document.getElementById('slide' + i);
        if (slide) {
            slide.classList.remove('active');
        }
    }
    const activeSlide = document.getElementById('slide' + num);
    if (activeSlide) {
        activeSlide.classList.add('active');
    }
}
