// Add event listener to the scroll arrow for smooth scrolling behavior
document.getElementById('scroll-arrow').addEventListener('click', function() {
    var section2 = document.getElementById('section2');

    // Check if the window is scrolled to the top
    if (window.scrollY === 0) {
        
        // Scroll to section 2
        window.scrollTo({
            top: section2.offsetTop,
            behavior: 'smooth' // Smooth scrolling behavior
        });
        
        // Rotate the arrow image to indicate scrolling direction
        document.querySelector('#scroll-arrow img').style.transform = 'rotate(0deg)';
    } else {
        
        // Scroll to top of the page
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scrolling behavior
        });
        
        // Rotate the arrow image to indicate scrolling direction
        document.querySelector('#scroll-arrow img').style.transform = 'rotate(180deg)';
    }
});

// Function to flip the page arrow based on scrolling
window.addEventListener('scroll', function() {
    var section2 = document.getElementById('section2');
    var scrollArrow = document.getElementById('scroll-arrow');

    var rect2 = section2.getBoundingClientRect();

    // Check if the bottom of section 2 is at or below the bottom of the viewport
    if (rect2.bottom <= window.innerHeight) {
      scrollArrow.classList.add('flipped'); // Add a class to flip the arrow
    } else {
      scrollArrow.classList.remove('flipped'); // Remove the class if scrolling upwards
    }
});


// Animated Text Morph Functionality
const elts = {
    text1: document.getElementById("text1"),
    text2: document.getElementById("text2")
};

const texts = [
    "COMING",
    "SOON",
    ":)",
];

const morphTime = 1; // Time taken for text morphing (in seconds)
const cooldownTime = 0.25; // Cooldown time between morphs (in seconds)

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

// Function to morph the text
function doMorph() {
    morph -= cooldown;
    cooldown = 0;

    let fraction = morph / morphTime;

    if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
    }

    setMorph(fraction);
}

// Function to set the morphed text
function setMorph(fraction) {
    elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`; // Apply blur effect to simulate morphing
    elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`; // Adjust opacity for smooth transition

    fraction = 1 - fraction;
    elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`; // Apply blur effect to simulate morphing
    elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`; // Adjust opacity for smooth transition

    elts.text1.textContent = texts[textIndex % texts.length];
    elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

// Function to handle cooldown period after morphing
function doCooldown() {
    morph = 0;

    elts.text2.style.filter = ""; // Reset blur effect
    elts.text2.style.opacity = "100%"; // Reset opacity

    elts.text1.style.filter = ""; // Reset blur effect
    elts.text1.style.opacity = "0%"; // Set opacity to 0 for smooth transition
}

// Function to animate text morphing
function animate() {
    requestAnimationFrame(animate);

    let newTime = new Date();
    let shouldIncrementIndex = cooldown > 0;
    let dt = (newTime - time) / 1500; // (1.5s) set duration of animation
    time = newTime;

    cooldown -= dt;

    if (cooldown <= 0) {
        if (shouldIncrementIndex) {
            textIndex++;
        }

        doMorph();
    } else {
        doCooldown();
    }
}

animate(); // Start the animation
