jQuery(document).ready(function() {
    // Set target date (November 8, 2024, at 8 AM)
    const targetDate = new Date(2024, 10, 8, 8).getTime(); 

    // Initialize jQuery countdown using the plugin
    jQuery('#defaultCountdown').countdown({
        until: new Date(2024, 10, 8, 8), // Countdown to November 8, 2024, 08:00 AM
        format: 'ODHMS', // Display format (days, hours, minutes, seconds)
        onExpiry: function() { // Callback function when the countdown expires
            jQuery('#defaultCountdown').html('Countdown expired'); // Message after expiration
        }
    });

    // Start the custom countdown function
    startCountdown(targetDate);
});

function startCountdown(targetDate) {
    const countdownInterval = setInterval(function () {
        const now = new Date().getTime();
        const distance = targetDate - now;

        // Calculate time components
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Update countdown display only if the distance is valid
        if (distance >= 0) {
            // Update HTML elements with calculated time values
            document.querySelector('.days').innerText = days < 10 ? '0' + days : days;
            document.querySelector('.hours').innerText = hours < 10 ? '0' + hours : hours;
            document.querySelector('.minutes').innerText = minutes < 10 ? '0' + minutes : minutes;
            document.querySelector('.seconds').innerText = seconds < 10 ? '0' + seconds : seconds;

            // Optional: Update data-to attributes for animations (if needed)
            document.querySelector('.timer.days').setAttribute('data-to', days);
            document.querySelector('.timer.hours').setAttribute('data-to', hours);
            document.querySelector('.timer.minutes').setAttribute('data-to', minutes);
            document.querySelector('.timer.seconds').setAttribute('data-to', seconds);
        } else {
            // Clear interval and reset display when countdown ends
            clearInterval(countdownInterval);
            document.querySelector('.days').innerText = "00";
            document.querySelector('.hours').innerText = "00";
            document.querySelector('.minutes').innerText = "00";
            document.querySelector('.seconds').innerText = "00";
        }
    }, 1000);
}


// FAQ transition js
// Select all accordion buttons
const accordionButtons = document.querySelectorAll('.accordion-button');

// Loop through all accordion buttons
accordionButtons.forEach(button => {
    button.addEventListener('click', function () {
        // Get the currently opened accordion item (if any)
        const openAccordion = document.querySelector('.accordion-content.show');

        // If there's an open accordion and it's not the one that was clicked, close it
        if (openAccordion && openAccordion !== this.nextElementSibling) {
            // Collapse the previous button
            openAccordion.previousElementSibling.querySelector('.accordion-button').classList.add('collapsed');

            // Collapse the open accordion
            openAccordion.style.height = openAccordion.scrollHeight + 'px';
            window.getComputedStyle(openAccordion).height; // Force reflow
            openAccordion.style.height = '0';

            openAccordion.addEventListener('transitionend', () => {
                openAccordion.classList.remove('show');
                openAccordion.style.height = null;
            }, { once: true });
        }

        // Toggle the clicked accordion item
        const collapse = this.nextElementSibling;

        if (!collapse.classList.contains('show')) {
            // Expand the new accordion panel
            collapse.classList.add('show');
            collapse.style.height = '0';
            window.getComputedStyle(collapse).height; // Force reflow
            collapse.style.height = collapse.scrollHeight + 'px';

            // Remove inline height after transition ends
            collapse.addEventListener('transitionend', () => {
                collapse.style.height = null;
            }, { once: true });

            // Toggle the collapsed state of the button
            this.classList.remove('collapsed');
        }
    });
});

// Optional: Adding a scroll event for header behavior
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    const heading = document.getElementById('heading-pec'); // "PEC HACKS 2.0" heading
    const headingOffset = heading.offsetTop; // Get the heading's position from the top of the page
    const scrollPosition = window.scrollY; // Current scroll position

    if (scrollPosition > headingOffset) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
