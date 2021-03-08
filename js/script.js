 $(document).ready(function() {
        $('.scroll').on('click', function() {
            var page = $(this).attr('href'); 
            var speed = 500; 
            $('html, body').animate( { scrollTop: $(page).offset().top }, speed );
            return false;
        });
    });

    $(document).ready(function(){
    $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#back-to-top').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 400);
            return false;
        });
});