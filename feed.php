<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
function getNews($feed_url, $uniqueId) {
  $data = file_get_contents($feed_url);
  $x = new SimpleXmlElement($data);
  $tmp = 0;
  echo "<ul>";
  foreach($x->channel->item as $entry) if($tmp++ < 5){
    echo "<li id='$tmp'><a href='$entry->link' title='$entry->title'>" . $entry->title . "</a></li>";
  }
  echo "</ul>";
}
?>
