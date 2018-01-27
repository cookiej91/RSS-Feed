<?php
include('init.inc.php');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
?>

<html>
  <head>
    <link rel="stylesheet" type="text/css" href="rssStyle.css" />
  </head>
  <body>
    <div id="wrapper">
      <div id="mainArticle">
        Main Article
      </div>
      <div id="feedDivs">
        <h2>Feeds</h2>
        <div id="firstFeed" class="result">
          <h2>TechCrunch</h2>
          <?php
            getNews("http://feeds.feedburner.com/TechCrunch/startups");
          ?>
        </div>

        <div id="secondFeed">
          <h2>Flickr</h2>
          <?php
            getNews("http://api.flickr.com/services/feeds/photos_public.gne?tags=computers&format=rss_200");
          ?>
        </div>

        <div id="thirdFeed">
          <h2>BBC</h2>
          <?php
            getNews("http://feeds.bbci.co.uk/news/technology/rss.xml?edition=uk");
          ?>
        </div>
      </div>
      <div id="button">
        <button id="previousArticle">Previous Article</button>
        <button id="fullFeed">View Entire Feed</button>
        <button id='nextArticle'>Next Article</button>
      </div>
    </div>
  </body>
  <script src="http://code.jquery.com/jquery-latest.min.js"></script>
  <script src="script.js"></script>
</html>
