//menu toggle
(function($) {
    $('.nav-toggle').click(function(e) {
        e.preventDefault();
        $('.nav-toggle').toggleClass('active');
        $('.nav-menu').toggleClass('active');
        $('.nav-overlay').toggleClass('active');
    })
    $('.nav-overlay').click(function(e) {
        e.preventDefault();
        $('.nav-toggle').toggleClass('active');
        $('.nav-menu').toggleClass('active');
        $('.nav-overlay').toggleClass('active');
    })
    $(".abc").click(function(e) {
        if ($("#btn-close").hasClass("active")) {
            $(".nav-toggle").trigger("click");
        }
    })
})(jQuery);