$(window).on("scroll", function() {
    var windowTop = $(window).scrollTop();
    var windowBottom = windowTop + $(window).height();

    $(".fade-section").each(function() {
      var elementTop = $(this).offset().top;
      var elementBottom = elementTop + $(this).outerHeight();

      // Jab section viewport me aaye
      if (elementBottom > windowTop + 100 && elementTop < windowBottom - 100) {
        $(this).addClass("visible").removeClass("hidden");
      } 
      // Jab section viewport se bahar chala jaye
      else {
        $(this).addClass("hidden").removeClass("visible");
      }
    });
  });

  // Page load hone par bhi check kare
  $(window).trigger("scroll");
 






