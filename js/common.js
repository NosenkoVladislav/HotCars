//popup initialization
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

    $('.profSetPopup').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });

    $('.ratePopup').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });

    $('.removeCarPopup').magnificPopup({
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
//mask for login phone
$(function(){
    $("#logInPhone").mask("380999999999");
    $("#logInPhoneConfirm").mask("9999");
});
//log in popup
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
//select2 initialization
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
//filters range slider
$(function() {
    function distanceRange() {
        var $range = $("#slider-price-range"),
            $input1 = $("#amount-price-1"),
            $input2 = $("#amount-price-2"),
            instance, min,max;

        $range.ionRangeSlider({
            type: "double",
            min: 1000,
            max: 30000,
            from: 2000,
            to: 15000,
            step: 1000,
            hide_from_to: true,
            hide_min_max: true,
            onStart: function (data) {
                $input1.prop("value", data.from);
                $input2.prop("value", data.to);
            },
            onChange: function (data) {
                $input1.prop("value", data.from);
                $input2.prop("value", data.to);
            }
        });
        instance = $range.data("ionRangeSlider");

        $input1.on("change keyup", function () {
            var val = $(this).prop("value");

            // validate
            if (val < min) {
                val = min;
            } else if (val > max) {
                val = max;
            }

            instance.update({
                from: val
            });
        });

        $input2.on("change keyup", function () {
            var val = $(this).prop("value");

            // validate
            if (val < min) {
                val = min;
            } else if (val > max) {
                val = max;
            }

            instance.update({
                to: val
            });
        });
    };

    function yearRange() {
        var $range = $("#slider-year-range"),
            $input1 = $("#amount-year-1"),
            $input2 = $("#amount-year-2"),
            instance,min,max;

        $range.ionRangeSlider({
            type: "double",
            min: 1980,
            max: 2018,
            from: 2000,
            to: 2018,
            step: 1,
            hide_from_to: true,
            hide_min_max: true,
            onStart: function (data) {
                $input1.prop("value", data.from);
                $input2.prop("value", data.to);
            },
            onChange: function (data) {
                $input1.prop("value", data.from);
                $input2.prop("value", data.to);
            }
        });
        instance = $range.data("ionRangeSlider");

        $input1.on("change keyup", function () {
            var val = $(this).prop("value");

            // validate
            if (val < min) {
                val = min;
            } else if (val > max) {
                val = max;
            }
            instance.update({
                from: val
            });
        });

        $input2.on("change keyup", function () {
            var val = $(this).prop("value");

            // validate
            if (val < min) {
                val = min;
            } else if (val > max) {
                val = max;
            }
            instance.update({
                to: val
            });
        });
    };
    distanceRange();
    yearRange();
});
//slick slider initialization
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
//make rate counter
$(function() {
    var price = $('#auction-value');
    var priceConfirm = $('#auction-value2');

    $('.price-control').on('click',function () {
        if($(this).hasClass('incr-price')) {
            price.val(parseInt(price.val()) + 1000);
            price.change();
            priceConfirm.val(parseInt(priceConfirm.val()) + 1000);
            priceConfirm.change();
            return false;
        }else {
            price.val(parseInt(price.val()) - 1000);
            price.change();
            priceConfirm.val(parseInt(priceConfirm.val()) - 1000);
            priceConfirm.change();
            return false;
        };
    });
});
//timer
$(function () {
    var date = "2018/06/17";

    $('#timer-d').countdown(date, function(event) {
        $(this).text(
            event.strftime('%D')
        );
    });
    $('#timer-h').countdown(date, function(event) {
        $(this).text(
            event.strftime('%H')
        );
    });
    $('#timer-m').countdown(date, function(event) {
        $(this).text(
            event.strftime('%M')
        );
    });
    $('#timer-s').countdown(date, function(event) {
        $(this).text(
            event.strftime('%S')
        );
    });
});
//dropzone initialization
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
                        'border': '1px dashed var(--mainRed)',
                        'width': '17.5%',
                        'minHeight': 'auto'
                    });
                    $('.dropzone').css({
                        'border': 'none',
                        'justify-content': 'unset'
                    })
                }
            });
        }
    });
});
//dropzone param
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
//filters checking
$(function() {
    var filtersAll = $('.fliter-checkbox__all');
    var filterLocal = $('.filter-checkbox');
    var reset = $('.filters-reset');

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

    reset.click(function () {
        filterLocal.prop('checked', false);
    })
});
//change show phone block
$(function () {
    $('.seller-phone').click(function () {
        if(!$(this).hasClass('seller-phone__show')){
           $(this).css('display','none');
           $('.seller-phone__show').css('display','block');
        }
    })
});

$(".form-control").on('click', function (e) {
    e.preventDefault();
    if ($(window).width() < 600) {
        $(this).focus(function () {
            $(this).addClass('active')
        });
        $(this).focusout(function () {
            $(this).removeClass('active')
        });
    }
});
//show/hide filters button
$(document).ready( function() {
    $(window).resize(function () {
        if ($(window).width() < 991) {
            $('.filters').fadeOut(1);
        } else {
            $('.filters').fadeIn(1);
        }
    });

    if ($(window).width() < 991) {
        $('.filters').fadeOut(1);
    } else {
        $('.filters').fadeIn(1);
    }


    $('.show-filters').click(function () {
        $('.filters').slideToggle('slow');
        $('body, html').animate({
            scrollTop: 0
        }, 300);
    });

    // $(".show-filters").click(function(){
    //
    //     // $(".filters-wrapper").animate({width: 'toggle'},300);
    //
    //     // if($('.filters').is(":visible") == true){
    //     //     $('.filters').hide("slide", { direction: "left" }, 300);
    //     // } else {
    //     //     $('.filters').show("slide", { direction: "left" }, 200);
    //     //     $('body, html').animate({
    //     //         scrollTop: 0
    //     //     }, 300);
    //     // }
    // });

});
//sticky navbar
$(function () {
    $(window).resize(function () {
        if ($(window).width() < 768) {
            $('.navbar').addClass('navbar-fixed-top');
        } else {
            $('.navbar').removeClass('navbar-fixed-top');
        }
    });

    if ($(window).width() < 767) {
        $('.navbar').addClass('navbar-fixed-top');
    } else {
        $('.navbar').removeClass('navbar-fixed-top');
    }
});

$(".form-control").on('click', function (e) {
    e.preventDefault();
    if ($(window).width() < 600) {
        $(this).focus(function () {
            $(this).addClass('active')
        });
        $(this).focusout(function () {
            $(this).removeClass('active')
        });
    }
});
//toggle logo/filters btn
$(function () {
    filter = $('.show-filters');
    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        // var smLogo = $('.navbar-brand-sm');
        if ($(window).width() < 768) {
            if (scroll > 20) {
                filter.addClass('fixed-top');
                // smLogo.fadeOut(0.1);
            } else {
                filter.removeClass('fixed-top');
                // smLogo.fadeIn(0.1);
            }
        }
    });
});

