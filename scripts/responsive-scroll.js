var $root = $('html, body');
$('a[href^="#"]').click(function () {
    var href = $.attr(this, 'href');
    if ($(window).width() < 960) {
        $root.animate({
            scrollTop: $(href).offset().top - 100
        }, 100);
    } else {
        $root.animate({
            scrollTop: $(href).offset().top - 25
        }, 100);
    }
});
$('button').click(function () {
    var pointer = $.attr(this, 'data-bs-target').toString();
    var target = '#' + $(pointer).attr('aria-labelledby').toString();
    $(pointer).on('shown.bs.collapse	', function () {
        if ($(window).width() < 960) {
            $root.animate({
                scrollTop: $(target).offset().top - 100
            }, 1);
        } else {
            $root.animate({
                scrollTop: $(target).offset().top
            }, 1);
        }
    })
});
