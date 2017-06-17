/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        // easing only if we're linking to an anchor on the same page
        if (this.pathname == window.location.pathname &&
            this.protocol == window.location.protocol &&
            this.host == window.location.host) {
          var $anchor = $(this);
          $('html, body').stop().animate({
              scrollTop: $(this.hash).offset().top
          }, 1000, 'easeInOutExpo');
          event.preventDefault();
        }
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Hover tabs
$('[data-toggle-hover="tab"]').mouseover(function() {
    var $this = $(this);
    if (!$this.hasClass('active')) {
      $('[data-toggle-hover="tab"]').removeClass('active'); // can only have one per page :(
      $('.panel.tabs-virgin').removeClass('tabs-virgin'); // same here
      $(this).addClass('active').tab('show');
    }
});

$('[data-toggle="tooltip"]').tooltip();
$('[data-toggle="popover"]').popover({ 'html': true });

$('.carousel').carousel()
