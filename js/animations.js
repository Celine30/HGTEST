$(document).ready(function () {

    $("a[href*='#']:not([href='#'])").click(function() {
        if (
            location.hostname == this.hostname
            && this.pathname.replace(/^\//, "") == location.pathname.replace(/^\//, "")
        ) {
            var anchor = $(this.hash);
            anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) + "]");
            if (anchor.length) {
                $("html, body").animate({scrollTop: anchor.offset().top}, 1500);
            }
        }
    });

    $('.works-fin').click(function () {
        $('#modal-works').modal('show')

    });

    $('.btn-cuncat').mousemove(function () {
        $('.btn-cuncat').removeClass('btn-inactif-modal').addClass('btn-actif-modal');
        $('.btn-lorem').removeClass('btn-actif-modal').addClass('btn-inactif-modal');
    });

    $('.btn-lorem').mousemove(function () {
        $('.btn-lorem').removeClass('btn-inactif-modal').addClass('btn-actif-modal');
        $('.btn-cuncat').removeClass('btn-actif-modal').addClass('btn-inactif-modal');
    });

    

})




