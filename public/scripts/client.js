/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  //Creates a tweet element using template literal and text to prevent cross scripting
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
  //Renders tweets in chronological order with recent being first and they are appended to the tweet-container
  const renderTweets = (tweets) => {
    $('#tweets-container').empty();
    tweets.forEach((tweetData)=> {
      const $tweet = createTweetElement(tweetData);
      $('#tweets-container').prepend($tweet);
    });
  };
  
  //On loading the page, stored tweets are rendered.
  $.ajax({
    type: "GET",
    url: "/tweets",
    success: function(tweets) {
      renderTweets(tweets);
    }
  })
  
  //On clicking "tweet" button, error messages are shown if tweet is empty or over character limit, or else tweet is sent to database and tweets are rendered.

  $("#submit-tweet").submit(function(event) {
    event.preventDefault();

    
    //Storing variables
    let $form = $(this);
    let url = "/tweets";
    const sendData = $form.serialize();
    
    //Error messages are hidden if shown before and shown if there is error

    $("#empty-tweet").slideUp();
    $("#long-tweet").slideUp();
    
    if (sendData.length === 5) {
      $("#empty-tweet").slideDown();
      return;
    }
    if (sendData.length - 5 > 140) {
      $("#long-tweet").slideDown();
      return;
    } 
  
    //Posts tweet and reseting tweet textbox and counter
    //Then gets tweets from database and renders
    $.ajax({
      type: "POST",
      url: url,
      data: sendData,
      success: function() {
        $("#tweet-text").val('');
        $(".counter").val(140);
      }
    })
    .then(() => {
      $.ajax({
        type: "GET",
        url: url,
        success: function(tweets) {
          return renderTweets(tweets);
        }
      })
    });
  });





});