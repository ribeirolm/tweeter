$(document).ready(function(){
  let maxChar = 140;

  $('.textarea').on('input', function() {
    let charCount = $(this).val().length;
    let charLeft = maxChar - charCount;

    $('.counter').text(charLeft);

      if (charLeft < 0) {
    $('.counter').css('color', 'red');
    } else {
      $('.counter').css('color', '#244751');
    }
  });

});