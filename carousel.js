//(function(){
//	var $iframes = $( "iframe" );

//		$iframes.each(function () {
//		$( this ).removeAttr( "width" )
//	    .removeAttr( "height" );
//	});
//})();
var initCarousel = (function (){
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

})();
var videoWrapper = $('.carousel-wrapper');
var initVideo = (function(){
  var videos = $('.carousel-wrapper video');
  videos.each(function(i, el){
    var eachVideo = el;
  });
  return{
    action: videos
  }
})();
initVideo.action.map(function(i, el){
  var elementVideo = el;
  videoWrapper.on('click', function(){
    elementVideo.play();
  });
});
videoWrapper.on('click', function(){
  var _messageMobile = $('.carousel-wrapper .warning');
  var windowSize = $(window).width();
  if(windowSize < 768){
    _messageMobile.hide();
  }
});

