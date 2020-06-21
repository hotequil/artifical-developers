"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

$('header').css('display', 'block');
$('main').css('display', 'block');
$('footer').css('display', 'block');
$(document).ready(function () {
    minifyText();
    $('.menu-hamburguer').click(function () {
        menuOpenAndClose();
    });
    $('.menu-hamburguer').keyup(function (event) {
        if (event.keyCode === 13) {
            menuOpenAndClose();
        }
    });

    function menuOpenAndClose() {
        $('.menu-hamburguer').toggleClass('open');
        $('.menu-bar--mobile').toggleClass('in');
    }
});
var listItems = ['.list__item', '.list__item--mobile'];
var hashValue = '#home';
$(listItems.toString()).on('click keydown', function (e) {
    if (e.type === "keydown" && e.keyCode === 13 || e.type === "click") {
        addClass(this);
    }

    ;
});

function addClass() {
    listItems.forEach(function (item) {
        $(item).removeClass('list__item--active');
        $(item).removeClass('list__item--active--mobile');
    });

    for (var _len = arguments.length, elems = new Array(_len), _key = 0; _key < _len; _key++) {
        elems[_key] = arguments[_key];
    }

    hashValue = $(elems).find('a')[0].hash;
    elems.forEach(function (item) {
        $(item).addClass('list__item--active list__item--active--mobile');
    });
}

;
$('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top;
    $('.menu-bar--mobile').removeClass('in');
    $('.menu-hamburguer').removeClass('open');
    $('html, body').animate({
        scrollTop: targetOffset - 50
    }, 750);
    setTimeout(function () {
        if ($(id).find('h2').length) {
            $(id).find('h2').focus();
        } else {
            $('.presentation__title').focus();
        }

        ;
    }, 750);
});
$('.accessibility-bar__button').on('click keydown', function (e) {
    if (e.type === "keydown" && e.keyCode === 13 || e.type === "click") {
        e.preventDefault();
        var body = $('body');
        var bodyFontSize = $('body').css("fontSize");

        if (e.currentTarget.innerHTML.includes('A+')) {
            if (bodyFontSize === '16px' || bodyFontSize === '') {
                body.css('fontSize', '17px');
            } else if (bodyFontSize === '17px') {
                body.css('fontSize', '18px');
            }

            ;
        } else if (e.currentTarget.innerHTML.includes('A-')) {
            if (bodyFontSize === '18px') {
                body.css('fontSize', '17px');
            } else if (bodyFontSize === '17px') {
                body.css('fontSize', '16px');
            }

            ;
        } else if (e.currentTarget.innerHTML === 'Alto contraste') {
            body.toggleClass('high-contrast');
        }

        ;
    }

    ;
});

function minifyText() {
    var browserWidth = window.innerWidth;
    $('.section__text.ethical-commitment__text')[0].innerHTML = browserWidth <= 600 ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod... <br/><a href="/" class="presentation__link presentation__link--white presentation__link--read-more">Read more about ethic</a>' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus molestie nunc non blandit massa enim nec. Sed faucibus turpis in eu mi bibendum neque egestas congue. Sit amet venenatis urna cursus eget nunc scelerisque viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus molestie nunc non blandit massa enim nec. Sed faucibus turpis in eu mi bibendum neque egestas congue. Sit amet venenatis urna cursus eget nunc scelerisque viverra.';
    $('.presentation__text')[0].innerHTML = browserWidth <= 600 ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus molestie nunc non blandit massa enim nec. Sed faucibus turpis in eu mi bibendum neque egestas congue.';

    _toConsumableArray($('.trail-card__text')).forEach(function (item, index) {
        if (browserWidth <= 800) {
            item.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore... <br/><a href=\"/\" class=\"presentation__link presentation__link--read-more\">Read more about ".concat(index === 0 ? 'database' : index === 1 ? 'interface' : 'hardware', "</a>");
        } else {
            item.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus molestie nunc non blandit massa enim nec. Sed faucibus turpis in eu mi bibendum neque egestas congue.';
        }

        ;
    });

    _toConsumableArray($('.card__text')).forEach(function (item, index) {
        if (browserWidth <= 500) {
            item.innerHTML = "Nunc sed blandit libero volutpat sed cras... <br/><a href=\"/\" class=\"presentation__link presentation__link--read-more\">Read more about ".concat(index === 0 ? 'practicality' : index === 1 ? 'safety' : 'structure', "</a>");
        } else {
            item.innerHTML = 'Nunc sed blandit libero volutpat sed cras. Porttitor lacus luctus accumsan tortor posuere ac ut. Elementum facilisis leo vel fringilla. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare.';
        }

        ;
    });
}

;
$(window).resize(function (e) {
    var browserWidth = this.innerWidth;

    if (browserWidth <= 1100) {
        $('.menu-hamburguer').removeClass('open');
        $('.menu-bar--mobile').removeClass('in');
    }

    ;
    var elementDesktop = $("a[href='" + hashValue + "'].list__item__link")[0].parentNode;
    var elementMobile = $("a[href='" + hashValue + "'].list__item__link--mobile")[0].parentNode;
    addClass(elementDesktop, elementMobile);
    minifyText();
});