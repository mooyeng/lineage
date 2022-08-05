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

const popupScreen = document.querySelector(".popup-screen");
const popupBox = document.querySelector(".popup-box");
const closeBtn = document.querySelector(".close-btn");

window.addEventListener("load", () => {
    setTimeout(() => {
        popupScreen.classList.add("active");
    }, 2000); //popup the screen in 2 sec
});

closeBtn.addEventListener("click", () => {
    popupScreen.classList.remove("active"); // close the popup box 

    //create cookie for a day
    
});
