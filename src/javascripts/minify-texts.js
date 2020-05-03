$( window ).resize(function(e){
    let browserWidth = this.innerWidth;

    $('.section__text.ethical-commitment__text')[0].innerHTML = browserWidth <= 600 ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod... <br/><a href="/" class="presentation__link presentation__link--white">Read more about ethic</a>' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus molestie nunc non blandit massa enim nec. Sed faucibus turpis in eu mi bibendum neque egestas congue. Sit amet venenatis urna cursus eget nunc scelerisque viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus molestie nunc non blandit massa enim nec. Sed faucibus turpis in eu mi bibendum neque egestas congue. Sit amet venenatis urna cursus eget nunc scelerisque viverra.';
    $('.presentation__text')[0].innerHTML = browserWidth <= 600 ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus molestie nunc non blandit massa enim nec. Sed faucibus turpis in eu mi bibendum neque egestas congue.';

    [...$('.trail-card__text')].forEach(function(item, index){
        if(browserWidth <= 800) {
            item.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore... <br/><a href="/" class="presentation__link">Read more about ${index === 0 ? 'database' : index === 1 ? 'interface' : 'hardware'}</a>`;
        } else{
            item.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus molestie nunc non blandit massa enim nec. Sed faucibus turpis in eu mi bibendum neque egestas congue.';
        };
    });

    [...$('.card__text')].forEach(function(item, index){
        if(browserWidth <= 500) {
            item.innerHTML = `Nunc sed blandit libero volutpat sed cras... <br/><a href="/" class="presentation__link">Read more about ${index === 0 ? 'practicality' : index === 1 ? 'safety' : 'structure'}</a>`;
        } else{
            item.innerHTML = 'Nunc sed blandit libero volutpat sed cras. Porttitor lacus luctus accumsan tortor posuere ac ut. Elementum facilisis leo vel fringilla. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare.';
        };
    });
});