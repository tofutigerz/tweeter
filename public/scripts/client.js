/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


// Test / driver code (temporary). Eventually will get this from the server.
// const tweetData = {
//   "user": {
//     "name": "Newton",
//     "avatars": "https://i.imgur.com/73hZDYK.png",
//       "handle": "@SirIsaac"
//     },
//   "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//   "created_at": 1461116232227
// };

// const data = [
//   {
//     "user": {
//       "name": "Newton",
//       "avatars": "https://i.imgur.com/73hZDYK.png"
//       ,
//       "handle": "@SirIsaac"
//     },
//     "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//     "created_at": 1461116232227
//   },
//   {
//     "user": {
//       "name": "Descartes",
//       "avatars": "https://i.imgur.com/nlhLi3I.png",
//       "handle": "@rd" },
//     "content": {
//       "text": "Je pense , donc je suis"
//     },
//     "created_at": 1461113959088
//   }
// ]

$(document).ready(function() {


  
  const createTweetElement = (tweetData) => {
    const $tweet = $(`
      <article class="tweet">
        <header>
          <div class="user-info">
            <img src=${tweetData.user.avatars} class="tweet-profile-pic">
            <h3>${tweetData.user.name}</h3>
          </div>
          <h3>${tweetData.user.handle}</h3>
        </header>      
        <p class="tweet-content">${$("<p>").text(tweetData.content.text).html()}</p>
        <hr>
        <footer>
          <p>${timeago.format(tweetData.created_at)}</p>
          <div>
            <i class="fa-solid fa-flag"></i>
            <i class="fa-solid fa-retweet"></i>
            <i class="fa-solid fa-heart"></i>
          </div>
        </footer>
      </article>
    `);
    return $tweet;
  
  };
  // const $tweet = createTweetElement(tweetData);
  
  // // console.log($tweet); // to see what it looks like
  // $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
  
  const renderTweets = (tweets) => {
    tweets.forEach((tweetData)=> {
      const $tweet = createTweetElement(tweetData);
      $('#tweets-container').prepend($tweet);
    });
  };
  
  // renderTweets(data);
  
  // $(function() {
  //   const $button = $('#load-more-posts');
  //   $button.on('click', function () {
  //     console.log('Button clicked, performing ajax call...');
  //     $.post('/tweets', { method: 'POST' })
  //     .then(function (morePostsHtml) {
  //       console.log('Success: ', morePostsHtml);
  //       $button.replaceWith(morePostsHtml);
  //     });
  //   });
  
  // });
  
  $("#submit-tweet").submit(function(event) {
    event.preventDefault();
    $("#empty-tweet").slideUp();
    $("#long-tweet").slideUp();
  
    let $form = $(this);
    let url = $form.attr("action");
    const sendData = $form.serialize();
    // alert(sendData);
    
    if (sendData.length === 5) {
      // alert("You can't send an empty tweet!");
      $("#empty-tweet").slideDown();
      return;
    }
    if (sendData.length - 5 > 140) {
      // alert("You have gone over the character limit!");
      $("#long-tweet").slideDown();
      return;
    } 
  
    $.ajax({
      type: "POST",
      url: url,
      data: sendData,
      success: function() {
        // alert(sendData);
        $("#tweet-text").val('');
      }
    })
    .then(() => {
      $.ajax({
        type: "GET",
        url: url,
        success: function(tweets) {
          renderTweets(tweets.slice(-1));
        }
      })
    });
  })





});