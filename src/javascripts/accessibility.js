$('.accessibility-bar__button').on('click keydown', function(e){
    e.preventDefault();

    if((e.type === "keydown" && e.keyCode === 13) || e.type === "click") {
        let body = $('body');
        let bodyFontSize = $('body').css("fontSize");

        if(e.currentTarget.innerHTML === 'A+'){
            if(bodyFontSize === '16px' || bodyFontSize === ''){
                body.css('fontSize', '17px');
            } else if(bodyFontSize === '17px'){
                body.css('fontSize', '18px');
            };
        } else if(e.currentTarget.innerHTML === 'A-'){
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