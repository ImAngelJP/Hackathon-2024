
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
    location.href = "./inicio.html"
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


document.addEventListener("DOMContentLoaded", function() {
    var btn = document.getElementById("boton-registrar");
    if (btn) {
        var modal = document.getElementById("myModal");

        btn.onclick = function () {
            modal.style.display = "block";
        }

        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }
});
