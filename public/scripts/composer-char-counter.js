$(document).ready(function() {
  //When contents of compose tweet text-box changes, counter updates
  //counter-error class changes color to red
  $("#tweet-text").on("input", function(e) {
    const $counter = $(this).parent().find(".counter");
    $counter.val(140 - this.value.length);
    
    if ($counter.val() < 0) {
      $counter.addClass("counter-error");
    } else {
      $counter.removeClass("counter-error");
    }
  });
});