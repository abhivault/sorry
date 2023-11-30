document.addEventListener('DOMContentLoaded', function () {
    const apologyContainer = document.getElementById('apology-container');
    const apologyVideo = document.getElementById('apology-video');

    // Generate the sorry message 100,000 times
    const sorryMessage = 'Sorry ';
    let i = 0;

    const apologyInterval = setInterval(function () {
        apologyContainer.innerHTML += sorryMessage;

        // Check if all apologies are displayed
        if (++i === 5000) {
            clearInterval(apologyInterval); // Stop the interval
            // Show the video after the apologies
            apologyVideo.style.display = 'block';
        }
    }, 0.3); // Set the interval to 0.5 seconds (500 milliseconds)
});
