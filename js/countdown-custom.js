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
