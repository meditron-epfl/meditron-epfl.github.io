const words = ["safe", "implementable", "helpful", "relevant", "coherent", "complete", "concise"];
let index = 0;

function typeNextWord() {
    const span = document.querySelector('.typing');
    const word = words[index];
    const typingSpeed = 100; // Adjust typing speed (milliseconds)

    function typeLetter(i) {
    if (i <= word.length) {
        span.textContent = word.substring(0, i);
        setTimeout(() => typeLetter(i + 1), typingSpeed);
    } else {
        setTimeout(() => eraseWord(word), getRandomDelay(1000, 2000));
    }
    }

    typeLetter(0);
    index = (index + 1) % words.length;
}

function eraseWord(word) {
    const span = document.querySelector('.typing');
    const eraseSpeed = 60; // Adjust erasing speed (milliseconds)

    function eraseLetter(i) {
    if (i >= 0) {
        span.textContent = word.substring(0, i);
        setTimeout(() => eraseLetter(i - 1), eraseSpeed);
    } else {
        setTimeout(typeNextWord, getRandomDelay(500, 1500));
    }
    }

    eraseLetter(word.length);
}

function getRandomDelay(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Start the animation
setTimeout(typeNextWord, 800); // Change the initial delay if needed