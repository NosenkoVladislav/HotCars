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
        if(phone.value.length == 12) {
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
        placeholder: 'Select an option'
    });
    $('.filter-region-select').select2({
        placeholder: 'Выберите область'
    });
    $('.filter-city-select').select2({
        placeholder: 'Выберите город'
    });
    $('.filter-manufactor-select').select2({
        placeholder: 'Выберите марку'
    });
    $('.filter-model-select').select2({
        placeholder: 'Выберите модель'
    });
    $('.filter-gearbox-select').select2({
        placeholder: 'Выберите тип'
    });
    $('.filter-body-select').select2({
        placeholder: 'Выберите тип'
    });
    $('.filter-color-select').select2({
        placeholder: 'Выберите тип'
    });
    $('.page-show-select').select2({
        minimumResultsForSearch: -1
    });
});


$(function() {
    $( "#slider-price-range" ).slider({
        range: true,
        min: 100,
        max: 500000,
        values: [ 100000, 300000 ],
        slide: function( event, ui ) {
            // $( "#price-amount" ).html( "$" + ui.values[ 0 ] + " -$ " + ui.values[ 1 ] );
            $( "#amount-price-1" ).val(ui.values[ 0 ]);
            $( "#amount-price-2" ).val(ui.values[ 1 ]);
        }
    });

    $( "#slider-distance-range" ).slider({
        range: true,
        min: 1990,
        max: 2018,
        values: [ 1995, 2018 ],
        slide: function( event, ui ) {
            // $("#amount-distance-1" ).focusout( function () {
            //     // ui.values[ 0 ] = $("#amount-distance-1").val;
            //     // console.log($("#amount-distance-1" ).val);
            //     console.log(ui.values[0]);
            //     console.log($("#amount-distance-1").val())
            //     ui.values[0]=$("#amount-distance-1").val();
            // })
            // $( "#amount-distance" ).html( "" + ui.values[ 0 ] + " - " + ui.values[ 1 ] );
            $( "#amount-distance-1" ).val(ui.values[ 0 ]);
            $( "#amount-distance-2" ).val(ui.values[ 1 ]);

        }
    });
});

$('.open-car-slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    appendArrows: '.open-car-slider-control',
    prevArrow: '<div class="open-car-slider-control__left"></div>',
    nextArrow: '<div class="open-car-slider-control__right"></div>',
    fade: true,
    asNavFor: '.open-car-slider-nav'
});
$('.open-car-slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.open-car-slider-for',
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true
});

$(function() {
    var incr = $('.incr-price');
    var decr = $('.decr-price');
    var price = $('#auction-value');

    $('.sidebar-price-auction-value').on('click',function () {
        if(incr.click(function () {
                price.val(parseInt(price.val()) + 100);
                price.change();
                return false;
            }));
        if(decr.click(function () {
                price.val(parseInt(price.val()) - 100);
                price.change();
                return false;
            }));
    });
});

$(document).ready(function () {
    Dropzone.autoDiscover = false;
    $("#dZUpload").dropzone({
        url: "hn_SimpeFileUploader.ashx",
        addRemoveLinks: true,
        success: function (file, response) {
            var imgName = response;
            file.previewElement.classList.add("dz-success");
            console.log("Successfully uploaded :" + imgName);
        },
        error: function (file, response) {
            file.previewElement.classList.add("dz-error");
        },
        init: function () {
            this.on("complete", function (file) {
                if (this.getUploadingFiles().length === 0 && this.getQueuedFiles().length === 0) {
                        $('.upload-space').css({
                            'border' : '1px dashed var(--mainRed)',
                            'width' : '17.5%'
                        });
                        $('.dropzone').css({
                            'border' : 'none',
                            'justify-content' : 'unset'
                        })
                }
            });
        }
    });
});

Dropzone.options.dZUpload = {
    acceptedFiles: 'image/*',
    clickable: "#uploadIcon",
    thumbnailWidth:"250",
    thumbnailHeight:"250",

    init: function () {
        this.on("complete", function (data) {
            var res = eval('(' + data.xhr.responseText + ')');
            $('#newImage').text(res.Message);
        });
        this.on("maxfilesexceeded", function (data) {
            this.removeFile(data);
        });
    }
};


$(function() {
    var filtersAll = $('.fliter-checkbox__all');
    var filterLocal = $('.filter-checkbox')

    filtersAll.change(function (event) {
        if($(this).prop('checked') == true) {
            $(this).closest($('.filter-item')).find(filterLocal).prop('checked', true);
        } else {
            $(this).closest($('.filter-item')).find(filterLocal).prop('checked', false);
        }
    })

    filterLocal.change(function (event) {
        if($(this).prop('checked') == false) {
            $(this).closest($('.filter-item')).find(filtersAll).prop('checked', false);
        }
    })
});


