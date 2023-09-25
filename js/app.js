$(document).ready(function () {


    $.getJSON('json/menu.json', function(jd) {
        $('.nav-item a.option1').text(jd.option1)
        $('.nav-item a.option2').text(jd.option2)
        $('.nav-item a.option3').text(jd.option3)
        $('.nav-item a.option4').text(jd.option4)
        $('.nav-item a.option5').text(jd.option5)
    })

    $('.nav-link').click(function(){
        $('.navbar-collapse').collapse('hide')
    })

    $('.btn-light').click(function (e) { 
        e.preventDefault()
        $(this).parent().hide()
    })

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        nav: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })


});