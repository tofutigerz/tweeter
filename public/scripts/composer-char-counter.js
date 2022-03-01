$(document).ready(function() {
  // console.log("ready");
  $("#tweet-text").on("input", function(e) {
    // console.log(this);
    // console.log($(this).val());
    const counter = $(this).parent().find(".counter");
    // console.log(counter.innerHTML);
    // counter.innerHTML = "300";
    // console.log($(counter).val(130));
    $(counter).val(140 - this.value.length);
    if ($(counter).val() < 0) {
      counter.css({"color":"red"});
    }
  });
});