
$(document).ready(function() {

  //On scroll event, if window has scrolled more than 10% of viewport height, displays to top button and hides compose button
  const $scrollButton = $("#scroll-top");
  const viewportHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
  
  $(document).on("scroll", function() {
    if ($(window).scrollTop() > 0.10 * viewportHeight) {
      $scrollButton.show();
      $(".right-nav").hide();
    } else {
      $scrollButton.hide();
      $(".right-nav").show();

    }
  });
  
  //On clicking scroll top button, scrolls to the top
  const scrollTop = () => {
    $(window).scrollTop(0);
  }
  $scrollButton.on("click", scrollTop);
  
  //On clicking create a tweet button in navbar, focuses on tweet textbox
  const compose = () => {
    $("#tweet-text").focus();
  }
  $(".right-nav").on("click", compose);
});

