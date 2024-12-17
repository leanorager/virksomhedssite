// Clone the carousel items for marquee effect. The items can be copied manually in the template too for a no-js solution.
$(document).ready(function () {
  var $firstSet = $(".e-carousel-items:first").clone();
  $firstSet.appendTo(".e-carousel-items-wrapper");
});
