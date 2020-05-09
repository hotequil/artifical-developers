$('a[href^="#"]').on('click', function(e) {
    e.preventDefault();

    let id = $(this).attr('href'), targetOffset = $(id).offset().top;

    $('.menu-bar--mobile').removeClass('in');
    $('.menu-hamburguer').removeClass('open');

    $('html, body').animate({
        scrollTop: targetOffset - 352
    }, 750);

    setTimeout(function(){
    }, 1000);
});