
// wow

new WOW().init();





//navbar-toggle x icon....

$(document).ready(function () {
			  $(".navbar-toggle").on("click", function () {
				    $(this).toggleClass("active");
			  });
		});

//owl

 $(document).ready(function() {
     
      var owl = $("#owl2");
     
      owl.owlCarousel({
        navigation : false,
        singleItem : true,
        transitionStyle : "goDown",
       responsive :true,
	  pagination: true,
	  autoPlay:true,

      });
     
    });

 

 //button up

	$(document).ready(function(){
 var btnUp = $('<div/>', {'class':'btntoTop'});
    btnUp.appendTo('body');
    $(document)
        .on('click', '.btntoTop', function() {
            $('html, body').animate({
                scrollTop: 0
            }, 700);
        });

    $(window)
        .on('scroll', function() {
            if ($(this).scrollTop() > 200)
                $('.btntoTop').addClass('active');
            else
                $('.btntoTop').removeClass('active');
        });
        });

// modal welcome popup

setTimeout(function () {
	
	$('.second').show().addClass('animated bounceIn');}, 3000
);
setTimeout(function () {
$('.popup-overlay').css({'opacity':'1','z-index':'4'});}, 3000
);

$('.close').click(function(){
  $('.second').addClass('animated flipOutX').fadeOut("slow");
  $('.popup-overlay').css({'opacity':'0','z-index':'0'});
  $('.popup-overlay').hide();
})



//accordion

  $('.accordion-toggle').on('click', function(){
    $(this).closest('.panel-group').children().each(function(){
    $(this).find('>.panel-heading').removeClass('active');
     });

    $(this).closest('.panel-heading').toggleClass('active');
  });


$('.collapse').on('shown.bs.collapse', function(){
$(this).parent().find(".fa-angle-right").removeClass("fa-angle-right").addClass("fa-angle-down");
}).on('hidden.bs.collapse', function(){
$(this).parent().find(".fa-angle-down").removeClass("fa-angle-down").addClass("fa-angle-right");
});


