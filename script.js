function playVideo(videoSrc) {
    const videoPlayer = document.getElementById('video');
    videoPlayer.src = videoSrc;
    videoPlayer.play();
}
