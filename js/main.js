function showContainer() {
    $('.container').css({ marginTop: 300 }).fadeIn({ queue: false, duration: 2000 });
    $('.container').animate({
        marginTop: 0
    }, 1500);
};

$(document).ready(function () {
    setTimeout(showContainer, 100);
});



