$(document).ready(function () {

     $url = "https://api.jsonbin.io/v3/b/6511fcc70574da7622b048d8"
     //$url = "json/info.json"
    $.getJSON($url, function(jd) {
        //$('.nav-item a.option1').text(jd.record.menu.option1)
        // Top Menu
        $('.nav-item a.option1').text(jd.record.menu.option1)
        $('.nav-item a.option2').text(jd.record.menu.option2)
        $('.nav-item a.option3').text(jd.record.menu.option3)
        $('.nav-item a.option4').text(jd.record.menu.option4)
        $('.nav-item a.option5').text(jd.record.menu.option5)
        // Content Section 1
         $('.section1 h2').text(jd.record.content.section1.title)
         $('.section1 p').text(jd.record.content.section1.text)
         $('.section1 img').attr("src", jd.record.content.section1.image)
         // Content Section 2
         $('.section2 h2').text(jd.record.content.section2.title)
         $('.section2 p').text(jd.record.content.section2.text)
         $('.section2 img').attr("src", jd.record.content.section2.image)
         // Content Section 3
         $('.section3 h2').text(jd.record.content.section3.title)
         $('.section3 p').text(jd.record.content.section3.text)
         $('.section3 img').attr("src", jd.record.content.section3.image)
         // Content Section 4
         $('.section4 h2').text(jd.record.content.section4.title)
         $('.section4 p').text(jd.record.content.section4.text)
         // Content Section 4 Map
         $('.section4 iframe').attr('src',jd.record.map.code)
         // Map
         $('.section5 h2').text(jd.record.content.section5.title)
        //  Photos
        $photos = Object.entries(jd.record.photos)
        for (let i = 0; i < $photos.length; i++) {
            $cphoto = '<div class="card pt-3" style="width: 18rem;"> \
                  <a href="javascript:;" class="pop"><img src="'+$photos[i][1].image+'" class="card-img-top rounded-4 object-fit-cover" alt="..." height="200px"></a> \
                  <div class="card-body"> \
                    <h5 class="card-title">'+$photos[i][1].title+'</h5> \
                    <p class="card-text">'+$photos[i][1].text+'</p> \
                  </div> \
                </div>'
            $('.cphotos').append($cphoto)
            //console.log(i)
        }
        //console.log(Object.entries(jd.photos).length)
    })

    $('.nav-link').click(function(){
        $('.navbar-collapse').collapse('hide')
    })

    $('.btn-light').click(function (e) { 
        e.preventDefault()
        $(this).parent().hide()
    })


    $('body').on('click', '.pop', function() {
        $('.imagepreview').attr('src', $(this).find('img').attr('src'))
        $('#imagemodal').modal('show')  
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