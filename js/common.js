$(function () {
    $('.logInPopup').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });
    $(document).on('click', '.popup-modal-dismiss', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });
});

$(function () {
    $('.profSetPopup').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });
    $(document).on('click', '.popup-modal-dismiss', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });
});

$(function(){
    $("#logInPhone").mask("380999999999");
    $("#logInPhoneConfirm").mask("9999");
});

$(function () {
    var btnEnter = $('#phoneEnter');
    var tab = $('.popup-tab');
    var phone = document.getElementById('logInPhone');
    var cross = $('#popup-close');


    btnEnter.click(function() {
        if(phone.value.length = 12) {
            tab.toggleClass('active');
            $('#phoneCheckTab').css('display','none');
            $('#codeCheckTab').css('display','block');
        }
        cross.click(function () {
            if(tab.last().hasClass('active')){
                tab.toggleClass('active');
            }
            $('#phoneCheckTab').css('display','block');

            $('#codeCheckTab').css('display','none');
        })
    });
});

$(function() {
    $('.js-select').select2({
        placeholder: "Select a state"
    });
});



