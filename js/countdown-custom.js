jQuery(document).ready(function() {
        jQuery(function () {
            jQuery('#defaultCountdown').countdown({until: new Date(2024, 11, 3, 8)}); // year, month, date, hour
        });
});	


function startCountdown(targetDate) {
    const countdownInterval = setInterval(function () {
        const now = new Date().getTime();
        const distance = targetDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.querySelector('.days').innerText = days < 10 ? '0' + days : days;
        document.querySelector('.hours').innerText = hours < 10 ? '0' + hours : hours;
        document.querySelector('.minutes').innerText = minutes < 10 ? '0' + minutes : minutes;
        document.querySelector('.seconds').innerText = seconds < 10 ? '0' + seconds : seconds;

        if (distance < 0) {
            clearInterval(countdownInterval);
            document.querySelector('.days').innerText = "00";
            document.querySelector('.hours').innerText = "00";
            document.querySelector('.minutes').innerText = "00";
            document.querySelector('.seconds').innerText = "00";
        }
    }, 1000);
}


const targetDate = new Date("November 8, 2024 00:00:00").getTime();
startCountdown(targetDate);



