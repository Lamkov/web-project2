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
});
