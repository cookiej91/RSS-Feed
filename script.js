var currentID, currentFeed, newLink;
var temp = 0;

$(document).ready(function () {
  loadFeed('http://feeds.feedburner.com/TechCrunch/startups', '#firstFeed');
  loadFeed('http://api.flickr.com/services/feeds/photos_public.gne?tags=computers&format=rss_200', '#secondFeed');
  loadFeed('http://feeds.bbci.co.uk/news/technology/rss.xml?edition=uk', '#thirdFeed');
});

function loadFeed(feed, elem) {
  $.ajax({
    url: "feed.php",
    data: {url: feed},
    method: "GET",
    success: (data)=>{
       $(elem).append(data);
       eventHandler(elem);
    }
  });
}

// click handlers for feeds to load into DOM
function eventHandler(elem) {
  $(`${elem} li`).on('click', function(e) {
    e.preventDefault();
    let link = $(this).find('a').attr("href");
    $("#mainArticle").attr('src', link);
    currentID = parseInt($(this).attr('id'));
    currentFeed = $(this).closest('div').attr("id");
  });
}

// view next article if current article viewed has a next article
$('#nextArticle').on('click', function(e) {
  e.preventDefault();
  if(currentID != null) {
    currentID += 1;
    newLink = $("#" + `${currentFeed}` + " #" + `${currentID}`).find('a').attr("href");
    $("#mainArticle").attr('src', newLink);
  } else {
    alert("Please select your first article");
  }
});

// view previous article if current article has a previous article
$('#previousArticle').on('click', function(e) {
  e.preventDefault();
  if(currentID > 1) {
    currentID -= 1;
    newLink = $("#" + `${currentFeed}` + " #" + `${currentID}`).find('a').attr("href");
    $("#mainArticle").attr('src', newLink);
  } else {
    alert("No previous article found");
  }
});

// view entire feed in new window
$('#fullFeed').on('click', function(e) {
  newLink = $("#" + `${currentFeed}` + " #" + `${currentID}`).find('a').attr("href");
  window.open(newLink);
});
