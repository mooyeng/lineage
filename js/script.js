$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 10) {
        $(".navbar").addClass("nav-scroll");
        $(".back_to_top").addClass("show_btn");
    } else {
        $(".navbar").removeClass("nav-scroll");
        $(".back_to_top").removeClass("show_btn");
    }
});

//banshawali//

$(function () {
    $('.genealogy-tree ul').hide();
    $('.genealogy-tree>ul').show();
    $('.genealogy-tree ul.active').show();
    $('.genealogy-tree li').on('click', function (e) {
        var children = $(this).find('> ul');
        if (children.is(":visible")) children.hide('fast').removeClass('active');
        else children.show('fast').addClass('active');
        e.stopPropagation();
    });
});

//electronics//
MathJax.Hub.Config({
    tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}
    });