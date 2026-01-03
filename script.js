document.addEventListener('DOMContentLoaded', () => {
    // Triggers the fade-in and slide-up animations on page entry
    const reveals = document.querySelectorAll('.reveal');
    
    setTimeout(() => {
        reveals.forEach(el => {
            el.classList.add('active');
        });
    }, 150);
});

// Parallax effect: Profile image and decorators follow the mouse slightly
document.addEventListener('mousemove', (e) => {
    const img = document.querySelector('#profile-img');
    const decorators = document.querySelectorAll('.decorator');
    
    // Sensitivity of the movement
    const moveFactor = 60; 
    const x = (window.innerWidth / 2 - e.pageX) / moveFactor;
    const y = (window.innerHeight / 2 - e.pageY) / moveFactor;

    if(img) {
        img.style.transition = "transform 0.15s ease-out";
        img.style.transform = `translate(${x}px, ${y}px)`;
    }

    decorators.forEach(dec => {
        dec.style.transition = "transform 0.15s ease-out";
        // Decorators move more than the image for a 3D depth effect
        dec.style.transform = `translate(${x * 2}px, ${y * 2}px)`;
    });
});