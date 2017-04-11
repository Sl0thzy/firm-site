jQuery(function ($) {


    /*	
    	// all Parallax Section
    	$(window).load(function(){'use strict',
    		$("#services").parallax("50%", 0.3);
    		$("#clients").parallax("50%", 0.3);
    	});
    */
    //Pretty Photo
    $("a[data-gallery^='prettyPhoto']").prettyPhoto({
        social_tools: false
    });


    // Contact form validation
    var form = $('.contact-form');
    form.submit(function () {

        $this = $(this);
        $.post($(this).attr('action'), function (data) {
            $this.prev().text(data.message).fadeIn().delay(3000).fadeOut();
        }, 'json');
        return false;
    });


    // Navigation Scroll
    $(window).scroll(function (event) {
        Scroll();
    });

    $('.navbar-collapse ul li a').click(function () {
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top - 79
        }, 1000);
        return false;
    });

});

// Preloder script
jQuery(window).load(function () {

    $(".preloader").delay(1600).fadeOut("slow").remove();
});

//Preloder script
jQuery(window).load(function () {


    // Slider Height
    var slideHeight = $(window).height();
    $('#home .carousel-inner .item, #home .video-container').css('height', slideHeight);

    $(window).resize(function () {
        $('#home .carousel-inner .item, #home .video-container').css('height', slideHeight);
    });

});


// User define function

function Scroll() {
    var contentTop = [];
    var contentBottom = [];
    var winTop = $(window).scrollTop();
    var rangeTop = 200;
    var rangeBottom = 500;
    $('.navbar-collapse').find('.scroll a').each(function () {
        contentTop.push($(this).offset().top);
        contentTop.push($(this).offset().top + $($(this).height()));
    })
    $.each(contentTop, function (i) {
        if (winTop > contentTop[i] - rangeTop) {
            $('.navbar-collapse li.scroll')
                .removeClass('active')
                .eq(i).addClass('active');
        }
    })

};

//Custom Package Creator

var estTotal = 0;
var action = 0;

$(document).ready(function () {
    c1 = parseInt($("#host").attr("data-price")); // Checkbox 1
    c1a = $("#host");
    c2 = parseInt($("#smm").attr("data-price")); // Checkbox 2
    c2a = $("#smm");
    c3 = parseInt($("#ccc").attr("data-price")); // Checkbox 3
    c3a = $("#ccc");
    c4 = parseInt($("#wm").attr("data-price"));
    c4a = $("#wm");
    c5 = parseInt($("#seo").attr("data-price"));
    c5a = $("#seo");
    c6 = parseInt($("#web").attr("data-price"));
    c6a = $("#web");

    estTotal = 0;

});

function packageEst() {

    /*
    if (c1a.is(':checked')) { (estTotal += c1) } else { (estTotal -= c1) }; // If checked, add c1 value
    if (c2a.is(':checked')) { (estTotal += c2) } else { (estTotal -= c2) }; // If checked, add c2 value
    if (c3a.is(':checked')) { (estTotal += c3) } else { (estTotal -= c3) }; // If checked, add c3 value
    if (c4a.is(':checked')) { (estTotal += c4) } else { (estTotal -= c4) };
    if (c5a.is(':checked')) { (estTotal += c5) } else { (estTotal -= c5) };
    if (c6a.is(':checked')) { (estTotal += c6) } else { (estTotal -= c6) };
*/
    //var actionId = ($(id).attr('id'));
    var myId = packageEst.caller.arguments[0].target.id;
    switch (myId) {
        case 'host':
            action = c1a;
            modifyPackage(action);
            break;
        case 'smm':
            action = c2a;
            modifyPackage(action);
            break;
        case 'ccc':
            action = c3a;
            modifyPackage(action);
            console.log("ccc Werrrkkk");
            break;
        case 'wm':
            action = c4a;
            modifyPackage(action);
            break;
        case 'seo':
            action = c5a;
            modifyPackage(action);
            break;
        case 'web':
            action = c6a;
            modifyPackage(action);
            break;
        default:
            return false;
            console.log("Switch Defaulted");
    }
}

function modifyPackage(action) {
    var amount = parseInt(action.attr("data-price"));
    if (action.is(':checked')) {
        !action.is(':checked');
        parseInt(estTotal += amount);

    } else {
        parseInt(estTotal -= amount);

    }

    packageFrontEnd();
}

function packageFrontEnd() {
    //$('#estPrice').text("$" + parseInt(estTotal) + ".00");
    $('#estPrice').each(function () {
        var $this = $(this),
            countTo = estTotal;
        $({
            countNum: $this.text()
        }).animate({
            countNum: countTo
        }, {

            duration: 100,
            easing: 'linear',
            step: function () {
                $this.text('$' + Math.floor(this.countNum));
            },
            complete: function () {
                $this.text('$' + this.countNum);
                //alert('finished');
            }
        });
    });
    $(action).parent().parent().parent().toggleClass('animated pulse');
    $(action).parent().parent().parent().toggleClass('custom-selector-style');
}
