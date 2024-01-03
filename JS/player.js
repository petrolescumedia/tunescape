<script src="https://cdnjs.cloudflare.com/ajax/libs/plyr/3.7.8/plyr.min.js" integrity="sha512-vONptKEoKbP1gaC5UkbYDa9OPr04ur4bxaaqT7DAJxGHB2oogtseCPrl5e5hPFokGYotlGNV4d+GM593ka7iNA==" crossorigin="anonymous" referrerpolicy="no-referrer">

    document.addEventListener('DOMContentLoaded', function () {
        const players = document.querySelectorAll('audio'); // Select all audio elements
        players.forEach(function (player) {
            new Plyr(player, {
                controls: ['play', 'progress', 'current-time', 'mute']
            });
        });
    });


        window.addEventListener("load", () => {
            const loader = document.querySelector(".loader");
            const body = document.body;

            loader.classList.add("loader--hidden");
            body.classList.remove("no-scroll"); // Remove the "no-scroll" class to reveal content

            loader.addEventListener("transitionend", () => {
                body.removeChild(loader);
            });
        });
    </script>    