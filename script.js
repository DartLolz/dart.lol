function startVideo() {
    const video = document.getElementById('background-video');

    // Check if the video is paused and muted
    if (video.paused && video.muted) {
        // Unmute and play the video
        video.muted = false;
        video.play();
    } else {
        // Pause the video
        video.pause();
    }
}