$(document).ready(function() {

    $(window).on('scroll', () => {
        var scrl = window.scrollY;

        if (scrl > 200) {
            $('header.navbar').addClass('sticky');
        } else {
            $('header.navbar').removeClass('sticky');
        }
    })

});