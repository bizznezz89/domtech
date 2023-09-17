document.addEventListener("DOMContentLoaded", function() {
    const typewriterElements = document.querySelectorAll('.typewriter-text');

    typewriterElements.forEach(function(element) {
        let typewriterIndex = 0;
        const typewriterText = element.getAttribute('data-text');

        function typeWriter() {
            if (typewriterIndex < typewriterText.length) {
                element.innerHTML += typewriterText.charAt(typewriterIndex);
                typewriterIndex++;
                setTimeout(typeWriter, 50);  // adjust the typing speed
            }
        }

        // Start typing
        typeWriter();
    });
});
