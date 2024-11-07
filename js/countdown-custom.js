jQuery(document).ready(function () {
  // Set target date (November 8, 2024, at 10 AM)
  const targetDate = new Date(2024, 10, 8, 11).getTime();

  //Railway timing//
  // Initialize jQuery countdown using the plugin
  jQuery("#defaultCountdown").countdown({
    until: new Date(2024, 10, 8, 11), // Countdown to November 8, 2024, 11:00 AM
    format: "ODHMS", // Display format (days, hours, minutes, seconds)
    onExpiry: function () {
      // Callback function when the countdown expires
      jQuery("#defaultCountdown").html("Countdown expired"); // Message after expiration
    },
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
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update countdown display only if the distance is valid
    if (distance >= 0) {
      // Update HTML elements with calculated time values
      document.querySelector(".days").innerText = days < 10 ? "0" + days : days;
      document.querySelector(".hours").innerText =
        hours < 10 ? "0" + hours : hours;
      document.querySelector(".minutes").innerText =
        minutes < 10 ? "0" + minutes : minutes;
      document.querySelector(".seconds").innerText =
        seconds < 10 ? "0" + seconds : seconds;

      // Optional: Update data-to attributes for animations (if needed)
      document.querySelector(".timer.days").setAttribute("data-to", days);
      document.querySelector(".timer.hours").setAttribute("data-to", hours);
      document.querySelector(".timer.minutes").setAttribute("data-to", minutes);
      document.querySelector(".timer.seconds").setAttribute("data-to", seconds);
    } else {
      // Clear interval and reset display when countdown ends
      clearInterval(countdownInterval);
      document.querySelector(".days").innerText = "00";
      document.querySelector(".hours").innerText = "00";
      document.querySelector(".minutes").innerText = "00";
      document.querySelector(".seconds").innerText = "00";

      // Ensure the button is visible
      const btn = document.querySelector("#btn-probl");
      btn.style.display = "inline-block"; // Make sure button is shown
      btn.addEventListener("click", () => {
        // Trigger confetti effect when the button is clicked
        if (typeof confetti === "function") {
          confetti({
            particleCount: 300,
            spread: 90,
            origin: { x: 1, y: 0.9 },
          });
          confetti({
            particleCount: 300,
            spread: 90,
            origin: { x: 0, y: 0.9 },
          });
        }
      });

      triggerConfetti();
    }
  }, 1000);
}

// Function to trigger confetti animation
function triggerConfetti() {
  // Trigger confetti animation on both sides
  confetti({
    particleCount: 900,
    spread: 100,
    origin: { x: 1, y: 0.9 },
  });

  confetti({
    particleCount: 900,
    spread: 100,
    origin: { x: 0, y: 0.9 },
  });
}

// FAQ Accordion JS
// Select all accordion buttons
const accordionButtons = document.querySelectorAll(".accordion-button");

// Loop through all accordion buttons
accordionButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // Get the accordion content related to this button
    const collapse = this.nextElementSibling;

    // If this accordion is already open, close it
    if (collapse.classList.contains("show")) {
      collapse.style.maxHeight = 0;
      collapse.classList.remove("show");
      this.querySelector(".accordion-icon").textContent = "+";
    } else {
      // Close any currently opened accordion items
      const openAccordion = document.querySelector(".accordion-content.show");
      if (openAccordion) {
        openAccordion.style.maxHeight = 0;
        openAccordion.classList.remove("show");
        openAccordion.previousElementSibling.querySelector(
          ".accordion-icon"
        ).textContent = "+";
      }

      // Open the clicked accordion item
      collapse.classList.add("show");
      collapse.style.maxHeight = collapse.scrollHeight + "px";
      this.querySelector(".accordion-icon").textContent = "-";
    }
  });
});

// Optional: Adding a scroll event for header behavior
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  const heading = document.getElementById("heading-pec"); // "PEC HACKS 2.0" heading
  const headingOffset = heading ? heading.offsetTop : 0; // Ensure heading exists
  const scrollPosition = window.scrollY; // Current scroll position

  if (scrollPosition > headingOffset) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
