
$(document).ready(function() {
  const $scrollButton = $("#scroll-top");
  const viewportHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
  const viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  
  $(document).on("scroll", function() {
    if ($(window).scrollTop() > 0.10 * viewportHeight) {
      $scrollButton.show();
      $(".right-nav").hide();
    } else {
      $scrollButton.hide();
      if (viewportWidth > 390) {
        $(".right-nav").show();
      }

    }
  });
  const scrollTop = () => {
    // const scrollHeight = document.body.scrollHeight;
    // if (viewportWidth > 390 || scrollHeight < 2 * viewportHeight) {
    //   $(window).scrollTop(0);
    //   $("#tweet-text").focus();
    // } else {
    //   $(window).scrollTop(viewportHeight * 2);
    //   $("#tweet-text").focus();
    // }
    $(window).scrollTop(0);
  }

  const compose = () => {
    // $(window).scrollTop(0);
    $("#tweet-text").focus();
    // const scrollHeight = document.body.scrollHeight;
    // if (viewportWidth > 390 || scrollHeight < 2 * viewportHeight) {
    //   $(window).scrollTop(0);
    //   $("#tweet-text").focus();
    // } else {
    //   $(window).scrollTop(viewportHeight * 2);
    //   $("#tweet-text").focus();
    // }
  }
  $scrollButton.on("click", scrollTop);
  $(".right-nav").on("click", compose);
});

