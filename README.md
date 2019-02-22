# Tweeter Project

## Description

Tweeter is a simple, single-page Twitter clone using HTML, CSS, JS, jQuery and AJAX on the front-end Node, Express and MongoDB back-end.

Users are able to submit tweets up to 140 characters and have the tweet dynamically render in the list below.

## Dependencies

- Express
- Node 5.10.x or above
- Body-parser
- Chance
- jQuery
- md5
- MongoDB

## Getting Started

1. Install all dependencies (using the `npm install` command).
2. Run the development web server using the `node server/index.js` command. The app will be served at <http://localhost:8080/>.
3. Go to <http://localhost:8080/> in your browser.

## Final Product

### Tweeter homepage:
!["Screenshot of Homepage"](https://github.com/ribeirolm/tweeter/blob/master/public/images/Tweeter-Homepage.png?raw=true)

### When "Compose" button is selected, the new tweet form appears:
!["Screenshot of New Tweet Form"](https://github.com/ribeirolm/tweeter/blob/master/public/images/Tweeter-New-Tweet2.png?raw=true)

### Submitting a new tweet:

#### Note the character counter in the bottom right corner of the form adjusts as content is typed in the input field.
!["Screenshot of New Tweet"](https://github.com/ribeirolm/tweeter/blob/master/public/images/Tweeter-New-Tweet.png?raw=true)

#### Upon submission, the tweet appears below, with tweets being sorted with those most recently created first.
!["Screenshot of Dynamic Tweet Rendering"](https://github.com/ribeirolm/tweeter/blob/master/public/images/Tweet-Dynamic-Render.png?raw=true)

#### When hovering a tweet the tweet will appear at 100% opacity.
!["Screenshot of Tweet when Hovered"](https://github.com/ribeirolm/tweeter/blob/master/public/images/Hover-Tweet.png?raw=true)

### Tweet validation and error states:

#### The new tweet form validates the tweet content based on character length, displaying errors when attempting to submit an empty tweet or a tweet longer than 140 characters.
!["Screenshot of Empty Tweet Error Message"](https://github.com/ribeirolm/tweeter/blob/master/public/images/Err-Empty-Tweet.png?raw=true)

!["Screenshot of Long Tweet Error Message"](https://github.com/ribeirolm/tweeter/blob/master/public/images/Err-Long-Tweet.png?raw=true)
