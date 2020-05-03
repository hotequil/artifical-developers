$(document).ready(function(){
    $('.menu-hamburguer').click(function(){
        $(this).toggleClass('open');
        $('.menu-bar--mobile').toggleClass('in');
    });
});