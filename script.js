
function playVideo(videoSrc) {
    const videoPlayer = document.getElementById('video');
    videoPlayer.src = videoSrc;
    videoPlayer.play();
}

function verVideo() {
    location.href = "./Video.html"
}

function verPremio() {
    location.href = "./Premio.html"
}

function verInicio() {
    location.href = "./Inicio.html"
}

// Modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("openModalBtn");
var modalImage = document.getElementById("modalImage");

btn.onclick = function () {
    modal.style.display = "block";
}

modalImage.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

