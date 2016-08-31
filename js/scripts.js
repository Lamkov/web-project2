$(document).ready(function(){
    var images = [],
        count,
        currentItem = 0,
        delay = 1000;

    $('.content li').each(function () {
        var $this = $(this);
        images.push($this);
        $this.hide();
    });

    count = images.length;
    images[currentItem].show();

    $('.next').click(function () {
        images[currentItem].hide();
        currentItem = (currentItem + 1) % count;
        images[currentItem].stop().fadeIn(delay);
        return false;
    });

    $('.prev').click(function () {
        images[currentItem].hide();
        if (currentItem > 0) currentItem--;
        else currentItem = count - 1;
        images[currentItem].stop().fadeIn(delay);
        return false;
    });
    $('nav ul li:first-child').mouseenter(function(){
        $('.menu-full').slideDown(500);
    })
    $('nav ul li:first-child' && '.menu-full').mouseleave(function(){
        $('.menu-full').slideUp(500);
    })


    var mouse_is_inside = false;

    $(document).ready(function()
    {
        $('nav' || '.menu-full').hover(function(){
            mouse_is_inside=true;
        }, function(){
            mouse_is_inside=false;
        });

        $("body").mouseup(function(){
            if(! mouse_is_inside) $('.menu-full').slideUp(500);
        });
    });
    $(".mobile-button").click(function(){
        if($('.mobile-menu').css('display') == 'none' ){
            $('.mobile-menu').slideDown(500);
        } else if ($('.mobile-menu').css('display') == 'block' ) {
            $('.mobile-menu').slideUp(500);
        }
        })
    $(".mobile-menu-primary").click(function(){
        if($('.dropdown-menu').css('display') == 'none' ) {
            $(this).children(".dropdown-menu").slideDown(500);
            $(this).children(".drop-icon").removeClass("drop-icon-closed").addClass("drop-icon-opened");
        } else if ($('.dropdown-menu').css('display') == 'block' ) {
            $('.dropdown-menu').slideUp(500);
            $(this).children(".drop-icon").removeClass("drop-icon-opened").addClass("drop-icon-closed");
        }
    })
});
