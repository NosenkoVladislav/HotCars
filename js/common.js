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

    $('.add-request').magnificPopup({
        type: 'inline',
        preloader: true,
        focus: '#username',
        modal: true
    });
    $('.leaveGrp').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });
    $('.createGrp').magnificPopup({
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
        placeholder: 'Выберите цвет'
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
    var step = 1000;

    $('.price-control').on('click',function () {
        if($(this).hasClass('incr-price')) {
            price.val(parseInt(price.val()) + step);
            price.change();
            priceConfirm.val(parseInt(priceConfirm.val()) + step);
            priceConfirm.change();
            return false;
        }else {
            price.val(parseInt(price.val()) - step);
            price.change();
            priceConfirm.val(parseInt(priceConfirm.val()) - step);
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
$(function () {
    Dropzone.autoDiscover = false;
    $("#dZUpload").dropzone({
        url: "http://hotcar-dev.wayappdevelopment.tech/adverts/new",
        addRemoveLinks: true,
        autoProcessQueue: false,
        init:
            function () {
                this.on("addedfile",function () {
                    var images = this.element.childNodes.length;
                    var counter = $('.advert-counter-value');
                    counter.html(images-4);

                    var usedInput = this.hiddenFileInput;
                    setTimeout(() => {
                        $('#form').append(usedInput);
                        usedInput.name = "image[]";
                    }, 0);

                    $('.upload-space').css({
                        'border': '1px dashed var(--mainRed)',
                        'width': '17.5%',
                        'minHeight': 'auto'
                    });
                    $('.dropzone').css({
                        'border': 'none',
                        'justify-content': 'unset'
                    });

                });

                this.on("removedfile",function () {
                    var images = this.element.childNodes.length;
                    var counter = $('.advert-counter-value');
                    counter.html(images-4);
                });

                var Dropzone = this;
                $("#advertPost").click(function (e) {
                    e.preventDefault();
                    Dropzone.processQueue();
                });
                this.on('sending', function (file, xhr, formData) {
                    // Append all form inputs to the formData Dropzone will POST
                    console.log(file)
                    var data = $('#frmTarget').serializeArray();
                    $.each(data, function (key, el) {
                        formData.append(el.name, el.value);
                    });
                })

            }
    });
});

$(function () {
    Dropzone.autoDiscover = false;
    $("#ProfSetDropzone").dropzone({
        url: "http://hotcar-dev.wayappdevelopment.tech/adverts/new",
        addRemoveLinks: true,
        autoProcessQueue: false,
        init:
            function () {
            var text = $('.profile-set-img-descr');
            var imgForm = $('.profile-set-img')
                this.on("addedfile",function () {
                    var usedInput = this.hiddenFileInput;
                    setTimeout(() => {
                        $('#form').append(usedInput);
                    usedInput.name = "image[]";
                    text.fadeOut(0.1);
                    imgForm.addClass('with-img')
                }, 0);

                    $('.upload-space').css({
                        'border': '1px dashed var(--mainRed)',
                        'width': '17.5%',
                        'minHeight': 'auto'
                    });
                    $('.dropzone').css({
                        'border': 'none',
                        'justify-content': 'unset'
                    });

                });

                this.on("removedfile",function () {
                    var images = this.element.childNodes.length;
                    var counter = $('.advert-counter-value');
                    counter.html(images-4);
                    text.fadeIn(0.1);
                    imgForm.removeClass('with-img')
                });

                var Dropzone = this;
                $("#advertPost").click(function (e) {
                    e.preventDefault();
                    Dropzone.processQueue();
                });
                this.on('sending', function (file, xhr, formData) {
                    // Append all form inputs to the formData Dropzone will POST
                    console.log(file)
                    var data = $('#frmTarget').serializeArray();
                    $.each(data, function (key, el) {
                        formData.append(el.name, el.value);
                    });
                })

            }
    });
});
//dropzone param
Dropzone.options.dZUpload = {
    acceptedFiles: 'image/*',
    clickable: "#uploadIcon",
    thumbnailWidth:"250",
    thumbnailHeight:"250",
    uploadMultiple:true,
    init: function () {
        this.on("complete", function (data) {
            var res = eval('(' + data.xhr.responseText + ')');
            $('#newImage').text(res.Message);
        });
        dr.on("maxfilesexceeded", function (data) {
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


    // $('.show-filters').click(function () {
    //     $('.filters').slideToggle('slow');
    //     $('body, html').animate({
    //         scrollTop: 0
    //     }, 300);
    // });

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
//bet list alignment
$(function () {
    carBlock = $('.open-car');
    betList = $('.bet-list');

    var cHeight = carBlock.outerHeight();
    var bHeight = betList.outerHeight();
    if(bHeight > cHeight/3) {
        betList.css({
            'maxHeight' : cHeight/2.41,
            'overflowY' : 'scroll'
        })
    }
})
//slider img width fix
$(function () {
    nav = $('.open-car-slider-nav');
    track = $('.open-car-slider-nav').find('.slick-track');
    img = $('.open-car-slider-nav').find('.slick-slide');

    if(track.find('div').length < 5) {
        track.css({
            'width' : '100%'
        });
        img.css({
            'width': '35%'
        })
    }
});
//input validation

class Valdiation{
    constructor(selector) {
        this.element = $(selector);
        this.isValid();
    }

    isValid() {
        this.element.keydown(function (e) {
            var pressed = e.which;
            if (pressed > 31 && (pressed < 48 || pressed > 57) && (pressed < 96 || pressed > 105)) {
                return false
            }
        })
    }
}

$(function () {
    var advertInput = new Valdiation('.advert-opt-input__num');
    var filterInputHalf = new Valdiation('.filter-input-half');
    var filterInput = new Valdiation('.filter-input')
})

class Loader {
    constructor(selector) {
        this.element = $(selector);
        // this.appeareLoad();
        // this.goodParent();
    }

    appeareLoad() {
        var dotsNum = 4;

        $('<div />', {
            class: 'loader'
        }).appendTo(this.element);

        $('<div />', {
            class: 'line-pulse'
        }).appendTo(this.element.find('.loader'));

        for (var i = 0; i < dotsNum; i++) {
            $('<div />').appendTo(this.element.find('.line-pulse'));
        }
        this.goodParent();
    }

    goodParent() {
        console.log(this.element);
        this.element.addClass('isLoading');
    }

    deleteLoader() {
        this.element.removeClass('isLoading');
        this.element.find('.loader').remove();
        this.element.prop('disabled', false);
    }

    disableBtn() {
        this.element.prop('disabled', true);
    }
}

$(function () {
    function createLoader(selector) {
        var loader = new Loader(selector);
        loader.disableBtn();
        // loader.deleteLoader();
        return loader;
    }

    createLoader($('#loader-sms'));
    createLoader($('#regSelect'));
});


/*request search toggle*/

$(function () {
    $('.search-request').click(function () {
        $('.requests-search').fadeToggle(100);
        $('.open-search-request').fadeToggle(0);
        $('.close-search-request').fadeToggle(0);
    })
})

