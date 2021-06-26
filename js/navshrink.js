$(window).on("scroll", function(){
    if($(window).scrollTop()>50){
    	$('nav').addClass('black');
    }
    else{
        $('nav').removeClass('black');
    }
});