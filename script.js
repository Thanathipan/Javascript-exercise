function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date(); // Get the current date and time

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Add leading zeros if necessary (e.g., '9' becomes '09')
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Format the time string
    const timeString = `${hours}:${minutes}:${seconds}`;

    // Display the formatted time
    clockElement.textContent = timeString;
}

// Call updateClock every 1000 milliseconds (1 second)
setInterval(updateClock, 1000);

// Initial call to display the clock immediately when the page loads
updateClock();
