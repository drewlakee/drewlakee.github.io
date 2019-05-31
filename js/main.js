function showLinks() {

    $('.links-group').css({ marginTop: 200 }).fadeIn({ queue: false, duration: 2000 });
    $('.links-group').animate({
        marginTop: 0
    }, 1500);
    setTimeout(showDog, 2000);
};

function showDog(){
    $(".myDog").fadeIn(2000);
}

$(".pad20px").fadeIn(2000);

setTimeout(showLinks, 2000);


