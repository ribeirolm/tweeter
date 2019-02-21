// / Fake data taken from tweets.json
// Test / driver code (temporary). Eventually will get this from the server.
$(document).ready(function(){

  // const data = [
  //   {
  //     "user": {
  //       "name": "Newton",
  //       "avatars": {
  //         "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
  //         "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
  //         "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
  //       },
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
  //       "avatars": {
  //         "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
  //         "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
  //         "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
  //       },
  //       "handle": "@rd" },
  //     "content": {
  //       "text": "Je pense , donc je suis"
  //     },
  //     "created_at": 1461113959088
  //   },
  //   {
  //     "user": {
  //       "name": "Johann von Goethe",
  //       "avatars": {
  //         "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
  //         "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
  //         "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
  //       },
  //       "handle": "@johann49"
  //     },
  //     "content": {
  //       "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
  //     },
  //     "created_at": 1461113796368
  //   }
  // ];

  function escape(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  function renderTweets(tweets) {
    // loops through tweets
    tweets.forEach(function(el){
      // calls createTweetElement for each tweet
      let newTweet = createTweetElement(el);
      // takes return value and appends it to the tweets container
      $("#section-tweet").append(newTweet)
    });
  }

  function createTweetElement(tweet) {
    let $tweet = $('<article class="old-tweet">').append(`

            <header class="art-header">
              <img src=${escape(tweet.user.avatars.small)}>
              <h3>${escape(tweet.user.name)}</h3>
              <p>${escape(tweet.user.handle)}</p>
            </header>
            <p>${escape(tweet.content.text)}</p>
            <footer >
              <p> ${escape(tweet.created_at)}</p>
              <span class="icons">
                <i class="fas fa-flag"> </i>
                <i class="fas fa-retweet"> </i>
                <i class="fas fa-heart"> </i>
              </span>
              </footer>
          </article> `)

    return $tweet;
  }

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

  function loadTweets(){
    $.ajax("/tweets", { method: 'GET' })
    .then(function (tweet) {
      renderTweets(tweet);
      console.log(tweet);
    });
  }

    loadTweets();

  $("#compose-tweet").click(function() {
    $(".new-tweet").slideToggle("slow");
    $(".textarea").focus();
  });


});



