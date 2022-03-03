
$(document).ready(function() {
  const $scrollButton = $("#scroll-top");
  const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  // alert(vw);
  console.log("vh", vh);
  $(document).on("scroll", function() {
    console.log("scroll", $(window).scrollTop());
    if ($(window).scrollTop() > 0.10 * vh) {
      // alert("you have scrolled");
      $scrollButton.show();
      $(".right-nav").hide();
    } else {
      $scrollButton.hide();
      if (vw > 390) {
        $(".right-nav").show();
      }

    }
  });
  const scrollTop = () => {
    // const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    // console.log("scrollheight" , document.body.scrollHeight)
    const scrollHeight = document.body.scrollHeight;
    if (vw > 390 || scrollHeight < 2 * vh) {
      $(window).scrollTop(0);
      $("#tweet-text").focus();
    } else {
      $(window).scrollTop(vh * 2);
      $("#tweet-text").focus();
    }
  }
  $scrollButton.on("click", scrollTop);
  $(".right-nav").on("click", scrollTop);
});

//Get the button:
// mybutton = document.getElementById("#scroll-top");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }