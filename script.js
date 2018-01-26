var currentID, currentFeed, newLink;

//click handlers for feeds to load into DOM
$('#firstFeed li').on('click', function(e) {
  e.preventDefault();
  let link = $(this).find('a').attr("href");
  $("#mainArticle").load(link);
  currentID = parseInt($(this).attr('id'));
  currentFeed = $(this).closest('div').attr("id");
});

$('#secondFeed li').on('click', function(e) {
  e.preventDefault();
  let link = $(this).find('a').attr("href");
  $("#mainArticle").load(link);
  currentID = parseInt($(this).attr('id'));
  currentFeed = $(this).closest('div').attr("id");
});

$('#thirdFeed li').on('click', function(e) {
  e.preventDefault();
  let link = $(this).find('a').attr("href");
  $("#mainArticle").load(link);
  currentID = parseInt($(this).attr('id'));
  currentFeed = $(this).closest('div').attr("id");
});

//view next article if current article viewed has a next article
$('#nextArticle').on('click', function(e) {
  e.preventDefault();
  if(currentID != null) {
    currentID = currentID += 1;
    newLink = $("#" + `${currentFeed}` + " #" + `${currentID}`).find('a').attr("href");
    $("#mainArticle").load(newLink);
    console.log(newLink);
  } else {
    alert("Please select your first article");
  }
});

//view previous article if current article has a previous article
$('#previousArticle').on('click', function(e) {
  e.preventDefault();
  if(currentID > 1) {
    currentID = currentID -= 1;
    newLink = $("#" + `${currentFeed}` + " #" + `${currentID}`).find('a').attr("href");
    $("#mainArticle").load(newLink);
    console.log(newLink);
  } else {
    alert("No previous article found");
  }
});

//view entire feed in new window
$('#fullFeed').on('click', function(e) {
  newLink = $("#" + `${currentFeed}` + " #" + `${currentID}`).find('a').attr("href");
  window.open(newLink);
});
