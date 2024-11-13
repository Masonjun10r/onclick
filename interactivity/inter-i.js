$(document).scroll(() => {
    let scrollTop = $(document).scrollTop();

    if (scrollTop > 0) {
        navMenu.addClass('is-sticky');
        logo.css('color', '#ddb5f8');
        headerElem.css('background', '#fff');
        navToggle.css('border-color', '#000');
        navToggle.find('.strip').css('background-color', '#000');
    } else {
        navMenu.removeClass('is-sticky');
        logo.css('color', '#fff');
        headerElem.css('background', 'transparent');
        navToggle.css('bordre-color', '#fff');
        navToggle.find('.strip').css('background-color', '#fff');
    }

    headerElem.css(scrollTop >= 200 ? {'padding': '0.5rem', 'box-shadow': '0 -4px 10px 1px #999'} : {'padding': '1rem 0', 'box-shadow': 'none' });
});

$(document).trigger('scroll');

const btnElement = document.querySelector('button'); // Selects the first button element

btnElement.addEventListener('click', () => {
    const menu = document.querySelector('#menu'); // Ensure you target your menu by its ID or class
    menu.classList.toggle('active'); // Toggles the 'active' class
});