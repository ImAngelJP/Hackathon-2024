document.addEventListener("DOMContentLoaded", function() {
    var btn = document.getElementById("boton-registrar");
    if (btn) {
        var modal = document.getElementById("myModal");

        btn.onclick = function () {
            modal.style.display = "block";

            setTimeout(function() {
                window.location.href = "main.html";
            }, 3500);
        }

        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }
});
