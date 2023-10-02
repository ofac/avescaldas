$(document).ready(function () {

     //https://api.jsonbin.io/v3/b/6511fcc70574da7622b048d8
    $.getJSON('json/info.json', function(jd) {
        //$('.nav-item a.option1').text(jd.record.menu.option1)
        // Top Menu
        $('.nav-item a.option1').text(jd.menu.option1)
        $('.nav-item a.option2').text(jd.menu.option2)
        $('.nav-item a.option3').text(jd.menu.option3)
        $('.nav-item a.option4').text(jd.menu.option4)
        $('.nav-item a.option5').text(jd.menu.option5)
        // Content Section 1
         $('.section1 h2').text(jd.content.section1.title)
         $('.section1 p').text(jd.content.section1.text)
         $('.section1 img').attr("src", jd.content.section1.image)
         // Content Section 2
         $('.section2 h2').text(jd.content.section2.title)
         $('.section2 p').text(jd.content.section2.text)
         $('.section2 img').attr("src", jd.content.section2.image)
         // Content Section 3
         $('.section3 h2').text(jd.content.section3.title)
         $('.section3 p').text(jd.content.section3.text)
         $('.section3 img').attr("src", jd.content.section3.image)
         // Content Section 4
         $('.section4 h2').text(jd.content.section4.title)
         $('.section4 p').text(jd.content.section4.text)
         // Content Section 5
         $('.section5 h2').text(jd.content.section5.title)
        //  Photos
        console.log(Object.entries(jd.photos).length)

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