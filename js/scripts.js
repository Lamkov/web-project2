$(document).ready(function(){
    var images = [];
    $('.content li').each(function () {
        images.push($(this));
        $(this).hide();
    });

    var count = images.length;
    var currentItem = 0;
    images[currentItem].show();

    $('.next').click(function () {
        images[currentItem].hide();
        currentItem = (currentItem + 1) % count;
        images[currentItem].show();
    });

    $('.prev').click(function () {
        images[currentItem].hide();
        if (currentItem > 0) currentItem--;
        else currentItem = count - 1;
        images[currentItem].show();
    });
});