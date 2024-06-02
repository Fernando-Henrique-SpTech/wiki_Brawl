
// Evento quando a página abrir
document.addEventListener('DOMContentLoaded', function () {
    const title = document.getElementById("title_id");
    if (title) {
        title.classList.add("fade-in-top"); // Animação do Titulo
    }

    const sun = document.getElementById("sun_id");
    const leftMountain = document.getElementById("leftMountain_id");
    const rightMountain = document.getElementById("rightMountain_id");

    if (sun) {
        const sun_initialTop = sun.offsetTop;  // Armazena a posição inicial do elemento

        window.addEventListener('scroll', function () {
            const value = window.scrollY;
            sun.style.top = sun_initialTop + value * 1.5 + 'px';  // Ajusta a posição do elemento

            leftMountain.style.transform = 'translateX(' + (value * -0.35) + 'px)';
            rightMountain.style.transform = 'translateX(' + (value * 0.35) + 'px)';
        });
    }
});

const swiper = new Swiper('.swiper', {
    spaceBetween: 30,
    effect: "fade",
    fadeEffect: {
        crossFade: true,
    },
    autoplay: {
        delay: 10000,
        disableOnInteraction: false, // Continua o autoplay após interações do usuário
    },
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

});

