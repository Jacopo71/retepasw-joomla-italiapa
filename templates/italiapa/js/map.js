jQuery('.map-responsive')
	.click(function(){
		jQuery(this).find('iframe').addClass('clicked')})
	.mouseleave(function(){
		jQuery(this).find('iframe').removeClass('clicked')});
