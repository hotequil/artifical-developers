let listItems = ['.list__item', '.list__item--mobile'];
let hashValue = '#home';

$(listItems.toString()).on('click keydown', function(e) {
    if((e.type === "keydown" && e.keyCode === 13) || e.type === "click") {
        addClass(this);
    };
});

$( window ).resize(function(e) {
    let elementDesktop = $("a[href='" + hashValue + "'].list__item__link")[0].parentNode;
    let elementMobile = $("a[href='" + hashValue + "'].list__item__link--mobile")[0].parentNode;

    addClass(elementDesktop, elementMobile);
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
}