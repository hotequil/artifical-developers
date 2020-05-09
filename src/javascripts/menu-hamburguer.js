$(document).ready(function(){
    $('.menu-hamburguer').click(function(){
        $(this).toggleClass('open');
        $('.menu-bar--mobile').toggleClass('in');
    });
});

$( window ).resize(function(e) {
    let browserWidth = this.innerWidth;

    if(browserWidth <= 1000){
        $('.menu-hamburguer').removeClass('open');
        $('.menu-bar--mobile').removeClass('in');
    };
});