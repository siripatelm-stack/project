const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
let width = window.innerWidth;
let height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// Circle configuration
const circles = [];
const colors = ['#47c9ff', '#ff6f91', '#ffd66b', '#5be7a9', '#a385e0'];
const numCircles = 20;
for(let i = 0; i < numCircles; i++) {
    circles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: 30 + Math.random() * 40,
        dx: -1 + Math.random() * 2,
        dy: -1 + Math.random() * 2,
        color: colors[Math.floor(Math.random()*colors.length)],
        alpha: 0.2 + Math.random() * 0.4
    });
}

function animate() {
    ctx.clearRect(0, 0, width, height);
    circles.forEach(c => {
        ctx.globalAlpha = c.alpha;
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.r, 0, Math.PI*2);
        ctx.fillStyle = c.color;
        ctx.fill();
        c.x += c.dx;
        c.y += c.dy;
        // bounce off edges
        if(c.x - c.r < 0 || c.x + c.r > width) c.dx *= -1;
        if(c.y - c.r < 0 || c.y + c.r > height) c.dy *= -1;
    });
    ctx.globalAlpha = 1.0;
    requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
});

animate();