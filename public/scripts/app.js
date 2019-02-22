
$(document).ready(function(){

//Function to escape user input
  function escape(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

//Function to render all tweets including recently submitted tweets
  function renderTweets(tweets) {
    tweets.forEach(function(el){
      let newTweet = createTweetElement(el);
      $("#section-tweet").append(newTweet)
    });
  }

//Function to create new tweets
  function createTweetElement(tweet) {
    let date = timePassed(tweet.created_at);
    let $tweet = $('<article class="old-tweet">').append(`

            <header class="art-header">
              <img src=${escape(tweet.user.avatars.small)}>
              <h3>${escape(tweet.user.name)}</h3>
              <p>${escape(tweet.user.handle)}</p>
            </header>
            <p>${escape(tweet.content.text)}</p>
            <footer >
              <p> ${date}</p>
              <span class="icons">
                <i class="fas fa-flag"> </i>
                <i class="fas fa-retweet"> </i>
                <i class="fas fa-heart"> </i>
              </span>
              </footer>
          </article> `)

    return $tweet;
  }

//When new tweet is submitted, validation checks are in place to ensure message exists and is under 140 characters.
//If there is no message being submitted or the message is over 140 characters and error message is displayed.
  $("#newTweet").submit(function(event) {
    event.preventDefault();
    let $tweet = $(".textarea").val().length;
        if ($tweet > 140) {
          document.getElementById("err-longTweet").hidden = false;
          document.getElementById("err-noTweet").hidden = true;

        } else if($tweet === 0 || $tweet === null){
          document.getElementById("err-longTweet").hidden = true;
          document.getElementById("err-noTweet").hidden = false;

        } else {
        $("#err-longTweet").slideUp("slow");
        $("#err-noTweet").slideUp("slow");
        $.post( "/tweets/", $("#newTweet").serialize());
        location.reload();
      }
  });


//Function to load all tweets
  function loadTweets(){
    $.ajax("/tweets", { method: 'GET' })
    .then(function (tweet) {
      renderTweets(tweet);
      console.log(tweet);
    });
  }

  //Ensuring all tweets are loaded
    loadTweets();


//When the "Compose" button is selected, the new tweet form toggles between a hidden and shown state.
  $("#compose-tweet").click(function() {
    $(".new-tweet").slideToggle("slow");
    $(".textarea").focus();
  });

});



