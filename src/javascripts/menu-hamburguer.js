$(document).ready(function(){
    $('.menu-hamburguer').click(function(){
        menuOpenAndClose();
    });

    $('.menu-hamburguer').keyup(function(event){
        if (event.keyCode === 13) {
            menuOpenAndClose();
        }
    });

    function menuOpenAndClose() {
        $('.menu-hamburguer').toggleClass('open');
        $('.menu-bar--mobile').toggleClass('in');
    }
});

$( window ).resize(function(e) {
    let browserWidth = this.innerWidth;

    if(browserWidth <= 1100){
        $('.menu-hamburguer').removeClass('open');
        $('.menu-bar--mobile').removeClass('in');
    };
});