$(document).ready(function() {

    var asideBar = $('.dashboard-aside-bar');
    var logo = $('header.dashboard-header .logo');
    var dashboard = $('section.dashboard');
    var footer = $('footer.dashboard');

    var asideBarHeight = window.innerHeight - logo.height();
    var dashboardWidth = window.innerWidth - logo.width();
    var dahsboardHeight = window.innerHeight - (logo.height() + footer.height());
    var footerWidth = window.innerWidth - logo.width();

    asideBar.css({
        'width': logo.width(),
        'height': asideBarHeight
    });

    dashboard.css({
        'width': dashboardWidth,
        'height': dahsboardHeight
    });

    footer.css({
        'width': footerWidth
    });

    var menu = $('header.dashboard-header .logo span i');

    menu.on('click', function() {

        if (asideBar.hasClass('visible')) {
            asideBar.animate({ 'left': '-500px' }).removeClass('visible');
            dashboard.animate({
                width: '100vw'
            });
            footer.animate({
                width: '100vw'
            });
        } else {
            asideBar.animate({ 'left': '0' }).addClass('visible');
            dashboard.animate({
                width: dashboardWidth
            });
            footer.animate({
                width: footerWidth
            });
        }

    })

});