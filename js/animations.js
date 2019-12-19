$(document).ready(function () {


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




