<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');

$feed_url = $_GET["url"];

class Feed {
  private $xml;
  public function fetchFeedData($url) {
    $data = file_get_contents($url);
    $this->$xml = new SimpleXmlElement($data);
  }

  public function getFeed() {
    $itemCount = 0;
    echo "<ul>";
    foreach($this->$xml->channel->item as $entry) if($itemCount++ < 5){
      echo "<li id='$itemCount'><a href='$entry->link' title='$entry->title'>" . $entry->title . "</a></li>";
    }
    echo "</ul>";
  }
}

$feed = new Feed;
$feed->fetchFeedData($feed_url);
$feed->getFeed();

?>
