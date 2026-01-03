document.addEventListener('DOMContentLoaded', () => {
    const trigger = document.getElementById('hubTrigger');
    const wrap = document.getElementById('hubWrap');
    const hint = document.getElementById('hubHint');

    const activateHub = () => {
        // Expand the tiles permanently
        wrap.classList.add('active');
        // Fade out the initial glowing center
        trigger.classList.add('hidden');
        // Hide the hint text
        hint.classList.add('hidden');
    };

    // Trigger transition when the user hovers over the glowing icon
    trigger.addEventListener('mouseover', activateHub);
});