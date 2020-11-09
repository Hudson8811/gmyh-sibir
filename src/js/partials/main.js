$(function() {
    $('.mask').inputmask({"mask": "+7 (999) 999-99-99"});


    $('.js-form').on('submit',function (){
        event.preventDefault();
        $.ajax({
            type: "POST",
            url: "/php/send.php",
            data: $(this).serialize(),
            beforeSend: function (){
                $('button').prop( "disabled", true );
            },
            success: function() {
                $('.js-form').html('<div class="success">Успешно отправлено. Скоро мы вам перезвоним.</div>');
            }
        });
    });
});
