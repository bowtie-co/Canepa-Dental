$(function () {
  var howMany = $('#medium-content').attr('howMany');
  var $content = $('#medium-content');
  var data = {
    rss_url: 'https://medium.com/feed/@BriteBee'
  };
  $.get('https://api.rss2json.com/v1/api.json', data, function (response) {
    if (response.status == 'ok') {
      var output = '';
      $.each(response.items, function (k, item) {
        var visibleSm;
        if(k <= howMany){
          visibleSm = '';
        } else {
          visibleSm = ' visible-sm';
        }
        output += '<div class="6u 12u$(medium) ' + visibleSm + '">';
        output += '<div class="blog-post"><header>';
        var tagIndex = item.description.indexOf('<img'); // Find where the img tag starts
        var srcIndex = item.description.substring(tagIndex).indexOf('src=') + tagIndex; // Find where the src attribute starts
        var srcStart = srcIndex + 5; // Find where the actual image URL starts; 5 for the length of 'src="'
        var srcEnd = item.description.substring(srcStart).indexOf('"') + srcStart; // Find where the URL ends
        var src = item.description.substring(srcStart, srcEnd); // Extract just the URL
        output += '<div class="blog-element"  styles="text-align:center;"><img class="rss-image img-responsive"  src="' + src + '"></div></header>';
        output += '<div class="blog-content"><h4><a href="'+ item.link + '">' + item.title + '</a></h4>';
        output += '<div class="post-meta"><span>By ' + item.author + '</span></div>';
        var yourString = item.description.replace(/<img[^>]*>/g,"");
        var maxLength = 700 // maximum number of characters to extract
        //trim the string to the maximum length
        var trimmedString = yourString.substr(0, maxLength);
        //re-trim if we are in the middle of a word
        trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
        output += '<p>' + trimmedString + '...</p>';
        output += '</div></div></div>';
        return k < 1;
      });
      $content.html(output);
    }
  });
});
