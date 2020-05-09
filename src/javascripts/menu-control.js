let listItems = ['.list__item', '.list__item--mobile'];

$(listItems.toString()).on('click', function(e) {
    e.preventDefault();

    listItems.forEach(function(item){
        $(item).removeClass('list__item--active');
        $(item).removeClass('list__item--active--mobile');
    });

    this.classList.add('list__item--active', 'list__item--active--mobile');
});