
document.querySelector('header').addEventListener('click', function() {
    const video = document.getElementById('introVideo');
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});
