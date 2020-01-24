var isTouch = window.DocumentTouch && document instanceof DocumentTouch;

function scrollHeader() {
    // Has scrolled class on header
    var zvalue = $(document).scrollTop();
    if ( zvalue > 75 )
        $("#header").addClass("scrolled");
    else
        $("#header").removeClass("scrolled");
}

function parallaxBackground() {
    $('.parallax').css('background-positionY', ($(window).scrollTop() * 0.3) + 'px');
}

function swiperMain () {
    const swiper = document.querySelector('.swiper-container')
    this.swiper = new Swiper(swiper, {
        slidesPerView: 'auto',
        grabCursor: true,
        watchSlidesVisibility: true,
        centeredSlides: document.body.getBoundingClientRect().width <= 450,
        navigation: {
            nextEl: '.control.right',
            prevEl: '.control.left'
        }
    })
}

jQuery(document).ready(function($){

    scrollHeader();

    // Scroll Events
    if (!isTouch){
        $(document).scroll(function() {
            scrollHeader();
            parallaxBackground();
        });
    };

    // Touch scroll
    $(document).on({
        'touchmove': function(e) {
            scrollHeader(); // Replace this with your code.
        }
    });

    //Smooth scroll to start
    $('#to-start').click(function(){
        var start_y = $('#start').position().top;
        var header_offset = 45;
        window.scroll({ top: start_y - header_offset, left: 0, behavior: 'smooth' });
        return false;
    });

    //Smooth scroll to top
    $('#to-top').click(function(){
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
        return false;
    });

    // Responsive Menu
    $('#toggle').click(function () {
        $(this).toggleClass('active');
        $('#overlay').toggleClass('open');
        $('body').toggleClass('mobile-nav-open');
    });

    // Tree Menu
    $(".tree").treemenu({delay:300});

    swiperMain();
});
