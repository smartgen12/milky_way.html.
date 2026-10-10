// script.js
document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('galaxy');
    const ctx = canvas.getContext('2d');
    const numberOfStars = 500;
    const numberOfArms = 4;
    const armLength = 300;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create the galactic core
    function drawCore() {
        const gradient = ctx.createRadialGradient(canvas.width / 2, canvas.height / 2, 10, canvas.width / 2, canvas.height / 2, 50);
        gradient.addColorStop(0, '#FFD700');
        gradient.addColorStop(1, '#FF8C00');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, 50, 0, Math.PI * 2);
        ctx.fill();
    }

    // Create stars
    function createStars() {
        for (let i = 0; i < numberOfStars; i++) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            const size = Math.random() * 2 + 0.5;
            const opacity = Math.random() * 0.6 + 0.4;

            ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // Create spiral arms
    function createSpiralArms() {
        for (let arm = 0; arm < numberOfArms; arm++) {
            const angleIncrement = (Math.PI * 2) / numberOfArms;
            const armAngle = arm * angleIncrement;

            for (let i = 0; i < armLength; i++) {
                const radius = i * 2;
                const x = canvas.width / 2 + radius * Math.cos(armAngle + i * 0.1);
                const y = canvas.height / 2 + radius * Math.sin(armAngle + i * 0.1);
                const size = Math.random() * 3 + 1;
                const opacity = Math.random() * 0.5 + 0.5;

                ctx.fillStyle = `rgba(65, 105, 225, ${opacity})`;
                ctx.beginPath();
                ctx.arc(x, y, size, 0, Math.PI * 2);
                ctx.fill();
            }
        }
    }

    // Animate the galaxy
    function animateGalaxy() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawCore();
        createStars();
        createSpiralArms();
        requestAnimationFrame(animateGalaxy);
    }

    animateGalaxy();

    // Handle window resize
    window.addEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
});
