// Set the date we're counting down to
var countDownDate = new Date("2023-06-01 00:00:00").getTime();

// Update the countdown every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the countdown date
  var distance = countDownDate - now;

  // Calculate the days, hours, minutes and seconds left
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the HTML elements
  document.getElementById("event-days").innerHTML = days
    .toString()
    .padStart(2, "0");
  document.getElementById("event-hours").innerHTML = hours
    .toString()
    .padStart(2, "0");
  document.getElementById("event-minutes").innerHTML = minutes
    .toString()
    .padStart(2, "0");
  document.getElementById("event-seconds").innerHTML = seconds
    .toString()
    .padStart(2, "0");

  // If the countdown is over, show a message
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);

const checkEvent = document.querySelector(".event-date");

checkEvent.addEventListener("click", (e) => {
  console.log(checkEvent.getAttribute("value"));
});
