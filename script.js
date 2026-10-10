// script.js
document.addEventListener('DOMContentLoaded', function() {
    const galaxyContainer = document.getElementById('galaxy');
    const numberOfStars = 200;
    const numberOfArms = 4;
    const armLength = 300;

    // Create the galactic core
    const core = document.createElement('div');
    core.className = 'core';
    galaxyContainer.appendChild(core);

    // Create stars
    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 2 + 0.5;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        // Random position within the container
        const x = Math.random() * window.innerWidth - window.innerWidth / 2;
        const y = Math.random() * window.innerHeight - window.innerHeight / 2;
        star.style.left = `${x}px`;
        star.style.top = `${y}px`;

        // Random animation delay for twinkling effect
        star.style.animationDelay = `${Math.random() * 2}s`;

        galaxyContainer.appendChild(star);
    }

    // Create spiral arms
    for (let arm = 0; arm < numberOfArms; arm++) {
        const angleIncrement = (Math.PI * 2) / numberOfArms;
        const armAngle = arm * angleIncrement;

        for (let i = 0; i < armLength; i++) {
            const armSegment = document.createElement('div');
            armSegment.className = 'arm';
            const size = Math.random() * 3 + 1;
            armSegment.style.width = `${size}px`;
            armSegment.style.height = `${size}px`;

            // Spiral arm position
            const radius = i * 2;
            const x = radius * Math.cos(armAngle + i * 0.1);
            const y = radius * Math.sin(armAngle + i * 0.1);
            armSegment.style.left = `${x}px`;
            armSegment.style.top = `${y}px`;

            galaxyContainer.appendChild(armSegment);
        }
    }

    // Animate the galaxy
    function animateGalaxy() {
        const stars = document.querySelectorAll('.star');
        const arms = document.querySelectorAll('.arm');

        stars.forEach(star => {
            const x = parseFloat(star.style.left) + (Math.random() - 0.5) * 0.5;
            const y = parseFloat(star.style.top) + (Math.random() - 0.5) * 0.5;
            star.style.left = `${x}px`;
            star.style.top = `${y}px`;
        });

        arms.forEach(arm => {
            const x = parseFloat(arm.style.left) + (Math.random() - 0.5) * 0.2;
            const y = parseFloat(arm.style.top) + (Math.random() - 0.5) * 0.2;
            arm.style.left = `${x}px`;
            arm.style.top = `${y}px`;
        });

        requestAnimationFrame(animateGalaxy);
    }

    animateGalaxy();
});
