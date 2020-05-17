$('header').css('display', 'block');
$('main').css('display', 'block');
$('footer').css('display', 'block');

$(document).ready(function(){
    minifyText();

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

let listItems = ['.list__item', '.list__item--mobile'];
let hashValue = '#home';

$(listItems.toString()).on('click keydown', function(e) {
    if((e.type === "keydown" && e.keyCode === 13) || e.type === "click") {
        addClass(this);
    };
});

function addClass(...elems) {
    listItems.forEach(function (item) {
        $(item).removeClass('list__item--active');
        $(item).removeClass('list__item--active--mobile');
    });

    hashValue = $(elems).find('a')[0].hash;

    elems.forEach(function(item){
        $(item).addClass('list__item--active list__item--active--mobile');
    });
};

$('a[href^="#"]').on('click', function(e) {
    e.preventDefault();

    let id = $(this).attr('href'), targetOffset = $(id).offset().top;

    $('.menu-bar--mobile').removeClass('in');
    $('.menu-hamburguer').removeClass('open');

    $('html, body').animate({
        scrollTop: targetOffset - 332
    }, 750);

    setTimeout(function(){
        if($(id).find('h2').length){
            $(id).find('h2').focus();
        } else{
            $('.presentation__title').focus();
        };
    }, 750);
});

$('.accessibility-bar__button').on('click keydown', function(e){
    if((e.type === "keydown" && e.keyCode === 13) || e.type === "click") {
        e.preventDefault();

        let body = $('body');
        let bodyFontSize = $('body').css("fontSize");

        if(e.currentTarget.innerHTML.includes('A+')){
            if(bodyFontSize === '16px' || bodyFontSize === ''){
                body.css('fontSize', '17px');
            } else if(bodyFontSize === '17px'){
                body.css('fontSize', '18px');
            };
        } else if(e.currentTarget.innerHTML.includes('A-')){
            if(bodyFontSize === '18px'){
                body.css('fontSize', '17px');
            } else if(bodyFontSize === '17px'){
                body.css('fontSize', '16px');
            };
        } else if(e.currentTarget.innerHTML === 'Alto contraste'){
            body.toggleClass('high-contrast');
        };
    };
});

function minifyText(){
    let browserWidth = window.innerWidth;

    $('.section__text.ethical-commitment__text')[0].innerHTML = browserWidth <= 600 ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod... <br/><a href="/" class="presentation__link presentation__link--white presentation__link--read-more">Read more about ethic</a>' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus molestie nunc non blandit massa enim nec. Sed faucibus turpis in eu mi bibendum neque egestas congue. Sit amet venenatis urna cursus eget nunc scelerisque viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus molestie nunc non blandit massa enim nec. Sed faucibus turpis in eu mi bibendum neque egestas congue. Sit amet venenatis urna cursus eget nunc scelerisque viverra.';
    $('.presentation__text')[0].innerHTML = browserWidth <= 600 ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus molestie nunc non blandit massa enim nec. Sed faucibus turpis in eu mi bibendum neque egestas congue.';

    [...$('.trail-card__text')].forEach(function(item, index){
        if(browserWidth <= 800) {
            item.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore... <br/><a href="/" class="presentation__link presentation__link--read-more">Read more about ${index === 0 ? 'database' : index === 1 ? 'interface' : 'hardware'}</a>`;
        } else{
            item.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus molestie nunc non blandit massa enim nec. Sed faucibus turpis in eu mi bibendum neque egestas congue.';
        };
    });

    [...$('.card__text')].forEach(function(item, index){
        if(browserWidth <= 500) {
            item.innerHTML = `Nunc sed blandit libero volutpat sed cras... <br/><a href="/" class="presentation__link presentation__link--read-more">Read more about ${index === 0 ? 'practicality' : index === 1 ? 'safety' : 'structure'}</a>`;
        } else{
            item.innerHTML = 'Nunc sed blandit libero volutpat sed cras. Porttitor lacus luctus accumsan tortor posuere ac ut. Elementum facilisis leo vel fringilla. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare.';
        };
    });
};

$( window ).resize(function(e) {
    let browserWidth = this.innerWidth;

    if(browserWidth <= 1100){
        $('.menu-hamburguer').removeClass('open');
        $('.menu-bar--mobile').removeClass('in');
    };

    let elementDesktop = $("a[href='" + hashValue + "'].list__item__link")[0].parentNode;
    let elementMobile = $("a[href='" + hashValue + "'].list__item__link--mobile")[0].parentNode;

    addClass(elementDesktop, elementMobile);

    minifyText();
});