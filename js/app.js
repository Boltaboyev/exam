let loader = document.querySelector(".loader"),
    body = document.querySelector("body")
window.addEventListener("load", () => {
    loader.classList.add("loader_active")
    let interval = setInterval(removeLoader, 200)

    function removeLoader() {
        body.removeChild(loader)
        clearInterval(interval)
    }

    // Hamburger animation -------------------------------------------------------------------------
    document.getElementById("menu-icon").addEventListener("click", function () {
        this.classList.toggle("active")
    })

    // Password type -------------------------------------------------------------------------------
    const eye = document.querySelector(".fa-eye")
    const eyeSlash = document.querySelector(".fa-eye-slash")
    const pass = document.getElementById("pass")
    eye.addEventListener("click", () => {
        eye.classList.remove("fa-eye")
        eye.classList.add("fa-eye-slash")
        if (pass.type == "password") {
            pass.type = "text"
        } else {
            pass.type = "password"
            eye.classList.add("fa-eye")
            eye.classList.remove("fa-eye-slash")
        }
    })

    // video pause and play btn ------------------------------------------------------------------------
    let Video = document.getElementById("video")
    let Btn = document.querySelector(".playBtn")

    function Vid() {
        Video.play()
        Btn.style.display = "none"
    }

    function Vidstop() {
        Video.pause()
        Btn.style.display = "flex"
    }

    Btn.addEventListener("click", () => {
        Vid()
    })

    Video.addEventListener("click", () => {
        Vidstop()
        Btn.style.background = "#1d72d2"
    })

    // swiper -----------------------------------------------------------
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
        },
        loop: true,
        autoplay: {
            delay: 4000,
        },
    })
})
