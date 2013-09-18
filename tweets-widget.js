$(function() {
  var hashtag = 'nsa';
  var data = { hashtag: hashtag, tweets: [] };

  // renders received data into DOM
  var render = function(response) {
    $.each(JSON.parse(response), function(index, value) {
      data.tweets.push(value.value);
    });
    var el = Handlebars.templates.hashtag(data);
    $('#tweets-widget').append(el);
  };

  $.get('http://dspace.elevate.at:5555/hashtag/' + hashtag, function(response) {
    render(response);
  });
});
