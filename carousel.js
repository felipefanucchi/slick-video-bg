//(function(){
//	var $iframes = $( "iframe" );

//		$iframes.each(function () {
//		$( this ).removeAttr( "width" )
//	    .removeAttr( "height" );
//	});
//})();

function initCarousel(){
  var _carousel = $('.carousel'),
      _controls = $('.carousel-controls');
  
  _carousel.slick({
  	dots:false,
  	arrows:true,
  	infinite: true,
  	fade: true,
  	autoplay: true
  	//prevArrow: $('.arrow.left'),
  	//rightArrow: $('.arrow.right')
  });
};

initCarousel();
