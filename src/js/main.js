
window.location.hash = 'Hello';
// console.log(window.location.hash);

$('.fullpage').fullpage({
    lockAnchors: true,
    onSlideLeave: function (sectionAnchor, sectionIndex, currentIndex, direction, nextIndex) {
        let currentSlide = $(this).attr('data-anchor');
        let nextSlide = currentSlide.replace(currentIndex + 1, nextIndex + 1);

        window.location.hash = nextSlide;

        $('.slide .content').removeClass('active');
    },
    afterSlideLoad: function (sectionAnchor, sectionIndex, slideAnchor, slideIndex) {
        $('.slide[data-anchor="' + slideAnchor + '"] .content').addClass('active');
    }
});

$('[data-slide]').click(function () {
    let target = $(this).attr('data-slide');
    let activeSection = $('.section.active').index();
    $.fn.fullpage.moveTo(activeSection + 1, target);
});