function showContainer() {
    $('.container').fadeIn({ queue: false, duration: 2000 });
};

$(document).ready(function () {
    setTimeout(showContainer, 100);
});

