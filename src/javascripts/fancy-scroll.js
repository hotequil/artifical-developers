$('a[href^="#"]').on('click', function(e) {
    e.preventDefault();

    let id = $(this).attr('href'), targetOffset = $(id).offset().top;

    $('.menu-bar--mobile').removeClass('in');
    $('.menu-hamburguer').removeClass('open');

    $('html, body').animate({
        scrollTop: targetOffset - 50
    }, 750);

    setTimeout(function(){
        if($(id).find('h2').length){
            $(id).find('h2').focus();
        } else{
            $('.presentation__title').focus();
        };
    }, 750);
});