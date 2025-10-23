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



// $(document).ready(function () {
//   // 🔹 Initial state: sab hidden aur transparent
//   $(".paper1, .paper2").hide().css("opacity", "0");

//   // 🔹 Step 1: Button click → form hide + paper1 show
//   $(".forbutton").on("click", function () {
//     $(".formeyou").addClass("hide").fadeOut(300);

//     $(".paper1")
//       .css("opacity", "0")
//       .show()
//       .animate({ opacity: 1 }, 600)
//       .addClass("show");
//   });

//   // 🔹 Step 2: paper1 me kisi checkbox par click → fade to paper2
//   $(".paper1").on("change", "input[type='checkbox']", function () {
//     // paper1 ko thoda transparent karo
//     $(".paper1").animate({ opacity: 0.5 }, 300);

//     // chhota delay, then fade-out paper1 → fade-in paper2
//     setTimeout(function () {
//       $(".paper1")
//         .fadeOut(400)
//         .removeClass("show");

//       $(".paper2")
//         .css("opacity", "0")
//         .show()
//         .animate({ opacity: 1 }, 600)
//         .addClass("show");
//     }, 400);
//   });
// });
 



$(document).ready(function () {
  // Initially hide sections
  $(".paper1, .paper2, .paper3, .paper4").hide().css("opacity", "0");

  // Step 1: Button click → show paper1
  $(".forbutton").on("click", function () {
    // Hide .formeyou
    $(".formeyou").fadeOut(300);

    // Show paper1 with full opacity
    $(".paper1")
      .show()
      .animate({ opacity: 1 }, 600)
      .addClass("show");
  });

  // Step 2: Checkbox click → dim paper1, show paper2
  $(".paper1").on("change", "input[type='checkbox']", function () {
    // Dim paper1
    $(".paper1").animate({ opacity: 1 }, 300);

    // Show paper2 with full opacity
    $(".paper2")
      .show()
      .animate({ opacity: 1 }, 300)
      .addClass("show");
  });

$(".paper2").on("change", "input[type='checkbox']", function () {
    // Dim paper1
    $(".paper2").animate({ opacity: 1 }, 300);

    // Show paper3 with full opacity
    $(".paper3")
      .show()
      .animate({ opacity: 1 }, 300)
      .addClass("show");
  });

$(".paper3").on("change", "input[type='checkbox']", function () {
    // Dim paper1
    $(".paper3").animate({ opacity: 1 }, 300);

    // Show paper3 with full opacity
    $(".paper4")
      .show()
      .animate({ opacity: 1 }, 300)
      .addClass("show");
  });
});



