// Efeito de rolagem suave para links âncora
$(document).ready(function () {
    $('a[href^="#"]').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);
    });
});

// Efeito de paralaxe na imagem de fundo da área de boas-vindas
$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    $('.jumbotron img').css('transform', 'translateY(' + -(scrollTop / 3) + 'px)');
});
