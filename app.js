const tl = gsap.timeline({ defaults: { duration: 0.35, ease: 'Power2.easeOut' } });

const home = document.querySelector('.home');
const notifications = document.querySelector('.notifications');
const messages = document.querySelector('.messages');

// initial state
gsap.set('.feather', { scale: 0, transformOrigin: 'center' }); 
gsap.set('.bell', { transformOrigin: 'top center' });
gsap.set('.ringer', { transformOrigin: 'top center' });
gsap.set('.wave', { opacity: 0, transformOrigin: 'bottom' });
gsap.set('.flap', { transformOrigin: 'top' });

/**
 * When home is clicked scale to 0.9 and make it go back to its normal state (i.e yoyo: true) with a repeating of 1
 * Ensure to have the feather from top -5 to falling down 20 with a scale of 1.5 and have every other feather follow behind in 0.2secs
 * Make the right feather go right (preference)
 */
home.addEventListener('click', () => {
    gsap.fromTo('.home-svg', { scale: 1 }, { scale: 0.9, yoyo: true, repeat: 1 });
    gsap.fromTo('.feather', { y: -5, scale: 0 }, { y: 20, scale: 1.5, duration: 1, stagger: 0.2 });
    gsap.fromTo('.right-feather', { x: 0 }, { x: 5 });
});

/**
 * Rotate the bell with a duration of 2 secs and do a custom easing function
 * Have the ringer rotate -3 with an x of 0.5 and set them to their normal state with the same custom easing
 * Scale the wave to 0 with an opacity of 1 and scale them 1.3 with an opacity of 0 with a duration of 1 (nice effect)
 */
notifications.addEventListener('click', () => { 
    gsap.fromTo('.bell', { rotation: -5 }, { rotation: 0, duration: 2, ease: 'elastic.out(5, 0.2)' });
    gsap.fromTo('.ringer', {rotation: -3, x: 0.5}, {rotation: 0, x: 0, duration: 1, ease: 'elastic.out(5, 0.2)'});
    gsap.fromTo('.wave', {scale: 0, opacity: 1}, {scale: 1.3, opacity: 0, duration: 1});
});

/**
 * Scale the icon minimally
 * scale the flap animation 
 * Scale note animation vertically 
 * Finally, scale back to normal
 */
messages.addEventListener('click', () => {
    tl.fromTo('.messages-svg', { scale: 1 }, { scale: 0.9 });
    tl.fromTo('.flap', { scale: 1 }, { scale: -1 }, '<50%');
    tl.fromTo('.messages-svg', { scale: 0.9 }, { scale: 1 }, '<50%');
    tl.fromTo('.note', { y: 0, opacity: 1 }, { y: -40, opacity: 0, duration: 0.75 });
    tl.to('.flap', { scale: 1 });
});
