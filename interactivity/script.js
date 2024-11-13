$(document).ready(function() {
    let headerElem = $('header');
    let logo = $('#logo');
    let navMenu = $('#nav-menu');
    let navToggle = $('#nav-toggle');

    // Initialize main item slider
    $('#item-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<a href="#" class="slick-arrow slick-prev">previous</a>',
        nextArrow: '<a href="#" class="slick-arrow slick-next">next</a>',
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 530,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ] 
    });

    // Navigation menu toggle
    navToggle.on('click', () => {
        navMenu.css('right', '0');
    });

    $('#close-flyout').on('click', () => {
        navMenu.css('right', '-100%');
    });

    $(document).on('click', (e) => {
        let target = $(e.target);
        if (!(target.closest('#nav-toggle').length > 0 || target.closest('#nav-menu').length > 0)) {
            navMenu.css('right', '-100%');
        }
    });

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

    // GS Slider
    var $gsSlider = $('.gs-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<a href="#" class="slick-arrow slick-prev">previous</a>',
        nextArrow: '<a href="#" class="slick-arrow slick-next">next</a>',
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 530,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
    });

    // Auto scroll for #gs-slider
    setInterval(function() {
        if ($gsSlider.slick('getSlick').currentSlide < $gsSlider.slick('getSlick').slideCount - 1) {
            $gsSlider.slick('slickNext');  // Move to next slide
        } else {
            $gsSlider.slick('slickGoTo', 0);  // Loop to the first slide
        }
    }, 4000); // Scroll every 4 seconds

    // Other Slider (check if the other slider is correctly targeted)
    var $otherSlider = $('.other-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<a href="#" class="slick-arrow slick-prev">previous</a>',
        nextArrow: '<a href="#" class="slick-arrow slick-next">next</a>',
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 530,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
    });

    // Auto scroll for #other-slider
    setInterval(function() {
        if ($otherSlider.slick('getSlick').currentSlide < $otherSlider.slick('getSlick').slideCount - 1) {
            $otherSlider.slick('slickNext');  // Move to next slide
        } else {
            $otherSlider.slick('slickGoTo', 0);  // Loop to the first slide
        }
    }, 4000); // Scroll every 4 seconds

    // Next and previous buttons for #other-slider
    $('.slider-next').click(function(){
        $otherSlider.slick('slickNext');  // Move to next slide
    });

    $('.slider-prev').click(function(){
        $otherSlider.slick('slickPrev');  // Move to previous slide
    });
});